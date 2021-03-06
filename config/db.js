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
    case 'update':
      collection.update(
        {_id: objectId(data.id)},
        {$set: data.data},
        {},
        data.callback
      );
      break;
    case 'remove':
      collection.remove({_id: objectId(data.id)}, data.callback);
      break;
    case 'add_posts':
      collection.insert(data.data, data.callback);
      break;
    case 'view_posts':
      collection.find({}).toArray(data.callback);
      break;
    case 'update_post':
      collection.update(
        {_id: objectId(data.data.id)},
        {
          $push: {
            comments: {
              id: new objectId(),
              comment: data.data.comment
            }
          }
        },
        data.callback
      );
      break;
      case 'delete_comment_post':
        collection.update(
          {},
          {
            $pull: {
              comments: {
                id: objectId(data.data.id)
              }
            }
          },
          {multi: true},
          data.callback
        );
        break;
  }
}

module.exports = function() {

  return connDB;
}
