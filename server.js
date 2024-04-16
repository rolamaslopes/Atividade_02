const express = require('express')

const app = express()

app.get("/", function(req,resp){
    resp.send("Bem vindo ao site!!!!")
})

app.get("/Front_End", function(req,resp){
    resp.sendFile(__dirname + "/html/index.html")
})

app.get("/Banco_de_dados", function(req,resp){
    resp.sendFile(__dirname + "/bdd/index.html")
})

app.listen(8081, function(){
    console.log("Servidor utilizando express")
})

