const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/party-home',{ useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, '链接数据库失败'));
db.once('open', function() {
    console.log('链接数据库成功')
  // we're connected!
});

module.exports = db