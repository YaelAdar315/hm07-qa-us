// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
// added test name
	let actualStatusCode;
// defined variable
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
// added endpoint
		actualStatusCode = response.status;
// stored status of response
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
// compared values
});


test('Response body should contain names of the warehouses', async () => {
	let actualResponseBody;
	
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();
// parsed data as JSON
	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseBody[2].name).toBe('Food City');
});