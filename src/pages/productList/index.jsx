import { createElement, useState, useEffect } from 'react'
import axios from 'axios'
import ProductListView from './__view'

function ProductList() {
	const [products, setProducts] = useState([])
	const [incProduct, setIncProduct] = useState(3)
	const [btnDisabled, setBtnDisabled] = useState(false)
	const [quantity, setQuantity] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const res = await axios.get('https://fakestoreapi.com/products')
			if (res.data) setProducts(res.data)
		} catch (error) {
			console.error(error)
		}
	}

	const handleChangeQuantity = (e) => setQuantity({ ...quantity, [e.target.name]: e.target.value })

	const handlerClickLoad = () => {
		setBtnDisabled(true)
		setTimeout(() => {
			setBtnDisabled(false)
			setIncProduct(incProduct + 3)
		}, 2000)
	}

	const handlerClickBuy = (id) => {
		const storeProducts = []

		if (products && products.length > 0) {
			const count = parseInt(quantity.quantity)
			const findProduct = products.find((val) => val.id === id)

			for (let i = 0; i < count; i++) {
				storeProducts.push(findProduct)
			}
		}

		if (storeProducts.length > 0) {
			localStorage.setItem(`items${id}`, JSON.stringify({ data: storeProducts }))
			getItems()
		}
	}

	const getItems = () => {
		const items = []

		for (var i = 0; i < localStorage.length; i++) {
			const parse = JSON.parse(localStorage.getItem(localStorage.key(i)))
			if (parse.data !== undefined) items.push(parse)
		}

		if (items.length > 0) {
			const prices = items.map((val) => {
				const pricesCount = []
				if (val.data.length) {
					val.data.forEach((val2) => pricesCount.push(val2.price))
				}
				return pricesCount
			})

			const subTotal = prices.flat(Infinity).reduce((current, val) => current + val, 0)
			const countItems = prices.flat(Infinity).length

			setCount(countItems)
			localStorage.setItem('subTotal', subTotal)
			localStorage.setItem('countItems', countItems)
		}
	}

	return createElement(ProductListView, {
		products,
		incProduct,
		btnDisabled,
		quantity,
		count,
		handlerClickLoad,
		handlerClickBuy,
		handleChangeQuantity
	})
}

export default ProductList
