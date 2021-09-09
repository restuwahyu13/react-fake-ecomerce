import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function CartSummaryCardView(props) {
	const { classes, transaction_fees, stripe_cart_total, item_purchase_count, cart_total } = props

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='body2' component='p'>
					Total Items = {item_purchase_count}
				</Typography>
				<Typography variant='body2' component='p'>
					Fees = {transaction_fees}
				</Typography>
				<Typography variant='body2' component='p'>
					Subtotal = {cart_total}
				</Typography>
				<Typography variant='h5' component='h2'>
					Cart Total = {stripe_cart_total}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CartSummaryCardView
