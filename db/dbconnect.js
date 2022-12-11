import mongoose from 'mongoose';

const connection = {}

async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGOOS,{
        useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true
    })

    connection.isConnected = db.connections[0].readyState
}

export default dbConnect;