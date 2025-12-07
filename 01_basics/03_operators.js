const id = Symbol("id");

const user = {
  name: "Aman",
  [id]: 123
};

console.log(user[id]); // 123


for (let key in user) {
  console.log(key);   // only "name", not Symbol
}
