import React, { Fragment } from 'react'

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
                <li>Inicio</li>
                <li>Products</li>
                <li>Social Media</li>
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