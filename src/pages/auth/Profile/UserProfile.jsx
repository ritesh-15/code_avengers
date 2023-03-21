import { Container, Heading, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./userProfile.css";
import { BiEditAlt } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { useSelector } from "react-redux";
import Spinner from "../../../Components/spinner/Spinner";

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      setLoading(true);
    }
  }, []);

  return (
    <div className="container">
      <div className="arrow_heading_div">
        <div className="back_arrow_div">
          <Link to="/">
            <IoIosArrowBack className="back_arrow" />
          </Link>
        </div>
        <div className="heading_name">
          <Heading>
            <Text className="user_detail_heading">My Profile</Text>
          </Heading>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="user_details_img_info">
            <div className="user_img_div">
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div className="user_info">
              <div className="name_div">
                <div>
                  <h3 className="user_name">{user.user.username}</h3>
                </div>
                <div>
                  <button className="edit_details_btn">
                    <Link to="/edit_profile">
                      <BiEditAlt />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="email_div">
                <p className="user_email">{user.user.email}</p>
              </div>
            </div>
          </div>
          <div className="dashboard">
            <p color="gray">Dashboard</p>
            <div className="dashboard_details_info">
              <Link to={`/payment_history/${user.user.id}`}>
                <div className="payment_history_div">
                  <div className="payment_icon_div">
                    <MdOutlinePayment className="payment_icon" />
                  </div>
                  <div className="payment_history">
                    <Link to={`/payment_history/${user.user.id}`}>
                      Payment History
                    </Link>
                  </div>
                  <div className="payment_history_forward_icon">
                    <Link to={`/payment_history/${user.user.id}`}>
                      <MdArrowForwardIos />
                    </Link>
                  </div>
                </div>
              </Link>
              <Link to={`/donation_history/${user.user.id}`}>
                <div className="donation_history_div">
                  <div className="donation_icon_div">
                    <BiDonateBlood className="donation_icon" />
                  </div>
                  <div className="donation_history">
                    <Link to={`/donation_history/${user.user.id}`}>
                      Donation History
                    </Link>
                  </div>
                  <div className="donation_history_forward_icon">
                    <Link to={`/donation_history/${user.user.id}`}>
                      <MdArrowForwardIos />
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserProfile;
