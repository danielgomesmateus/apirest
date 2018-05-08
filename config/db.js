var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');

const url = "mongodb://localhost:27017";
const dbName = "apirest";

var connDB = function(data) {

  mongodb.connect(url, function(error, client) {

    assert.equal(null, error);

    const db = client.db(dbName);
    query(db, data);
  });
}

function query(db, data) {

  var collection = db.collection(data.collection);

  switch (data.option) {
    case 'index':
      collection.find({}).toArray(data.callback);
      break;
    case 'getById':
      collection.find({_id: objectId(data.data)}).toArray(data.callback);
      break;
    case 'add':
      collection.insert(data.data, data.callback);
      break;
  }
}

module.exports = function() {

  return connDB;
}
