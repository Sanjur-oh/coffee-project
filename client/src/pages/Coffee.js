import React from "react";
import { Link } from "react-router-dom";

function Coffee({ coffees }) {
  // const renderCoffees = Object.keys(coffees).map((coffeeID) => (
  //   <li key={coffeeID}>
  //     <Link to={`/coffees/${coffeeID}`}>{coffees[coffeeID].title}</Link>
  //   </li>
  // ));

  return (
          <div>
            <p>hello</p>
          {/* <ul>{renderCoffees}</ul>; */}
          </div>
  )
}

export default Coffee;