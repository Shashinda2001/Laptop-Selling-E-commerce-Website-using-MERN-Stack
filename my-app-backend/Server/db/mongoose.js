const mongoose = require("mongoose");

// Replace <password> with your actual MongoDB password
const mongodbURL = "mongodb+srv://adithyashashinda:SEdesilva-20049@cluster0.gprxxn0.mongodb.net/laptopStore?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
mongoose.set('strictQuery',true);


connection.once("open", () => {
    console.log("mongodb connected!");
});

