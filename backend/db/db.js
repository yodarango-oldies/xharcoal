const mongoose = require('mongoose');

module.exports = connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        console.log(`successfully connected to ${conn.connection.host}`)
    } catch (error) {
        
    }
}
connectDB();