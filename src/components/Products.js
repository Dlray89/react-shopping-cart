import React from 'react';
import { ProductContext } from "../App";

// Components
import Product from './Product';


const Products = () => {

	return (
		<ProductContext.Consumer>
		{products => (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={products.addItem}
				/>
			))}
		</div>
		)}
	</ProductContext.Consumer>
	);
};

export default Products;
