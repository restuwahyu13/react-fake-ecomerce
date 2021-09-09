import { createElement } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import StripeCardCheckoutView from './__view'

function StripeCardCheckout(props) {
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return
		}

		const payload = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement)
		})

		if (!payload.error) props.handleSubmit()
		else alert(payload.error.message)
	}

	return createElement(StripeCardCheckoutView, {
		stripe,
		subTotal: props.subTotal.toFixed(2),
		handleSubmit
	})
}

export default StripeCardCheckout
