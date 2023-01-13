import Stripe from "stripe";


class stripecontroller {
    async post(req, res) {

        const stripe = new Stripe(
            'pk_live_51MPuU9LfnJvk1J3hjL2y9Ro36yG9LceEEvzl7AzgRk9ZOLBATPagtPhXqzNyj9aEL9335b34jiSXm8z4rR9cVyCT00k0226FeU',
            {
                apiVersion: "2022-11-15",
                appInfo: {
                    name: "BarberApp",
                    version: "1"
                }
            }
        )

       

        const stripeuser = await stripe.customers.create({
            email: ''
        })


        const stripechekout = await stripe.checkout.sessions.create({
            customer: stripeuser.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1MPutVLfnJvk1J3hBqB1yQpJ', quantity: 1 }
            ],
            mode: "subscription",
            allow_promotion_codes: true,
            success_url: "http://localhost:3000/dashboard",
            cancel_url: "http://localhost:3000/dashboard"
        })
        return res.json(stripechekout.id)
    }


}

export default new stripecontroller();
