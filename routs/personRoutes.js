const express = require('express')
const router = express.Router()
const Person = require("../modules/person");

router.post('/',async(req,res)=>{
	try{
		const data = req.body
		const newPerson = new Person(data);

		const response = await newPerson.save();
		console.log("data save")
		res.status(200).json(response);
	}
	catch(err){
		console.log(err);
		res.status(500).json('Internate server error')
	}
})

router.get('/',async (req,res)=>{
	try{
		const data = await Person.find()
		console.log('data fetched')
		res.status(200).json(data);
	}
	catch(err){
		console.log(err);
		res.status(500).json('Internate server error')
	}
})

router.get('/:workType',async (req,res)=>{
	try{
		const workType = req.params.workType
		if(workType == 'chef' || workType == 'waiter' || workType == 'manager' || workType == 'Nothing'){
			const response = await Person.find({work : workType});
			console.log('response fetched')
			res.status(200).json(response);
		}else{
			res.status(404).json('Invalid work type')
		}
	}catch(err){
		console.log(err);
		res.status(500).json('Internate server error')
	}
})

router.put('/:id',async (req,res)=>{
	try{
		const personId = req.params.id
		const updatedPersonData = req.body

		const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
			new:true,
			runValidators:true
		})

		if(!response){
			return res.status(404).json('person not found')
		}
		console.log('data updated')
		res.status(200).json(response);
	}catch(err){
		console.log(err);
		res.status(500).json('Internate server error')
	}
})

router.delete('/:id',async (req,res)=>{
	try{
		const personId = req.params.id

		const response = await Person.findByIdAndDelete(personId)
		console.log('data deleted')
		res.status(200).json(response);

	}catch(err){
		console.log(err);
		res.status(500).json('Internate server error')
	}
})

module.exports=router;