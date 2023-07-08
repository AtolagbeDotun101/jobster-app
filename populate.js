const dotenv = require('dotenv')
dotenv.config();

const Job = require('./models/Job')
const mockData = require('./mock-data.json');
const connectDB = require('./db/connect')


const start = async ()=>{
    try {
      await connectDB(process.env.MONGO_URI)
        await Job.create(mockData)
        console.log('success')
    } catch (error) {
         console.log(error);
    process.exit(1);
  }
    
}

start()