const mongoose = require('mongoose');
const connectionUrl = 'mongodb+srv://azeemyoonus:Azeem%4012@cluster0.iee5t.mongodb.net/PostDB?retryWrites=true&w=majority';

module.exports.dbConnect = (done) => {
    mongoose.connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {        
        done()
    });

}
