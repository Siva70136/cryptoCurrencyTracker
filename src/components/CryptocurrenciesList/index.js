// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {list: [], isLoader: true}

  componentDidMount() {
    this.getItemList()
  }

  getItemList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({
      list: updatedData,
      isLoader: false,
    })
  }

  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  render() {
    const {list, isLoader} = this.state
    console.log(list)
    return (
      <div className="cryptocurrencies-list-container" data-testid="loader">
        {isLoader ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          <div>
            {this.renderCryptocurrenciesHeader()}
            <ul className="cryptocurrencies-list" data-testid="loader">
              {list.map(each => (
                <CryptocurrencyItem item={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
