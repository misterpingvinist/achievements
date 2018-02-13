import * as React from "react";
import "./Navbar.sass";
export default () => (
  <div className="header-top-bar">
    <div className="bar">
      <a
        href="#header-regions"
        className="header-sities-link region-opener sel-button-region"
      >
        Красноярск
      </a>
      <ul className="bar-links">
        <li className="headerMenuItem                             headerMenuItem-shops">
          <a href="/info/shops/">Магазины</a>
        </li>

        <li className="headerMenuItem                             headerMenuItem-delivery">
          <a href="/help/delivery/index.php">Доставка</a>
        </li>

        <li className="headerMenuItem                             headerMenuItem-service">
          <a href="/cat/14718086/">Услуги</a>
        </li>

        <li className="headerMenuItem                             headerMenuItem-help">
          <a href="/help/">Помощь</a>
        </li>

        <li className="headerMenuItem                             headerMenuItem-order_info">
          <a href="/personal/orders/">Статус заказа</a>
        </li>

        <li className="headerMenuItem                             headerMenuItem-club">
          <a href="/club/">Бонусная программа</a>
        </li>
      </ul>
      <a
        href="#header-regions"
        className="header-sities-link region-opener sel-button-region"
      >
        Войти
      </a>
    </div>
  </div>
);
