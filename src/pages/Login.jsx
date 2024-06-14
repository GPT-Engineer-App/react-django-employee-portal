import { useState } from "react";
import { Container, Input, Button, VStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login/", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Login</Heading>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Container>
  );
};

export default Login;