import React, { Component } from 'react';

import Home from './Home'
import About from './About'
import Page from './Page'

class Vertical extends Component {
    render() {
        return (
            <div className='vertical-page'>
                <section className='background-principal'><Home></Home></section>
                <section className='section'><About background={'white'}></About></section>
                <section className='section'><Page ></Page></section>

                {/* <section className='background-principal'><Home></Home></section> */}
                {/* <section><About background={'white'} textColor={'black'}></About></section> */}
                {/* <section><About background={'red'} textColor={'black'}></About></section> */}
            </div>
        );
    }
}

export default Vertical;