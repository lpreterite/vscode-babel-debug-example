export class User {
    constructor({ name }) {
        this._id = Date.now();
        this._name = name;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
}

const user = new User({ name: 'Packy' });

export default user;