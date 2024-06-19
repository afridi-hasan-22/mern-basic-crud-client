import React from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const options = {
      method: "POST",
      body: data,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Good Job!",
          text: "Successfully added new services!",
          icon: "success",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-[90%] mx-auto">
      <Header></Header>
      <div className="w-full mx-auto text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Name</p>
          <input className="outline my-3" {...register("name")} /> <br />
          <p>Email</p>
          <input className="outline my-3" {...register("email")} /> <br />
          <p>Message</p>
          <input className="outline my-3" {...register("message")} /> <br />
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

export default AddService;
