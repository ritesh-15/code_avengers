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

function DonationHistory() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://codeavengersserver-production.up.railway.app/api/orders/${id}?populate[0]=products`
      );

      if (!res) {
        setLoading(true);
      }

      setProducts(res.data.data.attributes.products.data);

      setLoading(false);
    } catch (error) {
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
            <h2>Donations</h2>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {products.map((product) => (
            <Card>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="2">
                  <Box>
                    <div className="box2">
                      <div className="avatar">
                        <Image className="img" src={product.attributes.image} />
                      </div>
                      <div className="food_h_details">
                        <Heading size="xs" textTransform="uppercase">
                          DISH : {product.attributes.name}
                        </Heading>
                        <Text pt="1" fontSize="sm">
                          {product.attributes.description}
                        </Text>
                        <Heading pt="1" fontSize="sm">
                          TYPE : {product.attributes.type}
                        </Heading>
                        <Text className="price_text" pt="1" fontSize="sm">
                          PRICE : {product.attributes.price}
                        </Text>
                        <Text pt="1" fontSize="sm" className="discount_text">
                          Discount : {product.attributes.discount}
                        </Text>
                        <Text pt="1" fontSize="sm">
                          Date : {product.attributes.createdAt}
                        </Text>
                      </div>
                    </div>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}

export default DonationHistory;
