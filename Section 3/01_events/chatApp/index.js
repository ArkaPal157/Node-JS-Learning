const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user) => {
  console.log(`${user} : ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

//simulating chat

chat.join("Arka");
chat.sendMessage("Arka", "Hello everyone!");

chat.leave("Arka");
chat.sendMessage("Arka", "Am I still here?");