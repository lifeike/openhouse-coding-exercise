## Open House AI Code challenge

#### Decription

1. this project is a simple web application using React to retrieve data from third-party server and display housing information.
2. installation
   - git clone && cd openhouse-coding-exercise
   - npm install && npm start

#### Follwing Up Question

1. Add some local mock data to respond to users when remote server is down
2. Use skeleton screen to make it more user friendly, due to time constraints, I used loading component instead.
3. Use media query to make it more responsive
4. Use react-redux and react-promise to manage global states
5. For mobile side, add scroll down loading and scroll up refresh
6. many many...

#### Issue summary

1. TS compiler reports function.tsx file complete property doesn't exist on type 'GlobalEventHandler'

#### API summary

1. functions: please review the code comments
2. communities endpoint: https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-aukun/service/codetest/incoming_webhook/communities
3. homes endpoint: https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-aukun/service/codetest/incoming_webhook/homes
4. **You can use this API url to test other applicants, request limit is 1M times.**
5. note: mongodb will convert number value to an object to keep it typed, which will probably make data computing a little bit harder.

#### Tech stack

- react
- react-bootstrap
- create-new-app scaffoding tool
- mongo atlas
- typescript

#### Contributor

- Feike Li

#### UI Reference

[remax.ca](https://www.remax.ca/ab/calgary-real-estate?v=1)
[calgaryhomes.ca](https://calgaryhomes.ca/city-centre-calgary-real-estate.php)
[canada real estate company](https://www.royallepage.ca/en/ab/calgary/properties/)

#### Versions History: N/A
