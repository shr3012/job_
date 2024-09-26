const mongoose = require('mongoose')

const databaseConnection = () => {
    mongoose.connect(process.env.DB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data)=>{
        console.log(`database connected successfully at server ${data.connection.host}`)
    })
    .catch((err) => {
        console.error(`Failed to connect to the database. Error: ${err.message}`);
        process.exit(1); // Exit the process with failure
    });
}

module.exports = databaseConnection
