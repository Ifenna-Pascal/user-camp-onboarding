import React, { useEffect, useState } from "react";
import { getCollectionData } from "../db/method";

function Data() {
  useEffect(() => {
    getCollectionData(setData);
  }, []);
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="min-h-[80vh] p-6">
      <h1>MEMBERSHIP DETAILS</h1>
    </div>
  );
}

export default Data;
