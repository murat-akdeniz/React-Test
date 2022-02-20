import React, { Component } from "react";

class Circle extends Component {
   render() {
      return (
         <span className="circle">
            <span className={this.props.color}>{this.props.count}</span>
         </span>
      );
   }
}

export default Circle;
