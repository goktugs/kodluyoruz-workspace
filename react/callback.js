// setTimeout(() => {
//   console.log('merhaba');
// }, 2000);

// setInterval(() => {
//   console.log('her saniye çalışacağım');
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log('Hello');
// });

import fetch from 'node-fetch';
import axios from 'axios';

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((data) => data.json())
//   .then((users) => console.log(users));

// async function getData() {
//   const users = await (
//     await fetch('https://jsonplaceholder.typicode.com/users')
//   ).json();

//   const post1 = await fetch(
//     'https://jsonplaceholder.typicode.com/posts/1'
//   ).json();

//   const post2 = await fetch(
//     'https://jsonplaceholder.typicode.com/posts/2'
//   ).json();

//   console.log('users', users);
//   console.log('post1', post1);
//   console.log('post2', post2);
// }

// getData();

// (async () => {
//   const { data: users } = await axios(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   const { data: post1 } = await axios(
//     'https://jsonplaceholder.typicode.com/posts/1'
//   );

//   const { data: post2 } = await axios(
//     'https://jsonplaceholder.typicode.com/posts/2'
//   );

//   console.log('users', users);
//   console.log('post1', post1);
//   console.log('post2', post2);
// })();

// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve({ name: 'Selami' });
//     }

//     reject('bir problem oluştu');
//   });
// };

// getComments(3)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      'https://jsonplaceholder.typicode.com/posts/' + post_id
    );

    resolve(data);
  });
};

(async () => {
  await getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  await getPost(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
})();
