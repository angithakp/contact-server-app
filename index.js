// import json server


const jsonServer=require('json-server')

// create a json server application

const server=jsonServer.create()

// set up routes for db.json

const router=jsonServer.router('db.json')

// return a middle ware used by json-server

const middleware=jsonServer.defaults()

// set up a port number for server application

const port=process.env.port||3000

// use middle ware and router in server app

server.use(middleware)
server.use(router)

// to listen the server app in port

server.listen(port,()=>{
    console.log('contact server app started at port',port);
})