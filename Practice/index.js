// var foo = 1;
// var change = () => {
//   this.foo = 2;
//   console.log(this.foo);
// };
// var obj = {
//   foo: 3
// };
// var bounded = change.bind(obj);

// // What would be the output of the following?
// console.log(foo);
// console.log(change());
// console.log(foo);
// console.log(obj.foo);
// console.log(bounded());

console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)