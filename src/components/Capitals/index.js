import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {isActiveId: countryAndCapitalsList[0].id}

  onClickCapital = event => {
    this.setState({isActiveId: event.target.value})
  }

  getCountryName = () => {
    const {isActiveId} = this.state
    const capitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isActiveId,
    )
    return capitalAndCountry.country
  }

  render() {
    const {isActiveId} = this.state
    const country = this.getCountryName(isActiveId)
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="question-container">
            <select className="select-styling" onChange={this.onClickCapital}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country-description">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
