import React, { useEffect, useState } from "react";
import { getCollectionData } from "../db/method";

function Data() {
  useEffect(() => {
    getCollectionData(setData);
  }, []);
  const [data, setData] = useState([]);
  console.log(data);
  return <div className="h-[80vh]">Data</div>;
}

export default Data;
