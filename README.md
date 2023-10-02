Project 7

1. Project Description
Project 7 is designed to test server queries using hypertext transfer protocol (HTTP) request methods for the Urban Grocers server. The results of the requests are then checked against the expected result to determine success or failure according to the case and request method being tested.

2. Requirements and Setup
In order to use this project you are required to:
	-Have knowledge of the JavaScript programming language - the entire project is written in JavaScript.
	-Have an active internet connection on your device to be able to make requests to the server.
	-Use apiDoc to check the endpoints (url/docs/). 
	-Use Postman in order to be able to perform certain steps and check the expected response body. 
	-Any terminal emulator, preferably GitBash if using Windows. 

You also need to install the following the following softwares on your device:
	-Visual Studio Code (VS Code) - the source-code editor used to make the project in order to visualize and execute or edit the code if required.
	-Node Package Manager (NPM) - a JavaScript package manager to install this projects’ dependencies through the projects' package.json file. 
	
In order to execute the project you need to clone the new repo from GitHub to your local computer: 
	-Open your preferred terminal emulator. Use GitBash if on Windows.
	-Create a directory to store the repository using the mkdir command.
	-Clone the repository. The command you use will depend on the authentication strategy that you’re using. For SSH, use the following: 
	git clone git@github.com:username/hm07-qa-us.git
	-Run npm install from the console in your folder. 
	-Open VS Code, select “Open Folder” and then select the hm07-qa-us folder that you cloned to your computer.
	-Start a new server and replace the API URL with the unique link generated after the launch of Urban Grocers server.	


3. Configuration
	-Open VS Code, select “Open Folder” and then select the hm07-qa-us folder that you cloned to your computer.
	-Replace the API URL in the config.js file with the unique link generated after the launch of a new Urban Grocers server.
	-Open the “tests” folder.

4. Running the Tests
Test 1: GET Method
	-Open the getHandler.test.js file. The endpoint used is “/api/v1/warehouses”.
	-Type npx jest getHandlers.test.js in the terminal console of VS Code to check if the code works and if the actual result matches the expected result. The tests are named “Should return 200 status code” and “Should contain names of the warehouses”.

Test 2: POST Method
	-Open the postHandler.test.js file. The endpoint used is “/api/v1/warehouses/check”.
	-Type npx jest postHandlers.test.js in the terminal console of VS Code to check if the code works and if the actual result matches the expected result. The tests are named “Should return 200 status code” and “Should contain the expected data”.

Test 3: PUT Method
	-Create a kit on Postman using POST with the endpoint "/api/v1/kits" using this request body:
{
    "cardId": 7, 
    "name": "Delete Me" 
} 
	-Open the putHandler.test.js file. The endpoint used is “/api/v1/kits/7”.
	-Type npx jest putHandlers.test.js in the terminal console of VS Code to check if the code works and if the actual result matches the expected result. The tests are named “Should return 200 status code” and “Should contain the expected data”.
	-Additionaly you can check if the database values have been updated using a GET endpoint. In this case it should be GET "/api/v1/kits/search?name=Delete+Me"

Test 4: DELETE Method
	-Either use the created kit for the PUT method or create a new one using POST.
	-Open the deleteHandler.test.js file. The endpoint used is “/api/v1/kits/7”.
	-Type npx jest deleteHandlers.test.js in the terminal console of VS Code to check if the code works and if the actual result matches the expected result. The tests are named “Should return 200 status code” and “Should contain the expected data”.
	-Additionaly you can check if the database values have been updated using a GET endpoint. In this case it should be GET "/api/v1/kits/search?name=Delete+Me"

5. Test Cases 
Test 1: GET Method
The request returns the 200 OK status code - PASSED
The response body contains the warehouse “Food city” - PASSED

Test 2: POST Method
The request returns the 200 OK status code - PASSED
The response body checks the availability of the products with these IDs: 5, 4. - PASSED

Test 3: PUT Method
The request returns the 200 OK status code - PASSED
The response body confirms that the items have been added to the kit changed successfully - PASSED

Test 4: DELETE Method
The request returns the 200 OK status code - PASSED
The response body confirms that the kit has been successfully deleted - PASSED

6. Code Style
Most of the code in the files was already written. Some variables were added in order to make the code work. I wrote comments to pinpoint the parts that I added. I did not comment on redundant changes made in all the files unless something was new. This is what was added, their use and the justification of their name:

“ let actualReponseCode ”: variable named for its use storing the Code returned from the server request. I used the format camelCase to define the name of this variable. Using let here allows the value of the variable to be changed to whatever status it finds.


“ test('Should return 200 status code', async () => { “: naming the test for the case tested, the name reflects that we are checking the right status code is returned. Async is here to define a function that returns a promise.

“ const response = await fetch(`${config.API_URL}/api/v1/warehouses`) “: constant collecting the contents of the endpoint’s array and storing it locally. It is a constant and not a variable because once obtained from the endpoint it should not be modified by anything. The endpoint was added after the API URL so that the request would be sent to the appropriate address.

“ actualStatusCode = response.status “: This variable returns the status from the response body of the actualStatusCode variable.

“ let actualResponseBody: “: Same concept as the “letActualResponseBody”. This variable is used when testing the response body.

“ test('Should contain the expected data', async () => { “: The name indicates that the response body is being checked.

“ actualResponseBody = await response.json() “: the code stops execution while waiting for the response from the server to be parsed in JSON and then stored in actualResponseBody as an array.

“ expect(actualResponseBody[2].name).toBe('Food City') “: Comparative statement. Item number 3 (Index 2) of actualResponseBody array must contain the corresponding name which in this case is “Food City”. I’m using toBe because the value is a string, a primitive data type.

“ const requestBody = {
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
} “ : defining an array named requestBody that should not be modified after its initial definition hence the use of const. This is the request body sent in order to verify the availability of the specified products in the warehouses.

“ expect(actualResponseBody).toEqual({'ok': true}); “: This checks the deep equality between the expected value and the value in the actualResponseBody. I used toEqual because the expected value is not a primitive data type, so using toBe does not work with this.
