import React from "react";
import cir from "../assets/images/cir.jpg";
import Creatorcontainer from "./Creatorcontainer";
import "../assets/css/creator.css";
const Creatorslist = (props) => {
  const list = [
    {
      author: "LZY.LAD",
      authorImg: cir,
    },
    {
      author: "LZY.LAD",
      authorImg: cir,
    },
    {
      author: "LZY.LAD",
      authorImg: cir,
    },
    {
      author: "LZY.LAD",
      authorImg: cir,
    },
  ];
  return list.map((creator, i) => (
    <div key={i} className="m-2 ">
      <Creatorcontainer {...creator}></Creatorcontainer>
    </div>
  ));
};

export default Creatorslist;
