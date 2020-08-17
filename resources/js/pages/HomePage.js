import React from 'react';
import ReactDOM from 'react-dom';
import {ProductProvider} from '../Context';
import Layout from '../components/HomePage/Layout';
import Footer from '../components/HomePage/Footer';

const HomePage = ()=>(
    <div>
        <Layout/>
        <Footer/>
    </div>
);

if(document.getElementById('index')){
    ReactDOM.render(<ProductProvider><HomePage /></ProductProvider>, document.getElementById('index'));
}