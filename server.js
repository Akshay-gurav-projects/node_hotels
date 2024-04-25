// var fs = require('fs')
// var os = require('os')
// console.log(fs)
// console.log(os)

// const user = os.userInfo()
// console.log(user)

// fs.appendFile("greeting.txt","hi"+user.username,()=>{
// 	console.log("flie is created")
// })

// ******************************************************************

// const notes = require("./note.js")

// ******************************************************************

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello welcome to my hotel')
// })

// app.get('/chicken',(req,res)=>{
// 	res.send("Sure i will serve you butter chiken..")
// })

// app.get('/idli',(req,res)=>{
// 	var custumized_idli = {
// 		chutney : true,
// 		sambar : false,
// 		idli : 2,
// 		vada : ["dal vada","medu vada"]
// 	}
// 	res.send(custumized_idli)
// })

// app.listen(3000,()=>{
// 	console.log("server is running!!!!")
// }) 


// ******************************************************************

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

app.listen(3000,()=>{
	console.log("server is running!!!!")
}) 