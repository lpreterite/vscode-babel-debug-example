import { default as chai, assert} from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

function test(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data + "Packy");
        }, 600);
    });
}

describe('Promise', function () {
    it('Promise return "Hi, Packy"', function () {
        return assert.eventually.equal(test('Hi,'), "Hi,Packy");
    });
});