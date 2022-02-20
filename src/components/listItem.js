import React, { Component } from "react";
import Circle from "./circle";
import Popup from "./popup";

class ListItem extends Component {
   render() {
      const { count, txt, id } = this.props;
      return (
         <div className="listItem">
            <div className="container">
               <Circle count={count} color="white" />
               <span>{txt}</span>
            </div>
            <Popup id={id} />
         </div>
      );
   }
}

export default ListItem;
