import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiaryBlogPage from "./pages/DiaryBlogPage";
import StoryPage from "./pages/StoryPage";
import ProfilePage from "./pages/ProfilePage";
import KeepDiaryPage from "./pages/KeepDiaryPage";
import "./reset.css";
import DiaryPage from "./pages/DiaryPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import Modals from "./modals/Modals";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styledComponents/theme";
import GlobalStyle from "./styledComponents/globalStyle";

import darkModeAtom from "./store/persist/darkModeAtom";
import OtherProfilePage from "./pages/OtherProfilePage";
const App = () => {
  const darkModeState = useRecoilValue(darkModeAtom);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkModeState ? theme.darkTheme : theme.lightTheme}>
        <GlobalStyle />
        <Modals />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="/diary-blog" element={<DiaryBlogPage />} />
          <Route path="/diary/:diaryId" element={<DiaryPage />} />
          <Route path="/profile/my" element={<ProfilePage />} />
          <Route path="/profile/other/:userId" element={<OtherProfilePage />} />
          <Route path="/keep-diary" element={<KeepDiaryPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
