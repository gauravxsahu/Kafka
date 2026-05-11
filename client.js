const {Kafka} = require("kafkajs");

const kafka = new Kafka({
    clientId:"my-app",
    brokers:["192.168.0.184:9092"] //kafka server ka address
});

module.exports= kafka;