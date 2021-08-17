const mongoose = require('mongoose');
const connectionUrl = 'mongodb://localhost:27017/postsDB';

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
