import React, { Component } from "react";
import Circle from "./circle";

class BadgeHeader extends Component {
   constructor(props) {
      super(props);
      const { badgeTitle,cname} = this.props;
      

      this.state = {
         check: badgeTitle,
         txt: "",
         cname:cname,
         
         
      };
   }
   componentDidMount() {
     
      if (this.state.check === "new")
         this.setState(() => ({ txt: "YENİ"}));
      else if (this.state.check === "sum")
         this.setState(() => ({ txt: "TOPLAM" }));
      
   }

   render() {
     const {color,count}=this.props
      return (
         <div className={this.state.cname}>
            <span className={color}>{this.state.txt}</span>
            <Circle count={count} color={color}/>
         </div>
      );
   }
}

export default BadgeHeader;
