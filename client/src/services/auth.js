import axios from 'axios';
import * as CONSTS from '../utils/consts';

// here we are just maing our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
	return {
		status: false,
		errorMessage: 'Internal server error. Please check your server'
	};
}

function successStatus(res) {
	console.log("success: ", res)
	return {
		status: true,
		data: res.data
	};
}

// creates a basic url for every request in this file
const authService = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`
});

export function login(credentials) {
	return authService
		.post('/login', credentials)
		.then(successStatus)
		.catch(internalServerError);
}

export function getLoggedIn() {
	return authService
		.get(`/session`, {
			headers: {
				Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN)
			}
		})
		.then(successStatus)
		.catch(internalServerError);
}


export function signup(credentials) {
	return authService
		.post('/signup', credentials)
		.then(successStatus)
		.catch(internalServerError);
}

export function logout() {
	return authService
		.delete('/logout', {
			headers: {
				Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN)
			}
		})
		.then(successStatus)
		.catch(internalServerError);
}

export function getUser() {

	return authService.get(`/session`, {headers: {Authorization: localStorage.getItem(CONSTS.ACCESS_TOKEN)}})
	.then((result) => {
		if (!result.data) {
			console.log('RES IN CASE OF FAILURE', result);
			return null ;
		} else {
			return result.data.user
		}
	}).catch((err) => console.log("error with getuser", err))
}








/* ************ BOOKSHELF, need to create new file *********/

export function displayUserPage(userId) {
	return authService
		.post(`/profile/user`, userId)
		.then(successStatus)
		.catch(internalServerError);
}