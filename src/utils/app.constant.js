import axios from 'axios';

export const APPLICATION_NAME = 'AirCall';
export const APPLICATION_LOGO = '';

export const BASE_URL =
	process.env.NODE_ENV === 'production'
		? 'https://aircall-job.herokuapp.com'
		: 'https://aircall-job.herokuapp.com';

export const API = axios.create({
	baseURL: BASE_URL
});

export const ACTIVITIES_ACTION = '/activities';
export const RESET = '/reset';