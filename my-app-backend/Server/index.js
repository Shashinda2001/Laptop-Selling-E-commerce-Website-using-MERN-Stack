const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const cors = require("cors");


//i mport kara gatta
const userRouter = require("./routes/user");
 
 



const app = express();

///////////localhost use karanna 
// const corsOptions={
//     origin:'http://localhost:3000'
// };
///////////localhost use karanna 


app.use(cors());
//////////////localhost nm
// app.use(cors(corsOptions));

app.use(bodyParser.json());

//import kara gatta ewa pawichchi kara
app.use(userRouter);
 

 
const port = 4000;


app.listen(port, () => {
    console.log("App running. Server is running on PORT " + port);
});
