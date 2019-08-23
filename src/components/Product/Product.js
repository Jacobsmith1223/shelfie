import React, { Component } from 'react'
import '../Product/Product.css'

export default class Product extends Component {
    render() {
        const {image,name,price} = this.props.inventory
        return (
            <div className='red-box'>
                <img src={image} alt='products' className='image-sizer' />
                <p>{name}</p>
                <p>${price}</p>
            </div>
        )
    }
}
