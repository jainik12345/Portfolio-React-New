// import { React, useEffect } from "react";
// import {
//   Box,
//   SimpleGrid,
//   Flex,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import routes from "../../routes";
// import Navbar from "../../components/Navbar/Navbar";
// import ProjectCard from "../../components/ProjectCard/ProjectCard";

// import BloodBank from "../../assets/projects/blood.png";
// import CarRental from "../../assets/projects/car rental.jpg";
// import FoodDelivery from "../../assets/projects/food delivery.jpg";
// import Weather from "../../assets/projects/Weather-Project.png";
// import LoginPage from "../../assets/projects/Login-Page.jpg";

// export default function Projects() {
//   const textColorPrimary = useColorModeValue(
//     "secondaryGray.900",
//     "lightpeach.100"
//   );

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });

//   const getActiveRoute = (routes) => {
//     for (let i = 0; i < routes.length; i++) {
//       if (window.location.href.indexOf(routes[i].path) !== -1) {
//         return routes[i].navbarDisplayName;
//       }
//     }
//   };

//   return (
//     <Box>
//       <Navbar displayText={getActiveRoute(routes)} />
//       <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
//         <Flex
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           mb="40px"
//         ></Flex>
//         <SimpleGrid
//           columns={{ base: 1, md: 3 }}
//           gap="25px"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <ProjectCard
//             projectImage={BloodBank}
//             projectName={"BLOOD BANK MANAGEMENT"}
//             aboutProject={
//               "Administrators manage requests, ensuring effective resource use"
//             }
//             techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
//             projectLink="https://github.com/Rahul1582/NFT-Based-E-Commerce-Website"
//           />
//           <ProjectCard
//             projectImage={CarRental}
//             projectName={"CAR RENTAL SYSTEM"}
//             aboutProject={
//               "Implemented features such as user authentication, reservation management, and an admin panel"
//             }
//             techStack={"HTML, CSS, JAVASCRIPT, PHP, MYSQL"}
//             projectLink="https://github.com/Rahul1582/Lets_Collab"
//           />
//           <ProjectCard
//             projectImage={FoodDelivery}
//             projectName={"FOOD DELIVERY WEBSITE"}
//             aboutProject={
//               "Frontend, Admin Panel, Backend Server, User Authentication, Shopping Cart, Stripe Integration, Order Status Updates."
//             }
//             techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB, STRIPE"}
//             projectLink="https://github.com/jainik12345/React-E-Commerce"
//           />
//           <ProjectCard
//             projectImage={Weather}
//             projectName={"WEATHER APP"}
//             aboutProject={
//               "Weather Web App to get the current weather state using the openweathermap API 🌐"
//             }
//             techStack={"HTML, CSS, JAVASCRIPT, REACT JS"}
//             projectLiveLink="https://generate-weather-app.netlify.app/"
//             projectLink="https://github.com/jainik12345/Weather-App"
//           />
//           <ProjectCard
//             projectImage={LoginPage}
//             projectName={"LOGIN PAGE"}
//             aboutProject={"Login Page and Register Page"}
//             techStack={"HTML, CSS, JAVASCRIPT, REACT JS"}
//             projectLink="https://github.com/jainik12345/Login_Page"
//           />
//         </SimpleGrid>
//       </Box>
//     </Box>
//   );
// }

// Test 1 :

import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
  Card,
  CardBody,
  Stack,
  Badge,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );
  const cardBg = useColorModeValue("white", "navy.800");
  const borderClr = useColorModeValue("gray.200", "gray.600");

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

  const projects = [
    {
      name: "Compass Tourism",
      about:
        "Dynamic tourism platform with domestic & international packages. Complete admin panel for managing content & packages, fully API-integrated for real-time updates.",
      tech: "React, Node, Express, MySQL",
    },
    {
      name: "The Narmada Tent City (SOU)",
      about:
        "Travel & booking platform for Statue of Unity visitors. Includes booking flow, contact automation, travel APIs, deployed using cPanel with DB & domain setup.",
      tech: "React, Node, Express, MySQL",
    },
    {
      name: "Aqua Chem (E-Commerce Platform)",
      about:
        "E-commerce site with product listings, Redux cart, secure checkout, Stripe for card payments, Razorpay UPI integration, and optimized backend APIs.",
      tech: "React, Node, Express, MySQL, Redux, Stripe, Razorpay",
    },
    {
      name: "Parking Valets System",
      about:
        "Real-time valet and vehicle tracking app using Socket.IO. Features secure entry, car assignment, payment logs, admin controls, and exit verification.",
      tech: "React, Node, Express, MySQL, Socket.IO",
    },
    {
      name: "Positive H.",
      about:
        "Positive Hospitality is a top-notch owner-operator model management company in the hospitality industry. We understand that the hospitality industry is highly competitive, and we strive to provide exceptional service to our clients.",
      tech: "React, Node, Express, MySQL",
    },
  ];

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />

      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex justifyContent="center" mb="40px">
          <Text
            fontSize="2xl"
            fontWeight="700"
            color={textColorPrimary}
            textAlign="center"
          >
            My Projects
          </Text>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="30px"
          px={{ base: "10px", md: "0px" }}
        >
          {projects.map((p, i) => (
            <Card
              key={i}
              bg={cardBg}
              border="1px solid"
              borderColor={borderClr}
              borderRadius="20px"
              transition="all 0.25s ease"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "xl",
              }}
            >
              <CardBody>
                <Stack spacing="15px">
                  <Text fontSize="xl" fontWeight="700">
                    {p.name}
                  </Text>

                  <Text fontSize="sm" lineHeight="1.6" opacity="0.85">
                    {p.about}
                  </Text>

                  <Badge
                    colorScheme="purple"
                    fontSize="0.8rem"
                    borderRadius="6px"
                    w="fit-content"
                    px="10px"
                    py="2px"
                  >
                    {p.tech}
                  </Badge>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
