import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0px auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            listStyleType: "none",
            margin: 0,
          }}
        >
          <li style={{ margin: "0 10px 0 0" }}>
            <Link style={{ color: `white`, textDecoration: `none` }} to="/">
              <h2 style={{ display: "inline", fontSize: 15 }}>Home</h2>
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link
              style={{ color: `white`, textDecoration: `none` }}
              to="/products"
            >
              <h2 style={{ display: "inline", fontSize: 15 }}>Products</h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
