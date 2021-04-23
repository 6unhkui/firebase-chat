import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import { authService } from "utils/fbase";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
    const user = useAuth();

    let body;
    if (user) {
        body = (
            <>
                <Avatar src={user.photoURL || ""} alt={user.displayName} />
                <Box>{user.displayName}</Box>
                <Button colorScheme="teal" mr="4" onClick={() => authService.signOut()}>
                    Logout
                </Button>
            </>
        );
    } else {
        body = (
            <>
                <Button colorScheme="teal" mr="4">
                    Sign Up
                </Button>
                <Button colorScheme="teal">Log in</Button>
            </>
        );
    }

    return (
        <Flex>
            <Box p="2">
                <Heading size="md">Chakra App</Heading>
            </Box>
            <Spacer />
            <Box>{body}</Box>
        </Flex>
    );
};

export default NavBar;
