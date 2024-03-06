const renderText = (content: string, other: boolean, type: string) => {
  const myProfileInfoText = {
    name: "Enter your name",
    introduction: "Enter your introduction",
  };

  const otherProfileInfoText = {
    name: "User did not enter a real name",
    introduction: "User did not enter a introduction",
  };

  type ProfileInfoTextKey = "name" | "introduction";

  const contentPresence = content && content.length > 1;
  if (other) {
    return contentPresence
      ? content
      : otherProfileInfoText[type as ProfileInfoTextKey];
  } else {
    return contentPresence
      ? content
      : myProfileInfoText[type as ProfileInfoTextKey];
  }
};

export default renderText;
