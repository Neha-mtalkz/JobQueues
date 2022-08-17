const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createNewOrder } = require('./queues/order-queue');

app.use(bodyParser());

app.get('/', (ctx, res) => {
    ctx.body = {
        status: "OK",
        data: "Server is working",
    };
    res.send(200)
});

app.post("/order", async (request, response) => {
    await createNewOrder(request.body);
    request.body = {
        status: "OK",
        data: {
            msg: "Order processed succsessfully!",
            order: request.body,
        }
    }
    response.send(request.body)
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running !");
    }
})

