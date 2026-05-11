const kafka = require("./client")

async function init(){
    const consumer = kafka.consumer({
        groupId:"user-group",

    });
    console.log("connecting consumer ...")
    await consumer.connect();
    console.log("consumer connected")

    //topic sunscribe
    await consumer.subscribe({
        topic:"rider-updates",
        fromBeginning:false,
    });
    console.log("subscribe to topic")
     
    //message receive
    await consumer.run({
        eachMessage: async({topic,partition,message})=>{
            console.log("topic:",topic);
            console.log("partition:",partition);
            console.log("message:",message.value.toString());//Kafka data buffer me bhejta hai.
        }
    })
}
init()