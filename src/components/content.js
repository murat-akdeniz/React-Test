import React, { useState } from "react";
import ListItem from "./listItem";

const Content = ({ data }) => {
   const [visible, setVisible] = useState(3);

   const loadMore = () => {
      setVisible((prevValue) => prevValue + 5);
   };

   return (
      <div>
         {data &&
            data
               .slice(0, visible)
               .map((item) => (
                  <ListItem txt={item.txt} count={item.count} key={item.id} id={item.id}/>
               ))}
         <div style={{ textAlign: "right",marginTop:35 }}>
            <a onClick={loadMore} href="!#" style={{textDecoration:'underline'}}>Tüm Gündemi Görüntüle ({data.length})</a>
         </div>
      </div>
   );
};

export default Content;
