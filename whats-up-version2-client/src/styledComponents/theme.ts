const color = {
  main: "#f7dd07",
  sub: "#4199ff",
  mainGrayfont: "#acacac",
  explainFontColor: " #b0b0b0",
};

const common = { fontFamily: "Orbitron" };

const lightTheme = {
  bgColor: "#ffffff",
  subBgColor: "#ffffff",
  mdColor: "#ffffff",
  fontColor: "black",
  borderColor: "#dbdbdb",
  replyInputBorderColor: "#dbdbdb",
  subBorderColor: "#dbdbdb",
  color,
  hoverColor: "#edebeb",
  mdBgColor: " rgba(0,0, 0,0.2)",
  common,
};

const darkTheme = {
  bgColor: "#000000",
  mdColor: "#262626",
  subBgColor: "#262626",
  fontColor: "white",
  color,
  borderColor: "#363636",
  borderColor2: "white",
  replyInputBorderColor: "white",
  subBorderColor: "#363636",
  hoverColor: "rgba(144,144,144,0.5)",
  diaryBlogContentBgColor: "#1e1e1e",
  mdBgColor: " rgba(0, 0, 0, 0.7)",
  common,
};

const theme = {
  darkTheme,
  lightTheme,
};

export default theme;
