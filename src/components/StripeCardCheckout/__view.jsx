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
								<label htmlFor='fullname'> Fullname</label>
								<input type='text' name='fullname' className='form-control' />
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
								<button className='btn col-12' type='submit' disabled={!props.stripe} style={{ backgroundColor: '#6772E5' }}>
									Pay ${props.subTotal}
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
