from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId


app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/citasmedicas'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.citasmedicas

@app.route('/citas', methods=['POST'])
def createCitas():
  print(request.json)
  id = db.insert({
    'name': request.json['name'],
    'lastname': request.json['lastname'],
    'identification': request.json['identification'],
    "birthdate": request.json['birthdate'],
    "city": request.json['city'],
    "neighborhood": request.json['neighborhood'],
    "telephone": request.json['telephone']
  })
  return jsonify({'message': 'Cita creada'})


@app.route('/citas', methods=['GET'])
def getCitas():
    citas = []
    for doc in db.find():
        citas.append({
          '_id': str(ObjectId(doc['_id'])),
          'name': doc['name'],
          'lastname': doc['lastname'],
          'identification': doc['identification'],
          'birthdate': doc['birthdate'],
          'city': doc['city'],
          'neighborhood': doc['neighborhood'],
          'telephone': doc['telephone']
        })
    return jsonify(citas)

@app.route('/citas/<id>', methods=['DELETE'])
def deleteCitas(id):
  db.delete_one({'_id': ObjectId(id)})
  return jsonify({'message': 'Cita eliminada'})

@app.route('/citas/<id>', methods=['PUT'])
def updateCitas(id):
  print(request.json)
  db.update_one({'_id': ObjectId(id)}, {"$set": {
    'name': request.json['name'],
    'lastname': request.json['lastname'],
    'identification': request.json['identification'],
    "birthdate": request.json['birthdate'],
    "city": request.json['city'],
    "neighborhood": request.json['neighborhood'],
    "telephone": request.json['telephone']
  }})
  return jsonify({'message': 'Cita actualizada'})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)