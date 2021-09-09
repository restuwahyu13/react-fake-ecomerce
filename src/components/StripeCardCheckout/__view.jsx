import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'

function StripeCardCheckoutView(props) {
	const { handleSubmit, styles, stripe } = props

	return (
		<>
			<div className='container-fluid'>
				<div class='card'>
					<div className='card-body p-3'>
						<form style={styles.formStyle} onSubmit={handleSubmit} autoComplete='off'>
							<div className='form-group'>
								<label htmlFor='fullname'> Fullname</label>
								<input type='text' className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor='fullname'> Email</label>
								<input type='text' className='form-control' />
							</div>
							<div className='form-group'>
								<label htmlFor='fullname'> Credit Card</label>
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
							</div>
							<div className='form-group'>
								<button className='btn col-12' type='submit' disabled={!stripe} style={{ backgroundColor: '#6772E5' }}>
									Checkout
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default StripeCardCheckoutView
