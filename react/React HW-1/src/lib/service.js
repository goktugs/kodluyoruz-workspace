import axios from 'axios';

export default async function getData(user_id) {
  const { data: user } =
    await axios`https://jsonplaceholder.typicode.com/users/${user_id}`;
  const { data: posts } =
    await axios`https://jsonplaceholder.typicode.com/posts/${user_id}`;

  let final = Object.assign(user, posts);
  console.log(final);
}
