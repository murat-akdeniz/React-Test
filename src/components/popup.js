import { Modal } from "antd";

import React from "react";
import CustomTable from "./customTable";
import ButtonDetail from "./buttonDetails";

class Popup extends React.Component {
   state = {
      visible: false,
   };

   showModal = () => {
      this.setState({
         visible: true,
      });
   };
   handleOk = (e) => {
      console.log(e);
      this.setState({
         visible: false,
      });
   };
   handleCancel = (e) => {
      console.log(e);
      this.setState({
         visible: false,
      });
   };
   render() {
      const {id}=this.props
      return (
         <div>
            <ButtonDetail onClick={this.showModal} />
            <Modal
               title={`ListItem ${id}`}
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
            >
               <CustomTable id={id}/>
            </Modal>
         </div>
      );
   }
}

export default Popup;
