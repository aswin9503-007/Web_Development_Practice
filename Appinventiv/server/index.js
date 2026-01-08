require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 



app.post('/api/contact', (req, res) => {

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }
  console.log("--- New Contact Request ---");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject || "No Subject"}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ 
    success: true, 
    message: `Thank you, ${name}! Your message has been sent to our team.` 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});