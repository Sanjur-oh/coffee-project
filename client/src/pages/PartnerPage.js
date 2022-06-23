import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const PartnerPage = () => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    fetch("/partners")
    .then((r) => r.json())
    .then(setPartners);
  }, []);


  return (
    <div>
      {/* {partners.length > 0 && ( */}
        <ul>
        <p> Choose a partner to view signature coffees </p>
          {partners.map(partner => (
            <div>
              {/* <div key={partner.id}>{partner.name}</div> */}
              {/* <Link exact to={`/partners/${partner.id}`}><button >View!</button></Link> */}
              <h2>
                  <Link to={`/partners/${partner.id}`}>
                  {partner.name}
                  </Link>
                </h2> 
            </div>
          ))}
        </ul>
      {/* )} */}
    </div>
  )
}

export default PartnerPage

// export default function PartnerPage() {
//     return <h1>PartnerPage</h1>
// }