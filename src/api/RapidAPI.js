import axios from 'axios';

export default axios.create({
	baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/',
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
		'x-rapidapi-key': '62d6b2363cmsh3a4bb3ff8e1454ep1091f1jsn0c21545a0c7a'
	}
});
