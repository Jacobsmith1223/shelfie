import React, { Component } from 'react'
import '../Product/Product.css'

export default class Product extends Component {
    render() {
        const {img,name,price} = this.props.inventory
        return (
            <div className='red-box'>
                <img src={img} alt='products' className='image-sizer' />
                <p>{name}</p>
                <p>${price}</p>
            </div>
        )
    }
}
