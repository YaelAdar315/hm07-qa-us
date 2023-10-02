// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "Delete Me",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        }
    ]
}

test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

test('Should contain the expected data', async () => {
	let actualResponseBody
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
	
	expect(actualResponseBody.ok).toBe(true);
});
