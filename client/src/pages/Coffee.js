import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Coffee = ({coffee}) => {
  const [coffees, setCoffees] = useState([])

  const fetchData = () => {
    fetch("/coffees")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCoffees(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="cards__item">
        <div className="cards" style={{ display: 'flex' }}>
        {coffees.length > 0 && (
            <ul>
            {coffees.map(coffee => (
                <>
                <li key={coffee.id}>{coffee.name}</li>
                <li key={coffee.description}>{coffee.description}</li>
                <img src={coffee.image} alt={coffee.name} className="image" />
                <Link exact to={`/coffees/${coffee.id}`}><button >View!</button></Link>
                </>
            ))}
            </ul>
        )}
        </div>
    </div>
  )
}

export default Coffee






// export default function Coffee() {
//     return <h1>Coffee</h1>
// }