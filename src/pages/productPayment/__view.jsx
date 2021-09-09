import { Fragment } from 'react'
import Header from '../../components/Header'
import Payment from '../payment'

function PaymentProductView() {
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
									<th>Name</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>x</td>
									<td>2</td>
									<td>$ 2</td>
									<td>$ 20</td>
								</tr>
								<tr>
									<td colspan={4} style={{ fontWeight: 600, fontSize: 18, textAlign: 'center' }}>
										Subtotal
									</td>
									<td style={{ fontWeight: 600, fontSize: 18, textAlign: 'center' }}>$ 20</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='col-4'>
						<Payment />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default PaymentProductView
