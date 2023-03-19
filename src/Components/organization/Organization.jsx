import React from "react"

export default function Organization() {
  return (
    <div className="w-full md:max-w-[350px] shadow-md">
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1621403215688-d4d8088ccbc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b3JwaGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="w-full md:max-w-[350px] h-[200px] object-cover"
        />
      </div>

      <div className="p-2 mt-2 shadow-md rounded-md">
        <h1 className="text-lg font-semibold">Baramati Orphanage</h1>
        <p className=" mt-2 inline-block">14 January 2023</p>
        <p className="font-sm font-light mt-1">Donated Panipuri</p>
      </div>
    </div>
  )
}
