import { Container } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
//import SubHeader from '../components/SubHeader';

const HomePage = () => {
    return (
        <Container>
            <div>
                <img src='/images/blogbrick.png' style= {{ width: 1100, height: 600}} alt='blog logo' />
            </div>
            <div className="mx-auto"> 
                <a href='/BlogsPage'><button>Start Blogging</button></a>
            </div>
        </Container>
    );
};

export default HomePage;