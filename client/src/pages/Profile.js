import { useEffect, useState } from "react";
import {  useParams, Link } from "react-router-dom";
// import olBen from "./olBen.jpg";

function Profile() {
  const [{ data: user, error, status }, setUser] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/users/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((user) =>
          setUser({ data: user, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setUser({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  function handleDeleteActivity(id) {
    fetch(`/users/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser((users) => {      
          users.filter((user) => user.id !== id)
          
      });
      }
    });
  }
  
  // function refreshPage() {
  //   window.location.reload(false);
  // }
  

  if (status === "pending") return <div>"hol up"</div>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <section>
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <button onClick={() => handleDeleteActivity(user.id)}>Delete Account?</button>
      <button onClick={() => handleDeleteActivity(user.id)}>Update Password</button>
      {/* <Link onClick={() => handleDeleteActivity(user.id)}>Delete Account?</Link> */}
    </section>
  );
}

export default Profile;

















// // import React, { useEffect, useState } from "react"


// function Profile() {
//   // const [user, setUser] = useState([])

//   // useEffect(() => {
//   //   fetch(`/user/${id}`)
//   //   .then((r) => r.json())
//   //   .then(setUser);
//   // }, []);


//   return (
//     <>
//       <h1>Profile</h1>

//       <p>
//         This profile page needs to display user info and can update username
//         password or delete account Should not be seen unless logged in
//       </p>
//     </>
//   );
// }

// export default Profile;

