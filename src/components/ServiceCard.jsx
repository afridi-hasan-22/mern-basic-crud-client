import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ServiceCard = ({ service, services, setServices }) => {
  const { _id, name, email, message } = service;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/services/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.jsonI())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = services.filter((serv) => serv._id !== _id);
              setServices(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="w-full h-52 py-7 px-1  border border-4 border-spacing-4">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Message : {message}</p>
        <div className="flex space-x-4 py-3">
          <Link to={`/updateservice/${_id}`}>
            {" "}
            <button className="bg-green-300 py-1 px-2">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-300 py-1 px-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
