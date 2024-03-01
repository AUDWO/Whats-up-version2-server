import styled from "styled-components";
import StoryCp from "./StoryCp";
import MakeStoryCp from "./MakeStoryCp";
import { ArrowDownIcon } from "@components/icons/commonIcons/ArrowDownIcon";
import { MutableRefObject, useRef } from "react";
import { Link } from "react-router-dom";
import moveScroll from "@/utils/moveScroll";
import { useQuery } from "@tanstack/react-query";
import { getAllStory } from "@/apis/storyApis/getApis";

const StoryContentsRCp = () => {
  const storyContentsRef = useRef<HTMLDivElement>(null);

  const { data: storyContents } = useQuery({
    queryKey: ["all-story"],
    queryFn: getAllStory,
  });

  return (
    <StoryContainer>
      <StoryMoreLeftButton
        onClick={() => {
          moveScroll(
            "left",
            storyContentsRef as MutableRefObject<HTMLDivElement>
          );
        }}
      />
      <StoryList ref={storyContentsRef}>
        <MakeStoryCp />
        {storyContents?.map((storyInfo) => {
          const { img, userInfo } = storyInfo;
          return (
            <Link to={`/story/${storyInfo.id}`}>
              <StoryCp userInfo={userInfo} img={img} />
            </Link>
          );
        })}
      </StoryList>
      <StoryMoreRightButton
        onClick={() => {
          moveScroll(
            "right",
            storyContentsRef as MutableRefObject<HTMLDivElement>
          );
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
