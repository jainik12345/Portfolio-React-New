import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import nftproject from "../../assets/projects/nft_blockchain_500x300.jpg";
import medhub from "../../assets/projects/medhub_500x300.jpg";
import collab from "../../assets/projects/lets_collab_img3.jpg";
import blog from "../../assets/projects/bloggers.jpg";
import eeg from "../../assets/projects/eeg_500x300.jpg";
import mtrans from "../../assets/projects/mt_500x300.jpg";
import steg from "../../assets/projects/steg_500x300.jpeg";

import BloodBank from "../../assets/projects/blood.png";
import CarRental from "../../assets/projects/car rental.jpg";
import FoodDelivery from "../../assets/projects/food delivery.jpg";
import Weather from "../../assets/projects/Weather-Project.png";
import LoginPage from "../../assets/projects/Login-Page.jpg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={BloodBank}
            projectName={"BLOOD BANK MANAGEMENT"}
            aboutProject={
              "Administrators manage requests, ensuring effective resource use"
            }
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
            // projectLiveLink="https://flipkart-grid-frontend.vercel.app/"
            projectLink="https://github.com/Rahul1582/NFT-Based-E-Commerce-Website"
          />
          <ProjectCard
            projectImage={CarRental}
            projectName={"CAR RENTAL SYSTEM"}
            aboutProject={
              "Implemented features such as user authentication, reservation management, and an admin panel"
            }
            techStack={"HTML, CSS, JAVASCRIPT, PHP, MYSQL"}
            // projectLiveLink="https://lets-collab.vercel.app/"
            projectLink="https://github.com/Rahul1582/Lets_Collab"
          />
          <ProjectCard
            projectImage={FoodDelivery}
            projectName={"FOOD DELIVERY WEBSITE"}
            aboutProject={
              "Frontend, Admin Panel, Backend Server, User Authentication, Shopping Cart, Stripe Integration, Order Status Updates."
            }
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, STRIPE"}
            // projectLiveLink="https://medhub-360.vercel.app/"
            projectLink="https://github.com/jainik12345/React-E-Commerce"
          />
          <ProjectCard
            projectImage={Weather}
            projectName={"WEATHER APP"}
            aboutProject={
              "Weather Web App to get the current weather state using the openweathermap API 🌐"
            }
            techStack={"HTML, CSS, JAVASCRIPT, REACT JS"}
            projectLiveLink="https://generate-weather-app.netlify.app/"
            projectLink="https://github.com/jainik12345/Weather-App"
          />
          <ProjectCard
            projectImage={LoginPage}
            projectName={"LOGIN PAGE"}
            aboutProject={"Login Page and Register Page"}
            techStack={"HTML, CSS, JAVASCRIPT, REACT JS"}
            projectLink="https://github.com/jainik12345/Login_Page"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
