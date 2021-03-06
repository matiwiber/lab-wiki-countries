import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CountriesList extends Component {
    render() {
        return (
            <div>
                {this.props.countries.map((country) => {
                return (
                <Link key={country.cca3} className="list-group-item list-group-item-action active" to={"/countries/" + country.cca3}
                >
                {country.name.common}</Link>
                )})}

            </div>
        )
    }
}