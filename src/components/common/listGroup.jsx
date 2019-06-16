import React from "react";
import { isTemplateElement } from "@babel/types";

const ListGroup = props => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
