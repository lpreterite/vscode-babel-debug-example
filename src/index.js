import { default as user, User } from './User';

console.log(user.id);
console.log(user.name);

const cathy = new User({ name: 'cathy' });

console.log(cathy.id);
console.log(cathy.name);