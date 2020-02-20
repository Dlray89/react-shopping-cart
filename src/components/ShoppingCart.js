import React from 'react';

import ProductContext from "../App";
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
		<ProductContext.Consumer>
		{}
			{props.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
			</ProductContext.Consumer>
		</div>
	);
};

export default ShoppingCart;
