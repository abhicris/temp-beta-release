import React from "react";
import Nftcontainer from "./NFTContainer";

import "../assets/css/nft.css";
const Nftslist = (props) => {
  const { sqr, cir } = props;
  const list = [
    {
      title: "GREEN MANDALA",
      logo: sqr,
      rating: "3.33Ξ",
      author: "LZY.LAD",
      authorImg: cir,
    },
    {
      title: "GREEN MANDALA",
      logo: sqr,
      rating: "3.33Ξ",
      author: "LZY.LAD",
      authorImg: cir,
    },
    {
      title: "GREEN MANDALA",
      logo: sqr,
      rating: "3.33Ξ",
      author: "LZY.LAD",
      authorImg: cir,
    },
  ];
  return list.map((nft, i) => (
    <div key={i} className=" m-2">
      <Nftcontainer {...nft}></Nftcontainer>
    </div>
  ));
};

export default Nftslist;
