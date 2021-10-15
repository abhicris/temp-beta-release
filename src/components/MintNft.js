import React from "react";
import fire from "../assets/images/fire.png";
const Mintnft = (props) => {
  return (
    <div className="nft-success-container">
      <div className="fire-img-container">
        <img className="fire-img" src={fire} alt="fir"></img>
      </div>
      <div className="nft-description">
        AWESOME! YOUR NFT HAS BEEN MINTED SUCCESSFULLY!
      </div>
      <div className="nft-action-btn">SHOW THE WORLD!</div>
      <div
        className="nft-action-btn"
        onClick={() => props.history.push("/PREVIEW-NFT")}
      >
        TAKE ME TO MY NFT!
      </div>
    </div>
  );
};

export default Mintnft;
