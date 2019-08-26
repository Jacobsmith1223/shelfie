import React, { Component } from 'react'
import axios from 'axios';
import '../Form/Form.css'


export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0
        }
    }

    handleEdit = (val) => {
        this.setState({
            img: val
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

    handleEdit3 = () => {
        this.setState({
            img:'',
            name:'',
            price:0
        })
    }

    addProduct = (event) => {
        event.preventDefault();
    
        const {img,name,price} = this.state;
    
        const body = {
          img,
          name,
          price
        }
        axios.post('http://localhost:8080/api/product', body).then(response => {
          this.setState({inventory:response.data,
          img:'',
        name:'',
      price:''})
        })
        .catch((error)=> {console.log(error)})
      
    }

    render(){
        return (
            <div className="green-box">

                
                <label>Image URL:</label>
                <input className='input1' placeholder="image here" type ="text" onChange={(e) => this.handleEdit(e.target.value)} value={this.state.image}   />
            

                <label>Product Name:</label>
                <input className='input1' placeholder="Input name" type="text" onChange={(e) => this.handleEdit1(e.target.value)} value={this.state.name}   />

                <label>Price:</label>
                <input className='input1' type="number" onChange={(e) => this.handleEdit2(e.target.value)} value={this.state.price}  />

                <button id='cursor' onClick={() => this.handleEdit3()}>Cancel</button>
                <button id='cursor' onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    }
}
