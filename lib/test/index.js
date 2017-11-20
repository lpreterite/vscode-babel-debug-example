"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require("chai-as-promised");

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiAsPromised2.default);

function test(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data + "Packy");
        }, 600);
    });
}

describe('Promise', function () {
    it('Promise return "Hi, Packy"', function () {
        return _chai.assert.eventually.equal(test('Hi,'), "Hi,Packy");
    });
});
//# sourceMappingURL=index.js.map