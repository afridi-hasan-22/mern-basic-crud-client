import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";

const App = () => {
  const loadServices = useLoaderData;
  const [services, setServices] = useState(loadServices);

  return (
    <div className="w-[90%] mx-auto">
      <Header></Header>

      <div className="py-6">
        <p className="text-2xl text-center font-semibold">Our Services </p>
        <div className="flex justify-end">
          <Link to="/addservice">
            <button className="bg-orange-200 py-1 px-3 rounded-md">
              Add Service
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 py-5">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              services={services}
              setServices={setServices}
              service={service}
            ></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
