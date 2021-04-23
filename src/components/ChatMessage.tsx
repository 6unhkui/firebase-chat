import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import { useAuth } from "contexts/AuthContext";
import React from "react";
import { IChatMessage } from "types/ChatMessage";

interface ChatMessageProps {}

const ChatMessage: React.FC<ChatMessageProps & IChatMessage> = ({ uid, text, photoURL }) => {
    const user = useAuth();
    const isSender = uid === user?.uid;

    return (
        <Box>
            <Avatar size="md" src={photoURL} />
            <Box>{text}</Box>
        </Box>
    );
};

export default ChatMessage;
