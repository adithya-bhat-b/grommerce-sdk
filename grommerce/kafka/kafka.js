const kafkaConfig = require("../config/kafka.json");
var kafka = require('kafka-node');
class KafkaHelper{
    constructor(){
        this.kafkaHost = kafkaConfig.kafkaHost
        this.createProducer()
    }
    createProducer(){
        const Producer = kafka.Producer,
        client = new kafka.KafkaClient({kafkaHost: this.kafkaHost}),
        this.producer = new Producer(client);
    }
    /*payloads = [
        { topic: 'topic1', messages: 'hi', partition: 0 },
        { topic: 'topic2', messages: ['hello', 'world', km] }
    ];*/
    sendMessage(payloads){
        this.producer.on('ready', function () {
            this.producer.send(payloads, function (err, data) {
                if(err) console.log(err);
                else console.log(data);
            });
        });
    }
    /*
        topicsToCreate = [{
        topic: 'topic1',
        partitions: 1,
        replicationFactor: 2
        },
        {
        topic: 'topic2',
        partitions: 5,
        replicationFactor: 3,
        }]
    */ 
    createTopics(topicsToCreate){
        this.client.createTopics(topicsToCreate, (error, result) => {
            // result is an array of any errors if a given topic could not be created
            if(err) console.log(err);
            else console.log(data);
          });
    }

}