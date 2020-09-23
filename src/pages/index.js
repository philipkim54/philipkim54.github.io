import React from "react"

import "./style/index.css"

import logo_white from "../../static/images/logo-white.png"

const CARDS = [
  {
    src: "",
    address: { street: "", city: "", state: "", zip_code: "" },
    price: 100,
    beds: 3,
    baths: 1,
    sqft: 1300,
  },
]

export default function Home() {
  return (
    <div className="app">
      <div className="banner">
        <div className="banner-left">
          <img src={logo_white} alt="logo-white" />
        </div>
        <div className="banner-right">
          <p className="search-header">
            Find the home that's special to you, where do you want to live?
          </p>
          <span className="search-bar">
            <input type="text" />
          </span>
        </div>
      </div>

      <div className="main">
        <div className="listing-gallery section">
          <h1 className="listing-gallery-header">HOME LISTINGS</h1>
          <div className="listing-gallery-carousel"></div>
        </div>
        <div className="communities section"></div>
        <div className="testimonials-gallery section"></div>
        <div className="market-trends section"></div>
        <div className="bio section"></div>
      </div>
    </div>
  )
}
