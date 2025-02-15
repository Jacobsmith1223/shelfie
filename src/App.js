import React, {Component} from 'react';
import axios from 'axios'

import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import './App.css'




export default class App extends Component{
  constructor(){
    super()

    this.state = {
      inventory:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8080/api/inventory').then((response) => {
      this.setState({inventory:response.data})
    })
    .catch((error)=> {console.log(error)})
  }

  

  render(){
  
  return (
   <div>
     <Header />
     <div className='flexin'>
    <Dashboard inventory={this.state.inventory} componentDidMount={this.componentdidMount}/>
     <Form componentDidMount={this.componentdidMount} />
     </div>
   </div>
  );
  }
}