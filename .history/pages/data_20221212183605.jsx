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
      <h1 className="text-gray-800 text-2xl mb-6 font-semibold px-8 font-sono block">
        MEMBERSHIP DETAILS
      </h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      FirstName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      LastName
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Branch
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Comment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((x, i) => (
                      <tr
                        class="border-b w-full tableDesign whitespace-nowrap md:whitespace-normal"
                        key={x.id}
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                          {i + 1}
                        </td>
                        <td class="tex-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {x.firstName}
                        </td>
                        <td class=" text-gray-900 font-light text-md px-6 py-4 whitespace-nowrap">
                          {x.lastName}
                        </td>
                        <td class=" text-gray-900 font-light text-md px-6 py-4 whitespace-nowrap">
                          {x.email}
                        </td>
                        <td class="text-md text-gray-900 font-light px-6 text-md py-4 whitespace-nowrap">
                          {x.branch ? x.branch : "NILL"}
                        </td>
                        <td class="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {x.location ? x.location : "NILL"}
                        </td>
                        <td class="text-md text-gray-900 w-[20px] font-light px-6 py-4 whitespace-nowrap">
                          {x.comment ? x.comment : "NILL"}
                        </td>{" "}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
