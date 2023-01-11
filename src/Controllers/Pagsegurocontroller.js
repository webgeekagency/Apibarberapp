import axios from "axios";

class Pagsegurocontroller {
    async post(req, res) {
        // const { reference_id, description, amount: { value, currency }, payment_method: { type, installments, capture, soft_descriptor, card: { number, exp_month, exp_year, security_code, holder_name: { name } } } } = req.body

        await axios.post('https://sandbox.api.pagseguro.com/charges', {
            headers: {
                Authorization: '351AEF02FA7E4DBEA919A42DC8016637',
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*'
            },
            "reference_id": "ex-00001",
            "description": "Motivo do pagamento",
            "amount": {
                "value": 1000,
                "currency": "BRL"
            },
            "payment_method": {
                "type": "CREDIT_CARD",
                "installments": 1,
                "capture": false,
                "soft_descriptor": "My Store",
                "card": {
                    "number": "4111111111111111",
                    "exp_month": "03",
                    "exp_year": "2026",
                    "security_code": "123",
                    "holder": {
                        "name": "Jose da Silva"
                    }
                }
            }
        })
            .then((value) => {
                return res.json(value)
            })
    }
}
export default new Pagsegurocontroller();