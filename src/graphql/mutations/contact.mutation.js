import { gql } from "@apollo/client";

export const SEND_MESSAGE_MUTATION = gql`
  mutation sendMessage(
    $messageId: String!
    $content: String!
    $senderId: String!
    $chatRoomId: String!
    $date: Float!
  ) {
    sendMessage(
      messageId: $messageId
      content: $content
      senderId: $senderId
      chatRoomId: $chatRoomId
      date: $date
    ) {
      messageId
      content
      senderId
      chatRoomId
    }
  }
`;
