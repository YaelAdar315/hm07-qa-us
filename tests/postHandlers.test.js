// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "products": [
        {
            "id": 5,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 5
        }
    ]
}
// added request body

test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

test('Should contain the expected data', async () => {
	let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
	
	expect(actualResponseBody['Everything You Need']).toEqual({'Sprite Soft Drink': true, "Fruit Power Juice - Litchi": false});
});
