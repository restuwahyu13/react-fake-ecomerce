import { createElement } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import StripeCardCheckoutView from './__view'

function StripeCardCheckout(props) {
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault()

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement)

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement
		})

		if (error) {
			alert(error.message)
		} else {
			props.captureStripeTokenResponse(paymentMethod)
		}
	}

	const styles = {
		formStyle: {
			maxWidth: '500px',
			width: '100%',
			margin: '0 auto'
		}
	}

	return createElement(StripeCardCheckoutView, {
		styles,
		handleSubmit,
		stripe
	})
}

export default StripeCardCheckout
