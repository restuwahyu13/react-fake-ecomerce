import { Fragment } from 'react'
import Header from '../../components/Header'

function ProductListView(props) {
	return (
		<Fragment>
			<Header count={props.count} />
			<div className='container w-100 p-5'>
				<div className='row d-flex flex-row justify-content-center align-items-center'>
					<div className='col-12 h-auto'>
						<ul>
							{props.products &&
								props.products.length > 0 &&
								props.products.slice(0, props.incProduct).map((val, index) => (
									<li key={index} style={{ listStyle: 'none' }}>
										<div className='d-flex flex-row justify-content-around overflow-auto mx-2 my-2'>
											<div className='col-3'>
												<div
													style={{
														width: '250px',
														height: 'auto',
														borderRadius: 5,
														boxShadow: '0 0 5px 5px rgba(222, 222, 222, 0.5)'
													}}>
													<img
														src={val.image}
														alt='logo'
														style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: 200, borderRadius: 5 }}
													/>
													<h4
														className='mt-3'
														style={{
															padding: 5,
															fontSize: '15px',
															color: '#2e2e2e',
															fontWeight: '600',
															textAlign: 'left'
														}}>
														{val.title}
													</h4>
													<p
														style={{
															padding: 5,
															fontSize: '13px',
															color: '#454545',
															fontWeight: '600',
															textAlign: 'left',
															marginTop: '-10px'
														}}>
														$ {val.price}
													</p>
												</div>
											</div>
											<div className='col-1 mx-3'>
												<input
													type='number'
													className='form-control'
													name='quantity'
													defaultValue={0}
													style={{
														display: 'flex',
														justifyContent: 'center',
														fontSize: 15,
														fontWeight: 200,
														position: 'relative',
														top: '6rem'
													}}
													onChange={props.handleChangeQuantity}
												/>
											</div>
											<div className='col-4 mx-3'>
												<button
													className='btn col-5 text-light'
													style={{
														backgroundColor: '#6772E5',
														display: 'flex',
														justifyContent: 'center',
														fontSize: 14,
														fontWeight: 600,
														position: 'relative',
														top: '6rem'
													}}
													onClick={() => props.handlerClickBuy(val.id)}>
													Buy
												</button>
											</div>
										</div>
									</li>
								))}
						</ul>
						<div className='d-flex flex-row justify-content-center align-items-center'>
							<button
								className='btn col-5 text-light'
								style={{
									backgroundColor: '#6772E5',
									display: 'flex',
									justifyContent: 'center',
									fontSize: 14,
									fontWeight: 600,
									position: 'relative',
									top: '10px'
								}}
								onClick={props.handlerClickLoad}>
								{props.btnDisabled !== true && 'Load More...'}
								{props.btnDisabled !== false && 'Loading...'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default ProductListView
