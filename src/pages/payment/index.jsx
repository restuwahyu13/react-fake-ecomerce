import { createElement, useState, useEffect } from 'react'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import PaymentView from './__view'

function Payment(props) {
	const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_TEST)
	const [value, setValue] = useState(undefined)

	const fetchCustomerData = async () => {
		try {
			const res = await axios.get(`/api_v1/customer/${value.email}`)
			if (res.data) {
				return res.data.customer
			}
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	const handleChange = (e) => setValue({ ...value, [e.target.name]: e.target.value })

	const handleSubmit = async (stripeTokenId) => {
		try {
			const customerData = await fetchCustomerData()

			if (customerData) {
				const res = await axios.post('/api_v1/handle-entire-payment', {
					currency: 'usd',
					stripe_cart_total: parseInt(props.subTotal).toFixed(2),
					stripe_token_card_id: stripeTokenId,
					customer_id: customerData.id,
					billers_name: customerData.name,
					cardElement: 1
				})

				if (res.data) alert('Payment Success')
			}
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	return createElement(PaymentView, {
		stripePromise,
		subTotal: parseInt(props.subTotal),
		handleChange,
		handleSubmit
	})
}

export default Payment
