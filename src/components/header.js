import React, { Component } from "react";

import BadgeHeader from "./badgeHeader";


class Header extends Component {
   render() {
      return (
         <div className="summary">            
            <div className="heading"><span>GÜNDEM</span></div>
            <BadgeHeader badgeTitle="new" cname='badge bg_red' count='11' color='red'/>
            <BadgeHeader badgeTitle="sum" cname='badge bg_blue' count='12' color='blue'/>
            
         </div>
      );
   }
}

export default Header;
