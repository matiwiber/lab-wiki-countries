import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {

  render() {
    let countryCode = this.props.match.params.countryCode;
    let countryObj = this.props.countries.find((eachCountry) => {
      return eachCountry.cca3 === countryCode;
    });

    // console.log(this.props);

    return (
      <div>
        <h1>{countryObj.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryObj.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryObj.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryObj.borders
                    ? countryObj.borders.map((countryCode) => {
                        return (
                          <li>
                            <Link to={'/countries/' + countryCode}>
                              {
                                this.props.countries.find(
                                  (eachCountry) =>
                                    eachCountry.cca3 === countryCode
                                ).name.common
                              }
                            </Link>
                          </li>
                        );
                      })
                    : ''}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
