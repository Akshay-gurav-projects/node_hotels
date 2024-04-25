const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Hello welcome to my hotel')
})


const personRouts = require('./routs/personRoutes')
app.use('/person',personRouts);

const menuItemRoutes = require('./routs/menuItemRoutes')
app.use('/menuItems',menuItemRoutes);

// this is server port Number
app.listen(3000,()=>{
	console.log("server is running!!!!")
}) 