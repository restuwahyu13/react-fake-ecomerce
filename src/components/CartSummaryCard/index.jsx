import { createElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CartSummaryCardView from './__view'

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
})

function CartSummaryCard(props) {
	const { item_purchase_count, transaction_fees, cart_total, stripe_cart_total } = props
	const classes = useStyles()

	return createElement(CartSummaryCardView, { item_purchase_count, transaction_fees, cart_total, stripe_cart_total, classes })
}

export default CartSummaryCard
