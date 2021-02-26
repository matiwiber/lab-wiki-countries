import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import countries from "./countries";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div  >
      <Navbar />
      </div>
      <div className="row">
        <div className="" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
            <CountriesList countries={countries}/>
          </div>
        </div>
        <Switch>
          <Route exact path='/countries/:countryCode' render={props => <CountryDetails {...props} countries={countries}/>}/>
        </Switch>
      </div>
    </div>//
  );
}


export default App;