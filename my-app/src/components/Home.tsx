import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { json } from 'stream/consumers';

// type resultProps = {
//   flight_number: number;
//   mission_name: string;
//   //datas.links={}
// };
function Home() {
  //const [datas, setdatas] = useState<resultProps[]>([]);
  const [datas, setdatas] = useState<any[]>([]);

  const fetchUserData = () => {
    fetch("https://api.spacexdata.com/v3/launches")
       .then(response => {
         return response.json()
       })
       .then(data => {
         setdatas(data.slice(-100))
       })
    }
    console.log("datas//")
    console.log(datas[0])

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
      <>
         <div className="grid  place-content-center ">
            <h5 className="mt-10 mb-10  font-bold  text-2xl">Our Launches</h5>
        </div>
        <div className="grid mb-8  rounded-lg shadow-sm  md:mb-12 md:grid-cols-2 m-3"> 
            {datas.map((item, index) => {
                return (
                    
                    <div key={item.flight_number}>
                    <div className=" bg-gray-800 border border-gray-200 rounded-lg shadow-md bg-gray-800 border-gray-700 m-3">
                        <a href="#" key={index} className="content-center  m-3">
                            <img className="mt-1 ml-5  w-1/6 h-1/6 place-content-center " src={item.links.mission_patch} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">No.:{item.flight_number} {item.mission_name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg bg-blue-600 hover:bg-blue-700 " to={`/Details/${item.flight_number}`}>Read More {item.flight_number}</Link>
                        </div>
                    </div>
                    </div>
                        
                );
                })}
        </div>
       

    </>
  );
}

export default Home;
