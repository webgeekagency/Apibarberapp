import Stripe from "stripe";


class stripecontroller {
    async post(req, res) {

        const stripe = new Stripe(
            'price_1MPutVLfnJvk1J3hBqB1yQpJ',
            {
                apiVersion: "2022-11-15",
                appInfo: {
                    name: "BarberApp",
                    version: "1"
                }
            }
        )

        const user = JSON.parse(localStorage.getItem('sessaobarber'))

        const stripeuser = await stripe.customers.create({
            email: user.email
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