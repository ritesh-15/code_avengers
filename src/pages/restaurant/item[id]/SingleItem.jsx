import React from "react"

export default function SingleItem() {
  return (
    <section className="overflow-y-auto w-[95%] mx-auto py-4">
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl">Food item details</h1>
      </div>

      <form action="" className="flex flex-col gap-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Food item title
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Quantity
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Discount
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Price
            </label>
            <input
              type="text"
              className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-sm" htmlFor="">
              Description
            </label>
            <textarea className="bg-gray-100 resize-none outline-none mt-2 w-full px-2 py-3 rounded-md" />
          </div>
        </div>

        <div>
          <img
            className="w-full h-[200px] object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
          />
        </div>
      </form>
    </section>
  )
}
