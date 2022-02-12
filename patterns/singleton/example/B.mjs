import counter from '../singleton.mjs'

console.log("From module B: ", counter.increment());
console.log("From module B: ", counter.increment());
console.log("From module B: ", counter.increment());

export default {}
