
//import json server library
const jsonServer = require('json-server')

//2) create the server
const mediaPlayerServer =jsonServer.create()

// middlewear to parse the json formate
const middlewear = jsonServer.defaults ()

// setup path too store data
const router =jsonServer.router('db.json')

mediaPlayerServer.use(middlewear)
mediaPlayerServer.use(router)

//3)port for server
const PORT = 4000 || process.env.PORT

//4) //To LISTEN TO THE REQUEST FROM THE FRONEND FOR RESOLING THAT REQUEST
mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running sucessfully at port number ${PORT}`);
    
})