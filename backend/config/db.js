import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://adityarajpaul06:trackly25@cluster0.ydl0c7m.mongodb.net/Trackly?retryWrites=true&w=majority&tls=true')
        .then (() => console.log('DB CONNECTED'));

}