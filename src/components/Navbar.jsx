import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">Home</Link>
        <Link as={RouterLink} to="/register" color="white" fontWeight="bold">Register</Link>
        <Link as={RouterLink} to="/login" color="white" fontWeight="bold">Login</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;