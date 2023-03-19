import React from "react"
import Organization from "../../../components/organization/Organization"

export default function Donations() {
  return (
    <section className="overflow-y-auto w-[95%] mx-auto py-4">
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl">Donations</h1>
      </div>

      <div className="mt-4">
        <h1 className="mb-4 font-semibold inline-block">
          Some organization where you can donate
        </h1>
        <div className="flex items-center flex-wrap gap-4 mt-4">
          <Organization />
          <Organization />
          <Organization />
          <Organization />
        </div>

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
    </section>
  )
}
