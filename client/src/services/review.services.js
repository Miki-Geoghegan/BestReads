import axios from 'axios';




function internalServerError(err) {
	return {
		status: false,
		errorMessage: 'Internal server error. Please check your server'
	};
}

function successStatus(res) {
	return {
		status: true,
		data: res.data
	};
}

const service = axios.create({
	baseURL: `${process.env.REACT_APP_SERVER_URL}/review`
});
