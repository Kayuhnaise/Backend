# SWENG 861 – Backend Development Assignment

**Student:** Keya Gangadharan  
**Course:** SWENG 861 – Software Engineering  
**Assignment:** Week 3 – Backend Development Project  

---

## Overview
This project demonstrates key backend development concepts using **Node.js**, **Express**, and **SQLite**.  
It fulfills all parts of the SWENG 861 Week 3 assignment rubric by implementing:
- 3rd-party API consumption and data validation
- RESTful CRUD API design
- Database integration with SQLite
- Error handling and simple API-key authentication for security

---

## Project Structure
```
sweng861_backend_node/
│
├── index.js                # Main Express server
├── fetchExternalData.js    # Fetch & validate data from JSONPlaceholder
│
├── data/
│   ├── database.js         # SQLite connection & table creation
│   └── database.db         # Local SQLite database
│
├── routes/
│   └── posts.js            # CRUD routes for posts
│
├── middleware/
│   └── auth.js             # API key authentication middleware
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation & Setup

### 1. Install dependencies
```bash
npm install
```

### 2️. Fetch and store data from the JSONPlaceholder API
```bash
node fetchExternalData.js
```
This script fetches posts from  
`https://jsonplaceholder.typicode.com/posts`  
validates them, and saves them into `data/database.db`.

### 3️. Start the server
```bash
npm run start
```
Server will run at:  
`http://localhost:3000`

---

## API Key Security

All `/posts` endpoints require a valid API key header.  
Requests **without** the key or with an incorrect one will be rejected.

**Header example:**
```
x-api-key: mysecretkey
```

| Scenario | Expected Response |
|-----------|------------------|
| Valid key | 200 OK (data returned) |
| Missing key | 401 Unauthorized – “API key missing” |
| Invalid key | 403 Forbidden – “Invalid API key” |

---

## API Endpoints

| Method | Endpoint | Description | Requires Header |
|--------|-----------|--------------|-----------------|
| GET | `/posts` | Retrieve all posts | yes |
| GET | `/posts/:id` | Retrieve a single post by ID | yes |
| POST | `/posts` | Create a new post | yes |
| PUT | `/posts/:id` | Update an existing post | yes |
| DELETE | `/posts/:id` | Delete a post | yes |

**Example POST body:**
```json
{
  "userId": 10,
  "title": "My test post",
  "body": "This post was added from Postman."
}

---

## Error Handling
A centralized Express error-handling middleware returns structured JSON for unexpected errors:

```json
{
  "status": "error",
  "message": "Internal Server Error"
}
```

Improves API reliability and prevents server crashes

---


##  Testing (Postman)
1. Open Postman  
2. Enter URL `http://localhost:3000/posts`  
3. Add header:  
   - **Key:** `x-api-key`  
   - **Value:** `mysecretkey`  
4. Click **Send**

Successful response (200 OK) will return your post data as JSON.  

---


