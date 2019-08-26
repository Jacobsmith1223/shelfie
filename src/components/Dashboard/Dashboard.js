import React, { Component } from 'react'
import Product from '../Product/Product'



export default class Dashboard extends Component {
    deleteProduct = (data) => {
        console.log(data)
        this.setState({
            inventory:data
          })
       
         }
         updateProd = (data) => {
             console.log('clickyclicky')
            this.setState({
              inventory: data
        })}

   

    render() {
       
        let mappedInv = this.props.inventory.map((inventory,index) => {
            return <Product key = {index} inventory = {inventory} deleteProduct = {this.deleteProduct} updateProd = {this.updateProd} />
        })

        return (
            <div>
                {mappedInv}
            </div>
        )
    }
}
