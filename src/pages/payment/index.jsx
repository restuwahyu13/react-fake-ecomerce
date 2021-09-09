import { createElement } from 'react'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import PaymentView from './__view'

function Payment(props) {
	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_TEST)

	// NOTE: ----------------------------------------------------------------------------------------
	// Setting these items manually but this should be pulled from a database or client side storage.
	const billers_name = 'Billy Withers'
	const customer_id = 'cus_KC3HiVoXavSBmP'
	// ----------------------------------------------------------------------------------------------

	const handleSubmit = async () => {
		try {
			const res = await axios.post('/api_v1/handle-entire-payment', {
				currency: 'usd',
				stripe_cart_total: parseInt(props.subTotal).toFixed(2),
				stripe_token_card_id: 1,
				cardElement: 1,
				customer_id,
				billers_name
			})

			if (res.data) alert('Create Payment Methodd Success')
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	return createElement(PaymentView, {
		stripePromise,
		subTotal: parseInt(props.subTotal),
		handleSubmit
	})
}

export default Payment
