"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var chai_1 = require("chai");
var client_1 = require("../../../utils/mongodb/client");
var user_1 = require("../../../models/user");
describe('MongoDBClient', function () {
    var mongoClient;
    var mongoId;
    var driverDb;
    /** Insert some testdata */
    before(function (done) {
        mongodb_1.MongoClient.connect('mongodb://localhost:27017/inversify-express-example', function (error, db) {
            db.collection('user').drop(function (dropError, result) {
                db.collection('user').insertOne({
                    email: 'lorem@ipsum.com',
                    name: 'Lorem'
                }, function (e, insert) {
                    mongoId = insert.ops[0]._id;
                    driverDb = db;
                    done();
                });
            });
        });
    });
    before(function (done) {
        mongoClient = new client_1.MongoDBClient();
        // let the mongodb connect
        setTimeout(function () {
            done();
        }, 1000);
    });
    it('should get back all user', function (done) {
        mongoClient.find('user', {}, function (error, data) {
            chai_1.expect(error).to.be.null;
            chai_1.expect(data).to.have.length(1);
            chai_1.expect(data[0].email).to.be.equal('lorem@ipsum.com');
            chai_1.expect(data[0].name).to.be.equal('Lorem');
            done();
        });
    });
    it('should give back the right user', function (done) {
        mongoClient.findOneById('user', mongoId, function (error, data) {
            chai_1.expect(error).to.be.null;
            chai_1.expect(data.email).to.be.equal('lorem@ipsum.com');
            chai_1.expect(data.name).to.be.equal('Lorem');
            done();
        });
    });
    it('should add a new user', function (done) {
        mongoClient.insert('user', new user_1.User('dorem@sit.com', 'Dorem'), function (error, data) {
            chai_1.expect(error).to.be.null;
            chai_1.expect(data.email).to.be.equal('dorem@sit.com');
            chai_1.expect(data.name).to.be.equal('Dorem');
            driverDb.collection('user').find().toArray(function (checkError, checkData) {
                chai_1.expect(checkData).to.have.length(2);
                driverDb.collection('user').deleteOne({ _id: new mongodb_1.ObjectID(data._id) }, function (cleanError, cleanData) {
                    done();
                });
            });
        });
    });
    it('should update a existing user', function (done) {
        mongoClient.update('user', mongoId, new user_1.User('test@ipsum.com', 'Test', mongoId), function (error, data) {
            chai_1.expect(error).to.be.null;
            chai_1.expect(data.email).to.be.equal('test@ipsum.com');
            chai_1.expect(data.name).to.be.equal('Test');
            driverDb.collection('user').findOne({
                _id: mongoId
            }, function (checkError, checkData) {
                chai_1.expect(checkData.email).to.equal('test@ipsum.com');
                chai_1.expect(checkData.name).to.equal('Test');
                done();
            });
        });
    });
    it('should delete a user', function (done) {
        mongoClient.remove('user', mongoId, function (error, data) {
            driverDb.collection('user').find().toArray(function (checkError, checkData) {
                chai_1.expect(checkData).to.have.length(0);
                done();
            });
        });
    });
});
//# sourceMappingURL=client.spec.js.map