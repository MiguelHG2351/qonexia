import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Header } from './style'
import video from '../../static/video/video.mp4'
import logo from '../../static/images/logo.jpg'

function ContentHeader() {
    return <Fragment>
        <div className="background">
            <video src={ video } loop={ true } muted autoPlay={ true }></video>
        </div>
        <div className="header-menu">
            <ul className="list-nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="products">Products</Link></li>
                <li><a target="_blank" href="https://facebook.com/QONEXIA">Social Media</a></li>
            </ul>
        </div>
        <div className="header-title">
            <h1>Bienvenidos a Qonexia</h1>
        </div>
        <div className="header-list">
            <img src={ logo } />
        </div>
    </Fragment>
}

function Headers() {
    return <Header>
        <ContentHeader />
    </Header>

}

export default Headers;