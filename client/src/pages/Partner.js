import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Partner() {
  // const [partner, setPartner] = useState({
  //   data: null,
  //   error: null,
  //   status: "pending",
  // });
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`/partners/${id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then((partner) =>
  //         setPartner({ data: partner, error: null, status: "resolved" })
  //       );
  //     } else {
  //       r.json().then((err) =>
  //         setPartner({ data: null, error: err.error, status: "rejected" })
  //       );
  //     }
  //   });
  // }, [id]);

  // function handleAddCoffee(newCoffee) {
  //   setPartner({
  //     data: {
  //       ...partner,
  //       coffees: [...partner.coffees, newCoffee],
  //     },
  //     error: null,
  //     status: "resolved",
  //   });
  // }

  // if (status === "pending") return <h1>Loading...</h1>;
  // if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div className="container">
      
      <p>hello</p>
    </div>
  );
}

export default Partner;






// {/* <div className="card">
//         <h1>{partner.name}</h1>
//       </div>
//       <div className="card">
//         <h2>Coffee Menu</h2>
//         {partner.coffees.map((coffee) => (
//           <div key={coffee.id}>
//             <h3>{coffee.name}</h3>
//             <p>
//               <em>{coffee.description}</em>
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="card">
//         <h3>Add New Coffee</h3>
//         {/* <CoffeeForm partnerId={partner.id} onAddCoffee={handleAddCoffee} /> */}
//       </div> */}