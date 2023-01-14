const stripe = require('stripe');
const express = require('express');
const app = express();


class Webhookcontroller {
    async post(req, res) {
        const sig = request.headers['stripe-signature'];
        const endpointSecret = "whsec_252b95382ed4b39400e0f1a2dcd051c1c0c9b69fd9a830863ac26b9214efc132";

        let event;

        try {
            event = await stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        } catch (err) {
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        return res.json(event)
    }
}
export default new Webhookcontroller();

