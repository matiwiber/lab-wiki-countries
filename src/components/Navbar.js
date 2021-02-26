import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-primary mb-3" >
                <Link className="navbar-brand" to="/">WikiCountries</Link>
            </div>
        )
    }
}