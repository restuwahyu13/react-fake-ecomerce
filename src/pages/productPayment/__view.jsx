import { Fragment } from 'react'
import Header from '../../components/Header'
import Payment from '../payment'

function PaymentProductView(props) {
	return (
		<Fragment>
			<Header />
			<div className='container-fluid mt-5'>
				<div className='row d-flex flex-row justify-content-start align-items-start'>
					<div className='col-8'>
						<table className='table table-striped table-bordered table-responsive text-center rounded'>
							<thead className='text-light font-weight-bold' style={{ backgroundColor: '#6772E5' }}>
								<tr>
									<th>No</th>
									<th className='text-left'>Name</th>
									<th>Quantity</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{props.productsItems &&
									props.productsItems.length > 0 &&
									props.productsItems.map((val, index) => (
										<tr key={index} style={{ fontSize: 15, fontWeight: 600, padding: 3 }}>
											<td>{index + 1}</td>
											<td>{val.title}</td>
											<td>{props.productCounts[index]['data'].length}</td>
											<td>${val.price.toFixed(2)}</td>
										</tr>
									))}
								<tr>
									<td colSpan={3} style={{ fontWeight: 600, fontSize: 16, textAlign: 'center' }}>
										Subtotal
									</td>
									<td style={{ fontWeight: 600, fontSize: 16, textAlign: 'center' }}>${props.subTotal.toFixed(2)}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='col-4'>
						<Payment subTotal={props.subTotal.toFixed(0)} />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default PaymentProductView
