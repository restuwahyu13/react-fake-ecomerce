import { Fragment } from 'react'
import { CardElement } from '@stripe/react-stripe-js'

function StripeCardCheckoutView(props) {
	return (
		<Fragment>
			<div className='container-fluid'>
				<div className='card'>
					<div className='card-body p-3'>
						<form
							style={{
								maxWidth: '500px',
								width: '100%',
								margin: '0 auto'
							}}
							onSubmit={props.handleSubmit}
							autoComplete='off'>
							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<input type='email' name='email' className='form-control' onChange={props.handleChange} required />
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
								<button className='btn col-12' type='submit' style={{ backgroundColor: '#6772E5' }} disabled={props.disabled}>
									{props.disabled !== true && `Pay $${props.subTotal}`}
									{props.disabled !== false && (
										<div class='spinner-border text-light' style={{ fontSize: 14, textAlign: 'center', padding: 5 }} />
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default StripeCardCheckoutView
