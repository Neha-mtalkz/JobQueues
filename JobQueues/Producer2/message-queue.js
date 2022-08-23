const Queue = require('bull');
const redis = require('./redis');

//our job queue
const messageQueue = new Queue('orders', {
    redis: redis
});

const createNewOrder = (order) => {
    messageQueue.add(order, {})
};

module.exports = { createNewOrder }