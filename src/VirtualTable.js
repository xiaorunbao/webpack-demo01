import React from "react";
import ReactDOM from "react-dom";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once

function VirtualTable() {
  // Table data as an array of objects
  const list = [
    {
      name: "Brian Vaughn",
      description: "Software engineer",
      name2: "Brian Vaughn",
      description2: "Software engineer",
      name3: "Brian Vaughn",
      description3: "Software engineer",
    },
    {
      name: "Brian Vaughn",
      description: "Software engineer",
      name2: "Brian Vaughn",
      description2: "Software engineer",
      name3: "Brian Vaughn",
      description3: "Software engineer",
    },
    // And so on...
  ];

  // Render your table
  return (
    <Table
      width={500}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      <Column label="Name" dataKey="name" width={100} />
      <Column width={200} label="Description" dataKey="description" />
      <Column label="Name2" dataKey="name2" width={100} />
      <Column width={200} label="Description2" dataKey="description2" />
      <Column label="Name3" dataKey="name3" width={100} />
      <Column width={200} label="Description3" dataKey="description3" />
    </Table>
  );
}
export default VirtualTable;
