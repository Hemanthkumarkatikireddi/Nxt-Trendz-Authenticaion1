// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-content">
      <div className="nav-big-screen-content">
        <img
          className="nav-big-screen-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
        />
        <div className="nav-big-screen-topics">
          <ul>
            <li className="nav-big">Home</li>
            <li className="nav-big">Products</li>
            <li className="nav-big">Cart</li>
          </ul>
          <button type="button" className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      <div className="nav-medium-screen-content">
        <div className="nav-medium-sub">
          <img
            className="nav-big-screen-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="logo"
          />
          <div className="nav-big-screen-topics">
            <button type="button" className="logout-medium-btn">
              <img
                className="logout-medium-screen-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="logout"
              />
            </button>
          </div>
        </div>
        <div className="nav-medium-topics">
          <ul className="nav-medium-topics-sub">
            <li className="nav-medium">
              <img
                className="medium-icons"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
                alt="home"
              />
            </li>
            <li className="nav-medium">
              <img
                className="medium-icons"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
                alt="products"
              />
            </li>
            <li className="nav-medium">
              <img
                className="medium-icons"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
                alt="cart"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
