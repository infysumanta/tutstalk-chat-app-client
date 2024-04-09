/**
 * Determines the margin value for a message based on the sender.
 * @param messages - The array of messages.
 * @param m - The current message object.
 * @param i - The index of the current message.
 * @param userId - The ID of the current user.
 * @returns The margin value for the message.
 */
export const isSameSenderMargin = (
  messages: string | any[],
  m: { sender: { _id: any } },
  i: number,
  userId: any,
) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

/**
 * Checks if the sender of a message is the same as the previous message sender and not the current user.
 * @param messages - The array of messages.
 * @param m - The current message object.
 * @param i - The index of the current message in the array.
 * @param userId - The ID of the current user.
 * @returns A boolean value indicating whether the sender is the same as the previous message sender and not the current user.
 */
export const isSameSender = (
  messages: string | any[],
  m: { sender: { _id: any } },
  i: number,
  userId: any,
) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

/**
 * Checks if a given message is the last message in a conversation for a specific user.
 * @param messages - The array of messages in the conversation.
 * @param i - The index of the current message.
 * @param userId - The ID of the user.
 * @returns True if the message is the last message and is not sent by the user, false otherwise.
 */
export const isLastMessage = (
  messages: string | any[],
  i: number,
  userId: any,
) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

/**
 * Checks if the sender of a message is the same as the sender of the previous message.
 * @param messages - An array of messages.
 * @param m - The current message.
 * @param i - The index of the current message in the array.
 * @returns A boolean value indicating whether the sender of the current message is the same as the sender of the previous message.
 */
export const isSameUser = (
  messages: { sender: { _id: any } }[],
  m: { sender: { _id: any } },
  i: number,
) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

/**
 * Returns the name of the sender based on the logged-in user and the list of users.
 * If the logged-in user is the first user in the list, it returns the name of the second user.
 * Otherwise, it returns the name of the first user.
 * @param loggedUser - The logged-in user object containing the _id property.
 * @param users - An array of user objects containing the _id and name properties.
 * @returns The name of the sender.
 */
export const getSender = (
  loggedUser: { _id: any },
  users: {
    _id: any;
    name: any;
  }[],
) => {
  return users[0]?._id === loggedUser?._id ? users[1].name : users[0].name;
};

/**
 * Returns the full sender object based on the logged-in user and an array of users.
 * If the logged-in user is the first user in the array, it returns the second user.
 * Otherwise, it returns the first user.
 *
 * @param loggedUser - The logged-in user object.
 * @param users - An array of user objects.
 * @returns The full sender object.
 */
export const getSenderFull = (loggedUser: { _id: any }, users: any[]) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
