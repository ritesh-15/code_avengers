import React from "react"
import Organization from "../../components/organization/Organization"


export default function DonationHistory(){
    return(
        <div>
        <div className="h-[2px] my-8 bg-gray-100"></div>

        <h1 className="mb-4 mt-4 font-semibold inline-block">
          Previous donations
        </h1>
        <div className="flex items-center flex-wrap gap-4 mt-4">
          <Organization />
          <Organization />
          <Organization />
          <Organization />
        </div>
        </div>
    )
}