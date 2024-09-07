const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/user')

const app = express()
app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

mongoose.connect("mongodb+srv://admin:12345@cluster0.rk1vf.mongodb.net/WebApp")

app.post('/Register', upload.single('file'), async (req, res) => {
    try {
        const { firstname, lastname, middlename, email, contact } = req.body;
        const file = req.file ? req.file.filename : null;

        const newUser = await UserModel.create({
            firstname,
            lastname,
            middlename,
            email,
            contact,
            file
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({ error: error.message });
    }
});

app.listen(3001,() => {
    console.log("server is running")
})
