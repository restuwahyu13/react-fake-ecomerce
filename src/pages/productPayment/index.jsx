import { createElement, useEffect, useState } from 'react'
import _ from 'lodash'
import PaymentProductView from './__view'

function PaymentProduct() {
	const [productsItems, setProductsItems] = useState([])
	const [productCounts, setProductsCount] = useState([])
	const [subTotal, setSubTotal] = useState(0)

	useEffect(() => {
		productList()
	}, [])

	const productList = () => {
		const items = []

		for (var i = 0; i < localStorage.length; i++) {
			const parse = JSON.parse(localStorage.getItem(localStorage.key(i)))
			if (parse.data !== undefined) items.push(parse)
		}

		if (items.length > 0) {
			const productsItems = items
				.map((val) => {
					const products = []
					if (val.data.length) {
						val.data.forEach((val2) => products.push(val2))
					}
					return products
				})
				.flat(Infinity)

			if (productsItems.length) {
				setProductsCount(items)
				setProductsItems(_.uniqBy(productsItems, 'id'))
			}

			if (localStorage.getItem('subTotal') !== null) {
				setSubTotal(parseInt(localStorage.getItem('subTotal')))
			}
		}
	}

	return createElement(PaymentProductView, { productsItems, productCounts, subTotal })
}

export default PaymentProduct
