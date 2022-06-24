import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const PartnerPage = () => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    fetch(`/partners`)
    .then((r) => r.json())
    .then(setPartners);
  }, []);


  return (
    <div>
      {/* {partners.length > 0 && ( */}
      <ul>
        <p> Choose a partner to view signature coffees </p>
        {partners.map((partner) => (
          <div>
            <h2>{partner.name}</h2>
            <h3>Coffees:</h3>
            <ul>
              {partner.partner_coffees.map((coffee) => (
                <div key={partner.id}>
                  {coffee.name}
                  {coffee.id}
                  {partner.partner_coffees.coffee}

                  {/* <Link to={`/partner_coffees/${coffee.id}`}>{coffee.name}</Link> */}
                </div>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      {/* )} */}
    </div>
  );
}

export default PartnerPage

// export default function PartnerPage() {
//     return <h1>PartnerPage</h1>
// }

// {/* <div key={partner.id}>{partner.name}</div> */}
//               {/* <Link exact to={`/partners/${partner.id}`}><button >View!</button></Link> */}
//               <h2>{partner.name}</h2> 
//                   {/* <Link to={`/partners/${partner.id}`}>
//                   {partner.name}
//                   </Link> */}