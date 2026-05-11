const kafka = require("./client")
async function init(){
    //producer create

    const producer = kafka.producer();
    console.log("connecting producer ....");
    await producer.connect();
    console.log("producer connected")

    //message send

    await producer.send({
        topic:"rider-updates",
        messages:[
            {
                partition:0,
                key:"location update",
                value:JSON.stringify({
                    name:"nikhil",
                    location:"east",
                }),
            },
        ],
      

       
        

    });
      console.log("message send succesfully")
     //disconnect
        await producer.disconnect();
        console.log("disconnect")
    

}
init();