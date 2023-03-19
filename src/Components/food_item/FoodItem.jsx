import { Link } from "react-router-dom"

export default function FoodItem() {
  return (
    <Link to="/restaurant/items/1">
      <div className="w-full md:max-w-[350px] cursor-pointer hover:shadow-lg transition-all">
        <div className="rounded-md overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-full md:max-w-[350px] object-cover h-[200px]"
          />
        </div>
        <div className="p-2 mt-2 shadow-md rounded-md">
          <h1 className="text-lg font-semibold">Fruity pancake</h1>
          <p className="font-sm font-light mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            quae.
          </p>
          <span className="mt-2 inline-block font-bold">$ 12</span>
        </div>
      </div>
    </Link>
  )
}
