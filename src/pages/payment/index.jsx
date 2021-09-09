import { createElement } from 'react'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import PaymentView from './__view'

function Payment() {
	const item_purchase_count = 2
	const transaction_fees = 300
	const cart_total = 2600
	const stripe_cart_total = cart_total + transaction_fees
	// NOTE: ----------------------------------------------------------------------------------------
	// Setting these items manually but this should be pulled from a database or client side storage.
	const billers_name = 'Billy Withers'
	const customer_id = 'cus_KC3HiVoXavSBmP'
	// ----------------------------------------------------------------------------------------------

	// load stripe API key in here
	const test_stripe_key = 'stripe_pk_test_value_here'
	const stripePromise = loadStripe(test_stripe_key)

	const submitPaymentRequest = async (cardElement) => {
		try {
			const { stripe_token_card_id } = cardElement

			const res = await axios.post('/api_v1/handle-entire-payment', {
				currency: 'usd',
				stripe_cart_total,
				stripe_token_card_id,
				cardElement,
				customer_id,
				billers_name
			})

			console.log('---------------- START data_response')
			console.log(res)
			console.log('data_response END ------------------')
			const { success, message } = res.data

			if (!success) alert(message)
			else alert('All set!')
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	const captureStripeTokenResponse = (cardElement) => {
		if (cardElement && cardElement.id) {
			submitPaymentRequest(cardElement).then((response) => response)
		} else {
			alert('Something went wrong while processing your card.  Please try again.')
		}
	}

	return createElement(PaymentView, {
		item_purchase_count,
		transaction_fees,
		cart_total,
		stripe_cart_total,
		stripePromise,
		captureStripeTokenResponse
	})
}

export default Payment
