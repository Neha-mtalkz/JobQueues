const Queue = require('bull');
const redis = require('./redisConnection');

//our job queue
const orderQueue = new Queue('orders', {
    redis: redis
});

const createNewOrder = (order) => {
    orderQueue.add(order, {})
};

module.exports = { createNewOrder }