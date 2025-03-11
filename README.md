# Personal Finance Tracker System

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [API Endpoint Documentation](#api-endpoint-documentation)
- [Testing Instructions](#testing-instructions)
  - [Unit Tests](#unit-tests)
  - [Integration Tests](#integration-tests)
  - [Performance Tests](#performance-tests)
- [Security Considerations](#security-considerations)

## Setup Instructions

**1. Prerequisites:**

- **Node.js:** Ensure that Node.js is installed on your machine.
- **MongoDB:** Install MongoDB and ensure it's running. 

**2. Installation Steps:**


# Navigate into the project directory
cd personal-finance-tracker

# Install dependencies
npm install

**3. Configuration:

Create a .env file in the root directory and add the necessary environment variables:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/finance_tracker
JWT_SECRET=your_secret_key
Replace your_secret_key with a strong, unique secret key.

**4. Running the Application:

### Start the server
npm start

##API Endpoint Documentation

**1. User Registration

Endpoint: POST /api/users/register

Description: Registers a new user.

Request Body:

{
  "username": "string",
  "email": "string",
  "password": "string"
}
Response:
{
  "message": "User registered successfully.",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}

**2. User Login

Endpoint: POST /api/users/login

Description: Authenticates a user and returns a JWT token.

Request Body:

{
  "email": "string",
  "password": "string"
}
Response:

{
  "message": "Login successful.",
  "token": "string"
}
3. Create Transaction

Endpoint: POST /api/transactions

Description: Creates a new financial transaction.

Request Headers:

{
  "Authorization": "Bearer <token>"
}
Request Body:

{
  "amount": "number",
  "type": "string", // e.g., 'income' or 'expense'
  "category": "string",
  "date": "YYYY-MM-DD",
  "description": "string"
}
Response:

{
  "message": "Transaction created successfully.",
  "transaction": {
    "id": "string",
    "amount": "number",
    "type": "string",
    "category": "string",
    "date": "YYYY-MM-DD",
    "description": "string"
  }
}

**4. Get Transactions

Endpoint: GET /api/transactions

Description: Retrieves a list of transactions for the authenticated user.

Request Headers:

{
  "Authorization": "Bearer <token>"
}
Response:

[
  {
    "id": "string",
    "amount": "number",
    "type": "string",
    "category": "string",
    "date": "YYYY-MM-DD",
    "description": "string"
  },
  // More transactions...
]

##Testing Instructions

**1. Unit Tests:

Unit tests validate individual components and functions in isolation.

Testing Framework: Jest

Running Unit Tests:

# Run unit tests
npm run test:unit

**2. Integration Tests:

Integration tests ensure different parts of the application work together seamlessly, including interactions between controllers, services, and the MongoDB database.

Running Integration Tests:

# Run integration tests
npm run test:integration

**3. Performance Tests:

Performance tests evaluate the API's performance under various loads to ensure it can handle multiple requests simultaneously without significant latency.

Tool: Artillery.io

Running Performance Tests:

# Run performance tests
npm run test:performance

**4. Test Environment Setup:

Unit and Integration Tests:

Ensure that a test database is configured to prevent test data from affecting the production database.

In the .env file, set the MONGODB_URI to your test database URI:

MONGODB_URI=mongodb://localhost:27017/finance_tracker_test
Performance Tests:

Ensure the application is running locally or on a test server before executing performance tests.

##Security Considerations
Perform security tests to identify vulnerabilities within your application, such as SQL injection, cross-site scripting (XSS), and insecure authentication. Tools like OWASP ZAP or Burp Suite can be used for automated security testing.
