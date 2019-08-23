import React, { Component } from 'react'
import axios from 'axios';


export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            image: '',
            name: '',
            price: 0
        }
    }

    handleEdit = (val) => {
        this.setState({
            image: val
        })
    }
    handleEdit1 = (val) => {
        this.setState({
            name: val
        })
    }
    handleEdit2 = (val) => {
        this.setState({
            price: val
        })
    }

    addProduct = (event) => {
        event.preventDefault();
    
        const {image,name,price} = this.state;
    
        const body = {
          image,
          name,
          price
        }
        axios.post('http://localhost:8080/api/product', body).then(response => {
          this.setState({inventory:response.data,
          image:'',
        name:'',
      price:''})
        })
        .catch((error)=> {console.log(error)})
      
    }

    render(){
        return (
            <div>
                <label>Image URL:</label>
                <input placeholder="image here" type ="text" onChange={(e) => this.handleEdit(e.target.value)} value={this.state.image}   />

                <label>Product Name:</label>
                <input placeholder="Input name" type="text" onChange={(e) => this.handleEdit1(e.target.value)} value={this.state.name}   />

                <label>Price:</label>
                <input type="number" onChange={(e) => this.handleEdit2(e.target.value)} value={this.state.price}  />

                <button>Cancel</button>
                <button id='cursor'>Add to Inventory</button>
            </div>
        )
    }
}
