const mongoose = require('mongoose');

//ERROR: DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

////SOLUTION LINK: https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) =>{
    if(!err)
    { 
        console.log('MongoDB is connected');
    }
    else{
        console.log('Error in MongoDB connection');
        }
});

require('./user.model');