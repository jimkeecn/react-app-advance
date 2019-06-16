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

ListGroup.defaultProps = {
  //Default Property for this component
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
