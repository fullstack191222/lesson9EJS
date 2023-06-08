const express = require('express')
const app = express()

//add layouts
const expressLayouts = require("express-ejs-layouts")
app.use(expressLayouts)


// View Engine Setup
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//EJS example
app.get("/ejs", (req, res)=> {
    res.render("first", {myName:"Arya"})
})

//EJS second file
app.get("/ejs2", (req, res)=> {
    res.render("second")
})



// app.get("/first", (req, res)=> {
//     res.send("hello world2")
// })

// //redirect to first page.
// app.get("/", (req, res)=> {
//     res.redirect("/first")
// })

// //redirect to google page.
// app.get("/google", (req, res)=> {
//     console.log("redirecting to google.com")
//     res.redirect("https://www.google.com/")
// })



//to use public folder for the files
app.use(express.static('public'))


// //to download car2
// app.get("/dlcar2", (req, res)=> {
//     res.download(__dirname + "/public/images/car2.jpg")
//     // res.send("download has been started!")
// })


// app.get("/website", (req, res)=> {
//     res.sendFile(__dirname + "/index.html")
// })

// app.get("/car", (req, res)=> {
//     res.sendFile(__dirname + "/car1.jpg")
// })




const port = 3000
app.listen(port, ()=> {
    console.log("server listening on port: " + port);
})