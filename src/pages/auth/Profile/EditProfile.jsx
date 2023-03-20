import { Container, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./editProfile.css";
import { BiEditAlt } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
function EditProfile() {
  return (
    <div className="container">
      <div className="arrow_heading_div">
        <div className="back_arrow_div">
          <Link to="/userprofile">
            <IoIosArrowBack className="back_arrow" />
          </Link>
        </div>
        <div className="heading_name">
          <Heading>
            <Text className="user_detail_heading">Edit Profile</Text>
          </Heading>
        </div>
      </div>

      <div className="user_details_img_info">
        <div className="user_img_div">
          <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
        </div>
      </div>
      <section className="flex justify-center w-[95%] mx-auto items-center mt-10 mb-10">
        <div className="w-full md:max-w-[550px]">
          <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="">
                Name
              </label>
              <input
                type="text"
                className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="">
                Email address
              </label>
              <input
                type="text"
                className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm" htmlFor="">
                Password
              </label>
              <input
                type="password"
                className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
              />
            </div>

            <button className="bg-primary  text-white px-2 py-3 rounded-md">
              Save
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
