import mongoose from "mongoose";

const dbConnection = async() =>{
    try {
            let conn = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
            console.log(`Database connected successfully ${mongoose.connection.host}`.bgMagenta.white)
        
    } catch (error) {
        console.log(`Error in DB Connection`.bgRed.white)
    }
}

export default dbConnection


