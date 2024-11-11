const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const app = express();

require('dotenv').config(); // Load environment variables
app.use(express.json()); // Parse JSON requests
app.use(cors());

// uses component adduser, API to insert user data
app.post('/addUser', (req, res) => {
    const { id, username, password } = req.body;

    const query = 'INSERT INTO accounts (id, username, password) VALUES (?, ?, ?)';
    db.execute(query, [id, username, password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database query error');
        } else {
            res.status(200).send('User added successfully');
        }
    });
});

// Example API to insert partnership
// app.post('/addPartnership', (req, res) => {
//     const { id, partner_id, status } = req.body;

//     const query = 'INSERT INTO partnerships (id, partner_id, status) VALUES (?, ?, ?)';
//     connection.execute(query, [id, partner_id, status], (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Database query error');
//         } else {
//             res.status(200).send('Partnership added successfully');
//         }
//     });
// });


// Test route to query the database
// app.get('/', async (req, res) => {
//     connection.execute('SELECT * FROM accounts', (err, results) => {
//         if (err) {
//             console.error('Database query error: ', err);
//         } else {
//             console.log(results);
//         }
//     });
// });
app.get('/', async (req, res) => {
    try {
      db.execute('SELECT * FROM accounts', (err, results) => {
        if (err) {
          console.error('Database query error: ', err);
          // Send an error response to the client
          res.status(500).json({ error: 'Database query error' });
        } else {
          console.log(results);
          // Send the results as a response to the client
          res.status(200).json(results);
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
