// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = item

  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
