import { Elements } from '@stripe/react-stripe-js'

import StripeCardCheckout from '../../components/StripeCardCheckout'
import CartSummaryCard from '../../components/CartSummaryCard'

function PaymentView(props) {
	const { item_purchase_count, transaction_fees, cart_total, stripe_cart_total, stripePromise, captureStripeTokenResponse } =
		props

	return (
		<div className='App'>
			<h2>JM React Stripe Project</h2>
			<div>
				<p>
					The purpose of this project is to test out stripe payments via stripe's
					<strong>"Payment Intents"</strong> api:
					<a href='https://stripe.com/docs/payments/payment-intents' target='_blank' rel='noreferrer'>
						https://stripe.com/docs/payments/payment-intents
					</a>
				</p>
				<hr />
			</div>

			<CartSummaryCard
				item_purchase_count={item_purchase_count}
				transaction_fees={transaction_fees}
				cart_total={cart_total}
				stripe_cart_total={stripe_cart_total}
			/>
			<div>
				<i>Note: Use a sample test card number like so...</i>
				<ul>
					<li>Test card number: 4242 4242 4242 4242</li>
					<li>Month: 12</li>
					<li>Year: 27</li>
					<li>CVC: 839</li>
					<li>Zip Code: 90210</li>
				</ul>
			</div>

			<div>
				<Elements stripe={stripePromise}>
					<StripeCardCheckout captureStripeTokenResponse={captureStripeTokenResponse} />
				</Elements>
			</div>
		</div>
	)
}

export default PaymentView
