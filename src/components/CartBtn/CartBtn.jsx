import "./CartBtn.css";
import creditCart from "../../svg/creditCart.svg";
import wallet from "../../svg/wallet.svg";
import reward from "../../svg/reward.svg";
import book from "../../svg/book.svg";
export const CartBtn = () => {
  const cart = [
    {
      svgUrl: creditCart,
      name: "CreditCart",
    },
    {
      svgUrl: creditCart,
      name: "DebitCart",
    },
    {
      svgUrl: book,
      name: "BookShow",
    },
    {
      svgUrl: wallet,
      name: "Wallet",
    },
    {
      svgUrl: reward,
      name: "Rewards",
    },
  ];

  return (
    <>
      {cart.map((el) => (
        <div className="svgdiv">
          <img src={el.svgUrl} alt="" />
          <p className="btnName">{el.name} </p>
        </div>
      ))}
    </>
  );
};
