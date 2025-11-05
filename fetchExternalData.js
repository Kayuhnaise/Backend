// fetchExternalData.js
const axios = require("axios");
const db = require("./data/database");

async function fetchAndStorePosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data;

    // Validate data shape
    const validPosts = posts.filter(
      p => p.id && p.userId && p.title && p.body
    );

    console.log(`Fetched ${posts.length} posts, validated ${validPosts.length}.`);

    // Insert into DB
    const insertStmt = db.prepare(
      "INSERT OR REPLACE INTO posts (id, userId, title, body) VALUES (?, ?, ?, ?)"
    );

    validPosts.forEach(p => {
      insertStmt.run(p.id, p.userId, p.title, p.body);
    });

    insertStmt.finalize();
    console.log("Posts successfully stored in SQLite database.");
  } catch (err) {
    console.error("Error fetching or saving posts:", err.message);
  } finally {
    db.close();
  }
}

fetchAndStorePosts();
