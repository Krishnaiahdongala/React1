import React, { useState } from "react";
import EmojiPicker, { Emoji } from "emoji-picker-react";


const EmojiSearching = () => {
  const [emoji, setEmoji] = useState("");
  const handleEmojiClick = (emojiData) => {
    setEmoji(emojiData.unified);
  };
  return (
    <center>
    <div  className="container">
      <h1>Emoji Searching </h1>
      <div>{emoji ? <Emoji unified={emoji} size={50}/> : null}</div>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
    </center>
   
  );
};

export default EmojiSearching;
