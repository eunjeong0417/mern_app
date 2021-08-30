import axios from 'axios';
//서버와 연결하기 위해 axios사용

const URL = 'http://localhost:5000/posts';
//서버 url

export const fetchPosts = () => axios.get(URL);