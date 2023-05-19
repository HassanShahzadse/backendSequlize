const express= require('express');

require('dotenv').config()
const app = express();
app.use(express.json())

require('./config/dbconnection')
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);


const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);





const port = process.env.SERVER_PORT;


app.get("/",(res,resp)=>{
    resp.send("Home page");
});
console.log("server running on port ",port)

app.listen(port)