import React from 'react'
import { isSameSender, isLastMessage, isSameSenderMargin, isSameUser } from '../config/ChatLogics';
import { ChatState } from '../Context/ChatProvider';
import { Tooltip, Avatar } from '@chakra-ui/react';

const ScrollableChat = ({messages}) => {
    const { user } = ChatState();

  return <div style={{ overflowX: "hidden", overflowY: "auto" }}>
  {messages &&
    messages.map((m, i) => (
      <div style={{ display: "flex" }} key={m._id}>
        {(isSameSender(messages, m, i, user._id) ||
          isLastMessage(messages, i, user._id)) && (
          <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
            <Avatar
              mt="7px"
              mr={1}
              size="sm"
              cursor="pointer"
              name={m.sender.name}
              src={m.sender.pic}
            />
          </Tooltip>
        )}
        <span
          style={{
            backgroundColor: `${
              m.sender._id === user._id ? "#00563F" : "#00008b"
            }`,
            marginLeft: isSameSenderMargin(messages, m, i, user._id),
            marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
            borderRadius: "20px",
            padding: "5px 15px",
            maxWidth: "75%",
            fontSize: "13px",
            fontWeight: "bolder"
          }}
        >
          {m.content}
        </span>
      </div>
    ))}
</div>

}

export default ScrollableChat
