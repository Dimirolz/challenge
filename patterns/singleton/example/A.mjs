import counter from '../singleton.mjs'

console.log("From module A: ", counter.increment());
console.log("From module A: ", counter.increment());
console.log("From module A: ", counter.increment());

export default {}
