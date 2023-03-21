import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  StackDivider,
  Box,
  Stack,
  Heading,
  Text,
  Image,
  Spinner,
} from "@chakra-ui/react";
import "./paymentHistory.css";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

function OrderHistory() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://codeavengersserver-production.up.railway.app/api/orders/${id}?populate[0]=restaurant`
      );

      const data = await axios.get(
        `https://codeavengersserver-production.up.railway.app/api/orders/${id}?populate[0]=order/products`
      );

      if (!res || !data) {
        setLoading(true);
      }

      setName(res.data.data.attributes.restaurant.data.attributes.name);
      setDate(res.data.data.attributes.restaurant.data.attributes.createdAt);
      setImage(
        res.data.data.attributes.restaurant.data.attributes.images[0].Image
      );
      setLocation(data.data.data.attributes.location);
      setAmount(data.data.data.attributes.amount);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Orders Data Not Found !");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="payment_history_container">
      <div className="arrow_heading_div_paymet">
        <div className="back_arrow_div_paymet">
          <Link to="/userprofile">
            <IoIosArrowBack className="back_arrow_payment" />
          </Link>
        </div>
        <div className="button_container">
          <div className="month_div">
            <h2>Payment History</h2>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <Card>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <div className="box">
                  <div className="avatar">
                    <Image className="img" src={image} />
                  </div>
                  <div className="food_h_details">
                    <Heading size="xs" textTransform="uppercase">
                      HOTEL : {name}
                    </Heading>
                    <Text pt="2" fontSize="sm" className="date_order">
                      Date : {date}
                    </Text>
                  </div>
                  <div className="remove_btn">
                    <h3>${amount}</h3>
                  </div>
                </div>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

export default OrderHistory;
