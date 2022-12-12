import React, { useEffect } from "react";
import { getCollectionData } from "../db/method";

function Data() {
  useEffect(() => {
    getCollectionData(setData);
  }, []);
  const [data, setData] = useState([]);
  console.log(data);
  return <div>Data</div>;
}

export default Data;
