import React from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateService = () => {
  const service = useLoaderData();
  const {id} = useParams();
  const { _id, name, email, message } = service;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/services/${id}`, {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    Swal.fire({
        title: "Good Job!",
        text: "Successfully updated",
        icon: "success",
      });
  };
  return (
    <div className="w-[90%] mx-auto">
      <Header></Header>
      <div className="w-full mx-auto text-center">
        <p className="font-semibold py-4">Update the information of {name}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Name</p>
          <input defaultValue={service?.name} className="outline my-3" {...register("name")} /> <br />
          <p>Email</p>
          <input defaultValue={service?.email} className="outline my-3" {...register("email")} /> <br />
          <p>Message</p>
          <input defaultValue={service?.message} className="outline my-3" {...register("message")} /> <br />
          {/* <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
