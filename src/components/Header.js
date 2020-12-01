import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img src="../static/logo.svg" alt="dsadas" className="header__logo" />
      <h1 className="header__title">FishCastle</h1>
      <a
        className="header__summary snipcart-checkout snipcart-summary"
        href="#"
        style={{ textDecoration: "none" }}
      >
        <span className="header__price snipcart-total-price">cart</span>
      </a>
    </header>
  );
}
