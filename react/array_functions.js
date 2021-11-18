const users = [
  { name: 'Mehmet', age: 18 },
  { name: 'Ahmet', age: 21 },
  {
    name: 'Murat',
    age: 35,
  },
];

// push
// users.push('Ayşe');
// console.log(users);

// map: aslında for işini yapıyor
// users.map((item) => {
//   console.log(item);
// });

// find
// const findIt = users.find((item) => item.name === 'Mehmet' && item.age > 20);
// console.log(findIt);

// filter filtreliyo
// const filtered = users.filter(({ name, age }) => name === 'Mehmet' && age < 20);
// console.log(filtered);

// some verdiğin koşul uyarsa true yoksa false
const some = users.some((item) => item.age === 18);
console.log(some);

// every bütün elemanlar şarta uyacak
