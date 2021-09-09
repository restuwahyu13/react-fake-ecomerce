import React from 'react'
import Button from '@material-ui/core/Button'
import { CardElement } from '@stripe/react-stripe-js'

function StripeCardCheckoutView(props) {
	const { handleSubmit, styles, stripe } = props

	return (
		<>
			<form style={styles.formStyle} onSubmit={handleSubmit} autoComplete='off'>
				<CardElement
					options={{
						style: {
							base: {
								'fontSize': '16px',
								'color': '#424770',
								'::placeholder': {
									color: '#aab7c4'
								}
							},
							invalid: {
								color: '#9e2146'
							}
						}
					}}
				/>
				<Button variant='contained' color='primary' type='submit' disabled={!stripe}>
					CHECKOUT
				</Button>
			</form>
		</>
	)
}

export default StripeCardCheckoutView
