# SWENG 861 – Backend Development Assignment

**Student:** Keya Gangadharan  
**Course:** SWENG 861 – Software Engineering  
**Assignment:** Week 3 – Backend Development Project  

---

##Overview
This project demonstrates key backend development concepts using **Node.js**, **Express**, and **SQLite**.  
It fulfills all parts of the SWENG 861 Week 3 assignment rubric by implementing:
- 3rd-party API consumption and data validation
- RESTful CRUD API design
- Database integration with SQLite
- Error handling and simple API-key authentication for security

---

##Project Structure
sweng861_backend_node/
│
├── index.js # Main Express server
├── fetchExternalData.js # Fetch & validate data from JSONPlaceholder
│
├── data/
│ ├── database.js # SQLite connection & table creation
│ └── database.db # Local SQLite database
│
├── routes/
│ └── posts.js # CRUD routes for posts
│
├── middleware/
│ └── auth.js # API key authentication middleware
│
├── package.json
├── package-lock.json
└── README.md