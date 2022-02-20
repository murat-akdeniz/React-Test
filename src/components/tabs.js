import React, { Component } from "react";
import { Tabs } from "antd";


import axios from "axios";
import Content from "./content";
import Header from "./header";


const { TabPane } = Tabs;

class MyTabs extends Component {
   constructor(props) {
      super(props);
      this.state = {
         lists: [],
         visible: 3,
         isLoading: false,
         errorMsg: "",
      };
   }
   componentDidMount() {
      this.loadListItems()
   }



   loadListItems = async () => {
      try {
         
         this.setState({isLoading:true})
         const response = await axios.get(
            `http://localhost:3002/results/`
         );
         

         this.setState((prevState) => ({
           lists:[...prevState.lists, ...response.data],
           errorMsg:''
         }))

      } catch (error) {
        this.setState({
          errorMsg:'Error while loading data. Try again later.'
        })
      }finally{
        this.setState({isLoading:false})
      }
   };



   render() {
     const {lists}=this.state
      return (
         <div className="mytabs">
            <div className="card-container">
               <Tabs type="card">
                  <TabPane tab="Genel Bakış" key="1">
                     <Header />
                     <Content data={lists} visible={this.state.visible}/>
                  </TabPane>
                  <TabPane tab="Günlük İşlemler" key="2">
                     <p>Content of Tab Pane 2</p>
                     <p>Content of Tab Pane 2</p>
                     <p>Content of Tab Pane 2</p>
                  </TabPane>
                  <TabPane tab="Vadesi Yaklaşan İşlemler" key="3">
                     <p>Content of Tab Pane 3</p>
                     <p>Content of Tab Pane 3</p>
                     <p>Content of Tab Pane 3</p>
                  </TabPane>
               </Tabs>
            </div>
         </div>
      );
   }
}

export default MyTabs;
