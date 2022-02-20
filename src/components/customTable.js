import { Table } from "antd";
import axios from "axios";

import React, { useEffect, useState } from "react";

const columns = [
   {
      title: "Name",
      dataIndex: "name",
      key: "name",
   },
   {
      title: "Age",
      dataIndex: "age",
      key: "age",
   },
   {
      title: "Address",
      dataIndex: "address",
      key: "address",
   },
];

const CustomTable = ({ id }) => {
   const [data, setData] = useState([]);
   const [errorMsg, setErrorMsg] = useState([""]);
   const [url, setUrl] = useState(`http://localhost:3002/${id}/`);

   useEffect(() => {
      const usersData = async () => {
         try {
            const response = await axios.get(url);
            setData(response.data);
            setErrorMsg("");
         } catch (error) {
            setErrorMsg("Error while loading data. Try again later.");
            setErrorMsg("");
         }
      };
      usersData();
   }, [url]);

   return <Table dataSource={data} columns={columns} />;
};

export default CustomTable;
