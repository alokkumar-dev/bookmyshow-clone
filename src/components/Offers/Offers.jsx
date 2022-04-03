import { BanksCart } from "../BanksCart.jsx/BanksCart";
import { CartBtn } from "../CartBtn/CartBtn";
import "./Offers.css";

export const Offers = () => {
  return (
    <div className="Offer_containter">
      <div>
        <input className="inputBox" type="text" placeholder="Search for Offers by Name or Bank" />
        <div className="CartMainDiv">
          <h4>FILTER OFFERS BY</h4>
          <div className="cartDiv">
            <CartBtn />
          </div>
        </div>
        <div className="BankCartMainDiv">
          <div className="BanksCart">
            <BanksCart />
          </div>
        </div>
      </div>
    </div>
  );
};
