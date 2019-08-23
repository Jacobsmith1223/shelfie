import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    render() {
       
        let mappedInv = this.props.inventory.map((inventory,index) => {
            return <Product key = {index} inventory = {inventory} />
        })

        return (
            <div>
                {mappedInv}
            </div>
        )
    }
}
