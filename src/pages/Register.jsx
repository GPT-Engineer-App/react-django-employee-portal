import { useState } from "react";
import { Container, Input, Button, VStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/register/", { employeeId, name, email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>Register</Heading>
        <Input placeholder="Employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={handleRegister}>Register</Button>
        {message && <Text>{message}</Text>}
      </VStack>
    </Container>
  );
};

export default Register;