const mongoose=require('mongoose');
const dbconnect=async()=>{
    try{
await mongoose.connect(process.env.connecting_database);
console.log('database is connected')
    }
 catch(error){
console.log('database is not connected')
    }
}
module.exports=dbconnect;