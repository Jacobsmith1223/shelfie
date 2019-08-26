import React, { Component } from 'react'
import '../Product/Product.css'
import axios from 'axios'


export default class Product extends Component {
    constructor(){
        super()

        this.state = {
            edit:false,
            editName: '',
            editPrice:'',
            editImg:''
        }
    }

    handleToggle= () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    handleEdit = (val) => {
        this.setState({
            editName: val
        })
    }
    handleEdit2 = (val) => {
        this.setState({
            editPrice: val
        })
    }
    handleEdit3 = (val) => {
        this.setState({
            editImg: val
        })
    }

    handleUpdateProd = (id)=> {
        let updateproduct = {
            name:this.state.editName,
            price:this.state.editPrice,
            img:this.state.editImg
        }
    
        axios.put(`http://localhost:8080/api/product/${id}`,updateproduct).then(response => {
            this.props.updateProd(response.data)
            this.handleToggle()
        })
    }
   
   
    handleDelete = (data) => {
        console.log('handleDelete')
        axios.delete(`http://localhost:8080/api/product/${this.props.inventory.id}`).then(response => {
            this.props.deleteProduct(response.data)
        })
      
    }

    render() {
        const {img,name,price} = this.props.inventory
        
        return (
            <div>
                {!this.state.edit
                ?
            (<div className='red-box'>
                <img src={img} alt='products' className='image-sizer' />
                <p>{name}</p>
                <p>${price}</p>
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.handleToggle} >Edit</button>
            </div>)
            :
            (<div>
                <input placeholder="edit name here" name="editName" onChange ={(e)=>this.handleEdit(e.target.value)} value={this.state.editName}/>

                <input placeholder="edit price here" name="editPrice" onChange ={(e)=>this.handleEdit2(e.target.value)} value={this.state.editType}/>

                <input placeholder="edit img here" name="editImage"
                onChange ={(e)=>this.handleEdit3(e.target.value)} value={this.state.editImage} />

                <button onClick = {(val) => this.handleUpdateProd(this.props.inventory.id)} >Save Changes</button>
            </div>)}
            </div>
        )
    }
}
