import { Fragment } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import StripeCardCheckout from '../../components/StripeCardCheckout'

function PaymentView(props) {
	return (
		<Fragment>
			<Elements stripe={props.stripePromise}>
				<StripeCardCheckout handleSubmit={props.handleSubmit} subTotal={props.subTotal} />
			</Elements>
		</Fragment>
	)
}

export default PaymentView
