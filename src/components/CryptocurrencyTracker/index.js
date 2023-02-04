// Write your code here
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="app-container">
    <h1 className="head">Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      alt="cryptocurrency"
      className="img"
    />
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
