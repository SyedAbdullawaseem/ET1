import React, { Fragment } from "react";
import Heading from "./Heading";

import Items from "./Items"

const Store = props =>{
    return (
      <Fragment>
        <Heading/>
        <Items/>
      </Fragment>

    );
}

export default Store;