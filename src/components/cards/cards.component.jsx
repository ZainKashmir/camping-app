import React, { Component } from "react";
import { MenuItems } from "../index";
import "./card.style.scss";

const section = [
  {
    title: "Camping Shoes",
    imageUrl: "https://i.pinimg.com/564x/55/de/97/55de9756f87418c4f1a3750a105af679.jpg",
    id: 1,
    linkUrl: "shop/campingshoes",
  },
  {
    title: "Camping Chairs",
    imageUrl: "https://i.pinimg.com/564x/35/20/0a/35200ad3fb410dae4e061c83ecfd6fe3.jpg",
    id: 2,
    linkUrl: "shop/campingchairs",
  },
  {
    title: "Camping Bags",
    imageUrl: "https://i.pinimg.com/564x/f3/b1/9b/f3b19b78b9593d330adef84f77af0bb3.jpg",
    id: 3,
    linkUrl: "shop/campingbags",
  },
  {
    title: "Tents",
    imageUrl: "https://i.pinimg.com/564x/a7/cb/43/a7cb431cc757a2331b158c830c9ca251.jpg",
    size: "large",
    id: 4,
    linkUrl: "shop/tents",
  },
  {
    title: "Water Proof Suite",
    imageUrl: "https://i.pinimg.com/564x/27/2f/10/272f10d8bf6c6fe628ab0cd487635141.jpg",
    size: "large",
    id: 5,
    linkUrl: "shop/waterproofsuite",
  },
];
export class Cards extends Component {
  render() {
    return (
      <div className="item-list">
        {section.map((section) => (
          <MenuItems sections={section} key={section.id} />
        ))}
      </div>
    );
  }
}
