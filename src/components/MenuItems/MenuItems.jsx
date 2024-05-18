import React from "react";

import { Link } from "react-router-dom";

function MenuItems (props) {
  return (
   <>
   <Link to={props.url}  className="text-lg hover:text-gray-300 transition duration-200" >{props.linkname}</Link>  
   </>
  );
};

export default MenuItems;
