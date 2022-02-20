import { CaretRightOutlined } from "@ant-design/icons/lib/icons";

import React, { Component } from "react";

class ButtonDetail extends Component {
   
   render() {
      return (
         <button className="btn" onClick={this.props.onClick}>
            <span className="detail">Detaylar</span>
            <CaretRightOutlined />
         </button>
      );
   }
}

export default ButtonDetail;
