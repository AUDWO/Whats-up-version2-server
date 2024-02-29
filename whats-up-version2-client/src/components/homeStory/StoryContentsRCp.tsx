import styled from "styled-components";
import StoryCp from "./StoryCp";
import MakeStoryCp from "./MakeStoryCp";
import { ArrowDownIcon } from "@components/icons/commonIcons/ArrowDownIcon";
import { useRef } from "react";
import { Link } from "react-router-dom";
const StoryContentsRCp = () => {
  const storyContentsRef = useRef(null);

  const moveScroll = (direction: string) => {
    if (storyContentsRef.current && direction === "left") {
      (storyContentsRef.current as HTMLDivElement).scrollLeft -= 120;
    }
    if (storyContentsRef.current && direction === "right") {
      (storyContentsRef.current as HTMLDivElement).scrollLeft += 120;
    }
  };
  return (
    <StoryContainer>
      <StoryMoreLeftButton
        onClick={() => {
          moveScroll("left");
        }}
      />
      <StoryList ref={storyContentsRef}>
        <MakeStoryCp />

        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
        <Link to={`/story/${1}`}>
          <StoryCp
            storyInfo={{
              id: 1,
              img: "",
              content: "content",
              userInfo: { img: null, nickname: "audwo", id: 1 },
            }}
          />
        </Link>
      </StoryList>
      <StoryMoreRightButton
        onClick={() => {
          moveScroll("right");
        }}
      />
    </StoryContainer>
  );
};

export default StoryContentsRCp;

const StoryContainer = styled.div`
  width: 720px;
  height: 200px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 740px) {
    width: 100%;
  }
  @media screen and (max-width: 501px) {
    margin-top: 70px;
  }
  position: relative;
`;
const StoryList = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  scroll-behavior: smooth;
  overflow-x: scroll;
`;

const StoryMoreLeftButton = styled(ArrowDownIcon)`
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 47%;
  left: 0%;
  color: black;
  transform: rotate(90deg);
  z-index: 999;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.theme.color.sub};
`;

const StoryMoreRightButton = styled(ArrowDownIcon)`
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 47%;
  right: 0%;
  color: black;
  transform: rotate(270deg);
  z-index: 999;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) => props.theme.color.sub};
`;
