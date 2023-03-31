import React, { Component } from "react";

import { Cards } from "../../components/index";
import ImageSliderAuto from "../../components/slider/slider";
import { ImageData } from "../../components/slider/imagedetail";
export class Homepage extends Component {
  render() {
    return(
      <div>
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 3000}/>
      <Cards />
      </div>
    ) ;
  }
}
