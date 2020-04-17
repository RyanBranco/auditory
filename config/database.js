const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("connected", function() {
    console.log(`Connected to MongoDB ${db.name} ${db.host} ${db.port}`)
})