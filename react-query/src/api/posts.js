import axios from 'axios'

async function getposts(obj) {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10', {
      params: { _sort: 'title' },
    });
    console.log(obj);
    return res.data;
  } catch (error) {
    console.error('Error Fetching Posts:', error);
    return [];
  }
}

export default getposts