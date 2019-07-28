import React from "react";
import createReactClass from "create-react-class";

export class UIType {
  constructor(name) {
    switch (name) {
      case "checkbox":
        return new CheckBox();
      case "radio":
        return new Radio();
    }
  }
}

class Radio {
  create() {
    return createReactClass({
      render: () => {
        return (
          <>
            <input type="radio" name="radio" value="1" />
            <input type="radio" name="radio" value="2" />
            <input type="radio" name="radio" value="3" />
          </>
        );
      }
    });
  }
}

class CheckBox {
  create() {
    return createReactClass({
      render: () => {
        return (
          <>
            <input type="checkbox" name="1" value="1" />
            <input type="checkbox" name="1" value="2" />
            <input type="checkbox" name="1" value="3" />
          </>
        );
      }
    });
  }
}
