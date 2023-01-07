import React from "react";
import { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";

function Details(){
    const [datas, setdatas] = useState<any[]>([]);
    const {id} =useParams();
    console.log(id)
   
    useEffect(() => {
            fetch("https://api.spacexdata.com/v3/launches")
               .then(response => {
                 return response.json()
               })
               .then(data => {
                  setdatas(data)
                })
                .catch((err)=>{
                  console.log(err.message)
                })
            
    }, [])
    //  const d = datas[0]
    //   console.log(d.flight_number)
    const currentFlight = datas.find((flight)=> flight?.flight_number== id); 
    // console.log(currentFlight)
    //const{launch_year,launch_date_unix} =currentFlight;
    return(
        <>
      {/* <p>{currentFlight.launch_year}</p> */}
        <div className="grid  place-content-center ">
            <h5 className="mt-10 mb-10  font-bold  text-2xl">Details</h5>
        </div>
      <div className="grid place-content-center  ">
      <div className="grid bg-gray-800  h-80 md:grid-cols-2 m-3  border rounded-lg shadow-md  hover:bg-gray-100 "> 
            <img className=" mt-2 ml-5  md:h-auto md:w-48 pt-10 " src={currentFlight?.links.mission_patch} alt=""/>
        <a href="#" className="flex flex-col items-center ">
            <div className="flex flex-col justify-between pt-10 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{currentFlight?.mission_name}</h5>
                <p className="mb-2 text-gray-400">ID: {currentFlight?.flight_number}</p>
                <p className="mb-2 text-gray-400">Launched: {currentFlight?.launch_year}</p>
                <p className="mb-2 text-gray-400">Rocket Name: {currentFlight?.rocket.rocket_name}</p>
                <p className="mb-2 text-gray-400">Rocket type: {currentFlight?.rocket.rocket_type}</p>
                <p className="mb-2 text-gray-400">Launch site : {currentFlight?.launch_site.site_name_long}</p>
            </div>
        </a>
       </div>
      </div>

        </>
    )
}
export default Details;