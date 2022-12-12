import React, { useEffect } from "react";
import { getCollectionData } from "../db/method";

function Data() {
  useEffect(() => {
    getCollectionData();
  }, []);
  return <div>Data</div>;
}

export default Data;
