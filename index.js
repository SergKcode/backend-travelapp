const express =require ("express");
const connection =require("./config")
const app= express();
const cors= require("cors");
const port = 5000 ; 

// global middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Allow cors policies
app.use(cors())

connection.connect((err)=>{
    if(err){
        console.error(`Error reaching the DB: ${err.stack}`)
        return;
    }
    console.log("Connection succesful")
})

app.get("/", (req,res)=>{
    res.send ("hey, how are you!")
});

app.get("/countries", (req,res)=>{
    connection.query("SELECT * FROM country", (err,results) =>{
        if(err){
            res.status(500).send("Server error, could not fetch countries")
        }else{
            res.json (results)
        }
    })
});
 


app.listen(port,(err)=>{
    if(err) throw new Error("Something failed")
    console.log(`Server is running on port ${port}`)
});