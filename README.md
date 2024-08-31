Overview
======================
This project sets up a simple HTTP server using Express that listens on port 3000. It provides an endpoint (/generate-jwt) which generates a JSON Web Token (JWT) for authenticating OpenTok's REST API https://tokbox.com/developer/rest/#authentication. The JWT is created using the `jsonwebtoken` library https://www.npmjs.com/package/jsonwebtoken. Upon a successful GET request to this endpoint, the server returns the generated JWT as JSON. If there's an error, it returns an error message.

How to Use
======================
1. Install the dependencies:  
```npm install express jsonwebtoken```
2. Add your project key and secret on `generate-opentok-project-jwt.js`
3. Run the Node.js script:  
```node generate-opentok-project-jwt.js```  
  
REST methods for project management (e.g., getting, updating, or creating) require administrator access to the OpenTok account. If you are an account administrator, use `generate-opentok-account-jwt.js` with your account key and secret for these operations.
