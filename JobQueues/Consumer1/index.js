const Queue = require('bull');
const { ordersProcess } = require('./orders-queue-consumer');
const redis = require('./redis-connection/connection');
console.log('consumer1 is start.......');
//our job queue
const orderQueue = new Queue('orders', {
    redis: redis
});

orderQueue.process(ordersProcess);