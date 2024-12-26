import express from 'express';
import mongoose from 'mongoose';
import { User } from './user.model.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
const port = 8000;

(async function () {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(connection.connection.host);
})();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//CRUD-->CREATE READ UPDATE DELETE
//get all users
//Read
app.get('/', async (req, res) => {
    const user = await User.find();
    res.status(200).json({
        user,
    });
});
//create a new user
//Create
app.post('/', async (req, res) => {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(201).json({ user });
});
//update user
app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    //let us find if the id exists
    const user = await User.findById(id);
    if (user) {
        const updatedUser = await User.updateOne({ _id: id }, data);
        return res.status(200).json({ updatedUser });
    }
    return res.status(404).json({ messgae: 'User doesnot exist' });
});
//patch --> updates specific fields
//put --> updates all fields
//delete user
app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
        const deletedUser = await User.deleteOne({
            _id: id,
        });
        return res.status(200).json({ deletedUser });
    }
    return res.status(404).json({
        message: 'User doesnot exist',
    });
});
