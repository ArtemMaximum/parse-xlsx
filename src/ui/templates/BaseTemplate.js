import React from "react";
import { Row, Column } from "styled-flexbox-grid";

export const BaseTemplate = ({ children }) => {
  return (
    <Row justify={{ m: "center", l: "between" }}>
      <Column span={12}>{children}</Column>
    </Row>
  );
};

export default { BaseTemplate };
