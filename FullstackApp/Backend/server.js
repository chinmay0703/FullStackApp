const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root@123',
  database: 'rahul',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');

  // Check if the unique constraint already exists
  const checkConstraintQuery =
    "SELECT COUNT(*) AS count FROM information_schema.TABLE_CONSTRAINTS WHERE CONSTRAINT_SCHEMA = 'rahul' AND TABLE_NAME = 'users' AND CONSTRAINT_NAME = 'unique_email'";

  db.query(checkConstraintQuery, (err, result) => {
    if (err) {
      console.error('Error checking unique constraint:', err);
    } else {
      const count = result[0].count;

      if (count === 0) {
        // Create a unique constraint on the email column
        const createUniqueConstraintQuery =
          'ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email)';
        db.query(createUniqueConstraintQuery, (err, result) => {
          if (err) {
            console.error('Error creating unique constraint:', err);
          } else {
            console.log('Unique constraint created successfully');
          }
        });
      } else {
        console.log('Unique constraint already exists');
      }
    }
  });
});

// Default route handler
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const user = { email, password };

  // Insert the new user into the database
  db.query('INSERT INTO users SET ?', user, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).json({ error: 'Email already exists' });
      } else {
        res.status(500).json({ error: 'An error occurred' });
      }
    } else {
      // Clear the input details
      const clearedUser = { email: '', password: '' };

      res.status(200).json({ message: 'User created successfully', user: clearedUser });
    }
  });
});

// Signin endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  db.query('SELECT * FROM users WHERE email = ?', email, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred' });
    } else {
      if (result.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
      } else {
        const user = result[0];
        if (user.password === password) {
          res.status(200).json({ success: true });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
