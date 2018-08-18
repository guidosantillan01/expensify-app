const path = require('path')
const express = require('express')
const app = express() // Create an express application
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000 // port variable 

// Tell it to use the public directory to serve all our static assets
app.use(express.static(publicPath))

// Solve routes problem when updating
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')) 
}) // * -> Match all unmatched router

// Start the server on port 3000
app.listen(port, () => {
  console.log('Server is up!')
}) //port