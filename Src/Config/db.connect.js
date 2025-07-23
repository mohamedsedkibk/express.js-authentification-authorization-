const mongoose=require('mongoose');
const dbconnect=async()=>{
    try{
await mongoose.connect('mongodb://localhost:27017/Role-based');
console.log('database is connected')
    }
 catch(error){
console.log('database is not connected')
    }
}
module.exports=dbconnect;