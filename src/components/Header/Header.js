import React, { Component } from 'react'
import '../Header/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='flexer'>
               <img alt='shelfie img' className='picky' src = 'https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png' />
               <h1 className='title'>SHELFIE</h1>
               </div>
            </div>
        )
    }
}
