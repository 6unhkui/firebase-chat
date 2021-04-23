import Layout from "components/Layout";
import React from "react";
import { firestoreService } from "utils/fbase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Box, Heading } from "@chakra-ui/layout";
import ChatMessage from "components/ChatMessage";
import { IChatMessage } from "types/ChatMessage";

interface ChatRoomProps {}

const ChatRoom: React.FC<ChatRoomProps> = ({}) => {
    const messagesRef = firestoreService.collection("messages");
    const query = messagesRef.orderBy("createdAt").limit(25);
    const [messages, loading, error] = useCollectionData<IChatMessage, "id">(query, {
        idField: "id"
    });

    return (
        <Layout>
            <Box>{messages && messages.map(message => <ChatMessage key={message.id} {...message} />)}</Box>
        </Layout>
    );
};

export default ChatRoom;
