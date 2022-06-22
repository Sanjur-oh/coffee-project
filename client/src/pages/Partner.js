import React, { useEffect, useState } from "react"

const Partner = () => {
  const [partners, setPartners] = useState([])

  const fetchData = () => {
    fetch("/partners")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPartners(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {partners.length > 0 && (
        <ul>
          {partners.map(partner => (
            <li key={partner.id}>{partner.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Partner

// export default function Partner() {
//     return <h1>Partner</h1>
// }