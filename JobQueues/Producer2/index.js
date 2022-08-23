const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createNewOrder } = require('./message-queue');

app.use(bodyParser());

app.post("/sendmsg", async (request, response) => {
    await createNewOrder(request.body);
    let resposeBody = {
        status: "OK",
        data: {
            msg: "message processed succsessfully!",
            order: request.body,
        }
    }
    response.send(resposeBody)
})

app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server start running on 4000!");
    }
})

