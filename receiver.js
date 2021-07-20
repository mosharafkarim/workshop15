const amqplib=require("amqplib/callback_api")

amqplib.connect('amqp://localhost',(err,connection)=>{
    if(err){
        throw err
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err
        }
        let Name="Mosharaf"
        channel.assertQueue(Name,{
            durable:false
        })
        channel.consume(Name,(message)=>{
            console.log(`Received: ${message.content.toString()}`)
            channel.ack(message)
        })
    })
})