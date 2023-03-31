import React from "react";
import { Component } from "react";

import "./shop.scss";
import { ShopMenuItems } from "../../components/index";
const shop = [
  {
    id: 1,
    title: "Camping Shoes",
    routeName: "camping shoes",
    items: [
      {
        id: 1,
        name: "camping shoes Gear#1",
        imageUrl: "https://i.pinimg.com/564x/1e/d4/90/1ed49013ce81294c62fe51092922f394.jpg",
        price: 250,
        quantity:1,
      },
      {
        id: 2,
        name: "camping shoes Gear#2",
        imageUrl: "https://i.pinimg.com/564x/0b/0b/da/0b0bdaa6877e89f1457e10a52aeb5910.jpg",
        price: 1800,
        quantity:1,
      },
      {
        id: 3,
        name: "camping shoes Gear#3",
        imageUrl: "https://i.pinimg.com/564x/9b/07/fd/9b07fd2bb36f5ca70f44a62b0cfeef2c.jpg",
        price: 3500,
        quantity:1,
      },
      {
        id: 4,
        name: "camping shoes Gear#4",
        imageUrl: "https://i.pinimg.com/564x/32/bf/3e/32bf3ee42a27918375a571613225eda5.jpg",
        price: 2500,
        quantity:1,
      },
    ],
  },
  {
    id: 2,
    title: "Camping Chairs",
    routeName: "campingchairs",
    items: [
      {
        id: 10,
        name: "Camping Chairs#1",
        imageUrl: "https://i.pinimg.com/564x/7a/99/38/7a99388d2edc32c67ef723602e527d4e.jpg",
        price: 220,
      },
      {
        id: 11,
        name: "Camping Chairs#2",
        imageUrl: "https://i.pinimg.com/564x/1d/d8/74/1dd87420cac433c5b55775657e6eedbf.jpg",
        price: 280,
      },
      {
        id: 12,
        name: "Camping Chairs#3",
        imageUrl: "https://i.pinimg.com/564x/fd/f8/49/fdf849915ce6e46f2d7ecfd900d7003d.jpg",
        price: 110,
      },
      {
        id: 13,
        name: "Camping Chairs#4",
        imageUrl: "https://i.pinimg.com/564x/85/2b/81/852b8118f34cad86d1ca6a4b7893f9b1.jpg",
        price: 160,
      },
    ],
  },
  {
    id: 3,
    title: "Camping Bags",
    routeName: "campingbags",
    items: [
      {
        id: 17,
        name: "Camping Bags Gear#1",
        imageUrl: "https://i.pinimg.com/564x/0c/2f/63/0c2f63333e47f024002a1c05de0a0161.jpg",
        price: 1250,
      },
      {
        id: 18,
        name: "Camping Bags Gear#2",
        imageUrl: "https://i.pinimg.com/564x/72/95/c9/7295c9d5ed7d2afe86f501c6c03695f0.jpg",
        price: 900,
      },
      {
        id: 19,
        name: "Camping Bags Gear#3",
        imageUrl: "https://i.pinimg.com/564x/4a/d0/cb/4ad0cb58ef4cbee1e232c08d9184fdd4.jpg",
        price: 900,
      },
      {
        id: 20,
        name: "Camping Bags Gear#4",
        imageUrl: "https://i.pinimg.com/564x/58/17/3c/58173cc975fee470a259bf337dd4b630.jpg",
        price: 1650,
      },
    ],
  },
  {
    id: 4,
    title: "Tents",
    routeName: "tents",
    items: [
      {
        id: 22,
        name: "Tenst Gear#1",
        imageUrl: "https://i.pinimg.com/564x/41/89/9a/41899aa6942e83e39a86eb1503c28f29.jpg",
        price: 25,
      },
      {
        id: 23,
        name: "Tenst Gear#2",
        imageUrl: "https://i.pinimg.com/564x/c7/9b/a2/c79ba20517d61f1d3355b38bb3bf48ab.jpg",
        price: 20,
      },
      {
        id: 24,
        name: "Tenst Gear#3",
        imageUrl: "https://i.pinimg.com/564x/e4/29/25/e42925701f8c5d827838491f7f1d7ca1.jpg",
        price: 80,
      },
      {
        id: 25,
        name: "Tenst Gear#4",
        imageUrl: "https://i.pinimg.com/564x/9b/88/77/9b8877cd03459d96f27d7184e57cb6d4.jpg",
        price: 80,
      },
    ],
  },
  {
    id: 5,
    title: "Water Proof Suite",
    routeName: "WaterProofSuite ",
    items: [
      {
        id: 29,
        name: "Water Proof Suite Gear#1",
        imageUrl: "https://i.pinimg.com/736x/8e/1f/41/8e1f41fa34c02159f1e4118d1e5c014c.jpg",
        price: 325,
      },
      {
        id: 30,
        name: "Water Proof Suite Gear#2",
        imageUrl: "https://i.pinimg.com/736x/b5/dc/eb/b5dceb096b022e55f4c1e4902b1eaa73.jpg",
        price: 25,
      },
      {
        id: 31,
        name: "Water Proof Suite Gear#3",
        imageUrl: "https://i.pinimg.com/736x/51/1c/1f/511c1fe64724e43137b61fc22ae8f858.jpg",
        price: 25,
      },
      {
        id: 32,
        name: "Water Proof Suite Gear#4",
        imageUrl: "https://i.pinimg.com/564x/e2/70/fe/e270fe63b829460ab5f63e666c39f189.jpg",
        price: 40,
      },
    ],
  },
];
export class Shop extends Component {
  render() {
    return (
      <div>
        {shop.map((shop) => (
          <ShopMenuItems shops={shop} key={shop.id} />
        ))}
      </div>
    );
  }
}
