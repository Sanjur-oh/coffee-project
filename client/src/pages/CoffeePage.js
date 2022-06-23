import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const CoffeePage = () => {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    fetch("/coffees")
    .then((r) => r.json())
    .then(setCoffees);
  }, []);


  return (
    <div className="container">
        <div className="cards" style={{ display: 'flex' }}>
        {/* {coffees.length > 0 && ( */}
            <ul>
            {coffees.map((coffee) => (
                <div>
                <div key={coffee.id}></div> 
                <img src={coffee.image} alt={coffee.name} className="image" />
                <h2>
                  <Link to={`/coffees/${coffee.id}`}>
                  {coffee.name}
                  </Link>
                </h2>               
                {/* <Link exact to={`/coffees/${coffee.id}`}><button >View!</button></Link> */}
                </div>
            ))}
            </ul>
        {/* )} */}
        </div>
    </div>
  )
}

export default CoffeePage



//  {/* <li key={coffee.description}>{coffee.description}</li> */}

// return (
//   <div className="container">
//       <div className="cards" style={{ display: 'flex' }}>
//       {coffees.length > 0 && (
//           <ul>
//           {coffees.map((coffee) => (
//               <div>
//               <li key={coffee.id}>{coffee.name}</li>
//               {/* <li key={coffee.description}>{coffee.description}</li> */}
//               <img src={coffee.image} alt={coffee.name} className="image" />
//               <Link exact to={`/coffees/${coffee.id}`}><button >View!</button></Link>
//               </div>
//           ))}
//           </ul>
//       )}
//       </div>
//   </div>
// )





