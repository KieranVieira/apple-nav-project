import React from 'react';

const Product = props => {
    return(
        <h1>{props.match.params.product}</h1>
    )
}

export default Product;