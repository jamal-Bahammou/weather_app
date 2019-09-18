import OpenWeatherApi from '../api/OpenWeatherApi';

export const fetchCity = (lat, lon) => async dispatch => {
	const response = await OpenWeatherApi.get(
		`/weather?lat=${lat}&lon=${lon}&units=metric&APPID=993a62875051824f7021ea9e2001abec`
	);
	dispatch({
		type: 'FETCH_CITY',
		payload: response.data
	});
};

export const fetchList = (lat, lon) => async dispatch => {
	const response = await OpenWeatherApi.get(
		`/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=993a62875051824f7021ea9e2001abec`
	);
	dispatch({
		type: 'FETCH_LIST',
		payload: response.data.list
	});
};
