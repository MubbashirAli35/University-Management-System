import React from 'react';
import NavbarComponent from './NavbarComponent';
import BackgroundImage from './BackgroundImageComponent';
import { Media } from 'reactstrap';

function HomeComponent(props) {

    return(
        <div>
            <NavbarComponent />
            <img src={require('./background_image.jpg')} className='bg-image' />
        </div>
    );
}

export default HomeComponent;