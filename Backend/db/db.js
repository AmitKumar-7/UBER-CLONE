const mongoose = require('mongoose');


function connectToDb() {
  mongoose.connect(process.env.MONGODB_URI
  ).then(() => {
     console.log('connect to DB');                                             // Moved console.log into .then()
   }) .catch(err => console.log(err));                                                      // Changed .catcher to .catch
}


module.exports = connectToDb;
