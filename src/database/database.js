import mongoose from "mongoose"

mongoose.set('strictQuery', false);
//mongoose.set('useFindAndModify', true); 

mongoose.connect("mongodb://localhost/companydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.log(error))

// import Sybase from "./dist/sybase";
// import config from "./../config";


// //db = new Sybase('host', port, 'dbName', 'username', 'pw');

// const connection = new Sybase(
//     [{
//     name: 'main',        
//     host: config.host,
//     port: config.port,
//     dbname: config.database,
//     username: config.user,
//     password: config.password
//     }]

// );

// const getConnection = () => {
//     return connection;
// };

// module.exports = {
//     getConnection
// };