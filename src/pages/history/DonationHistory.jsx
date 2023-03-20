import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Box,
  Stack,
  Heading,
  Text,
  Avatar,
  Button,
} from "@chakra-ui/react";
import "./paymentHistory.css";
import { IoIosArrowBack } from "react-icons/io";

function DonationHistory() {
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
            <h2>Donation History</h2>
          </div>
        </div>
      </div>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <div className="box">
                <div className="avatar">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M="
                  />
                </div>
                <div className="food_h_details">
                  <Heading size="xs" textTransform="uppercase">
                    Restaurant Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Food Details
                  </Text>
                </div>
                <div className="remove_btn">
                  <h3>$.200</h3>
                  <Button colorScheme="blue" size="sm" mt="2">
                    Remove
                  </Button>
                </div>
              </div>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default DonationHistory;
