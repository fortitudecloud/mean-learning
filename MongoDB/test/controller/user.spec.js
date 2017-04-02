"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var user_1 = require("../../controller/user");
var user_2 = require("../../service/user");
var MongoDBClientMock = (function () {
    function MongoDBClientMock() {
    }
    MongoDBClientMock.prototype.find = function (collection, filter, result) {
        return result(null, [{
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            }, {
                email: 'doloe@sit.com',
                name: 'Dolor'
            }]);
    };
    MongoDBClientMock.prototype.findOneById = function (collection, objectId, result) {
        return result(null, {
            email: 'lorem@ipsum.com',
            name: 'Lorem'
        });
    };
    MongoDBClientMock.prototype.insert = function (collection, model, result) {
        return result(null, {
            email: 'test@test.com',
            name: 'test'
        });
    };
    MongoDBClientMock.prototype.update = function (collection, objectId, model, result) {
        return result(null, {
            email: 'changed@changed.com',
            name: 'Lorem'
        });
    };
    MongoDBClientMock.prototype.remove = function (collection, objectId, result) {
        return result(null, 'Lorem');
    };
    return MongoDBClientMock;
}());
describe('UserController', function () {
    var controller;
    beforeEach(function () {
        controller = new user_1.UserController(new user_2.UserService(new MongoDBClientMock()));
    });
    it('should get back all user', function (done) {
        controller.getUsers().then(function (data) {
            chai_1.expect(data).to.deep.equal([{
                    email: 'lorem@ipsum.com',
                    name: 'Lorem'
                }, {
                    email: 'doloe@sit.com',
                    name: 'Dolor'
                }]);
            done();
        });
    });
    it('should give back the right user', function (done) {
        controller.getUser({
            params: {
                id: 'Lorem'
            }
        }).then(function (data) {
            chai_1.expect(data).to.deep.equal({
                email: 'lorem@ipsum.com',
                name: 'Lorem'
            });
            done();
        });
    });
    it('should add a new user', function (done) {
        controller.newUser({
            body: {
                email: 'test@test.com',
                name: 'test'
            }
        }).then(function (result) {
            chai_1.expect(result).to.deep.equal({
                email: 'test@test.com',
                name: 'test'
            });
            done();
        });
    });
    it('should update a existing user', function (done) {
        controller.updateUser({
            body: {
                email: 'changed@changed.com',
                name: 'Lorem'
            }, params: {
                id: 'Lorem'
            }
        }).then(function (result) {
            chai_1.expect(result).to.deep.equal({
                email: 'changed@changed.com',
                name: 'Lorem'
            });
            done();
        });
    });
    it('should delete a user', function (done) {
        controller.deleteUser({
            params: {
                id: 'Lorem'
            }
        }).then(function (result) {
            chai_1.expect(result).to.equal('Lorem');
            done();
        });
    });
});
//# sourceMappingURL=user.spec.js.map