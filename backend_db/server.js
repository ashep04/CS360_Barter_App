const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const app = express();

require('dotenv').config(); // Load environment variables
app.use(express.json()); // Parse JSON requests
app.use(cors());


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the XAMPP database:', err);
    return;
  }
  console.log('Connected to the XAMPP database!');
});

//------------------------------------------------------------------------
// POST
//
app.post('/addUser', (req, res) => {
    const { id, username, password, role } = req.body;

    const query = 'INSERT INTO accounts (id, username, password, role) VALUES (?, ?, ?, ?)';
    db.execute(query, [id, username, password, role], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database query error');
        } else {
            res.status(200).send('User added successfully');
        }
    });
});

app.post('/deleteUser', (req, res) => {
  const { id } = req.body;

  // Step 1: Delete the related partnerships first
  const deletePartnershipsQuery = 'DELETE FROM partnerships WHERE partner_id = ?';
  
  db.execute(deletePartnershipsQuery, [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to delete related partnerships');
    }

    // Step 2: After successful deletion of related partnerships, delete the user
    const deleteUserQuery = 'DELETE FROM accounts WHERE id = ?';
    
    db.execute(deleteUserQuery, [id], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Failed to delete user');
      }
      
      // Send success response after user deletion
      res.status(200).send('User deleted successfully');
    });
  });
});

// In your server.js file
app.post('/addExchange', (req, res) => {
  const { 
    seller_id, buyer_id, seller_partner_id, buyer_partner_id, 
    commodity_id, offer_commodity_id, commodity_value, hash_code, status 
  } = req.body;

  const query = `
    INSERT INTO exchanges 
    (seller_id, buyer_id, seller_partner_id, buyer_partner_id, commodity_id, 
    offer_commodity_id, commodity_value, hash_code, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.execute(query, [seller_id, buyer_id, seller_partner_id, buyer_partner_id, commodity_id, 
    offer_commodity_id, commodity_value, hash_code, status], (err, results) => {
    if (err) {
      console.error('Database query error: ', err);
      return res.status(500).send('Database query error');
    }
    res.status(200).send('Exchange added successfully');
  });
});


app.post('/addTransaction', (req, res) => {
  const { exchange_id, hash_code } = req.body;

  // First, check if the exchange_id exists
  db.execute('SELECT * FROM exchanges WHERE exchange_id = ?', [exchange_id], (err, results) => {
    if (err) {
      console.error('Database query error: ', err);
      return res.status(500).send('Database query error');
    }

    if (results.length === 0) {
      return res.status(400).send('Invalid exchange ID');
    }

    // Proceed to insert the transaction if exchange_id exists
    const query = 'INSERT INTO transactions (exchange_id, hash_code) VALUES (?, ?)';
    db.execute(query, [exchange_id, hash_code], (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).send('Database query error');
      } else {
        res.status(200).send('Transaction added successfully');
      }
    });
  });
});



app.post('/addPartnership', (req, res) => {
    const { id, partner_id, status } = req.body;

    const query = 'INSERT INTO partnerships (id, partner_id, status) VALUES (?, ?, ?)';
    db.execute(query, [id, partner_id, status], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database query error');
        } else {
            res.status(200).send('Partnership added successfully');
        }
    });
});

app.post('/deletePartnership', (req, res) => {
  const { id, partner_id } = req.body;

  // SQL query to delete the partnership where the user ID and partner ID match
  const query = 'DELETE FROM partnerships WHERE id = ? AND partner_id = ?';
  db.execute(query, [id, partner_id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database query error');
    }

    if (results.affectedRows > 0) {
      res.status(200).send('Partnership deleted successfully');
    } else {
      res.status(404).send('Partnership deleted');
    }
  });
});

//
// END POST
//------------------------------------------------------------------------

//------------------------------------------------------------------------
// GET
//
app.get('/getAccounts', async (req, res) => {
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

  app.get('/getAccounts', async (req, res) => {
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

  app.get('/accessPartnerships', (req, res) => {
    const { id, partner_id } = req.query;
  
    const query = 'SELECT * FROM partnerships WHERE id = ? AND partner_id = ?';
    db.execute(query, [id, partner_id], (err, results) => {
      if (err) {
        console.error('Database query error: ', err);
        res.status(500).json({ error: 'Database query error' });
      } else {
        if (results.length > 0) {
          res.status(200).json({ status: results[0].status });
        } else {
          res.status(404).json({ error: 'Partnership not found' });
        }
      }
    });
  });
  

  app.get('/getPartnerships', async (req, res) => {
    try {
      db.execute('SELECT * FROM partnerships', (err, results) => {
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

  app.get('/getCommodity', async (req, res) => {
    try {
      db.execute('SELECT * FROM commodities', (err, results) => {
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

  app.get('/getTransactions', async (req, res) => {
    try {
      db.execute('SELECT * FROM transactions', (err, results) => {
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

  app.get('/getExchanges', async (req, res) => {
    try {
      db.execute('SELECT * FROM exchanges', (err, results) => {
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
//
// END GET
//------------------------------------------------------------------------

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
