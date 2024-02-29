import styled from "styled-components";
import MoreCommentCountCp from "./MoreCommentCountCp";
import MoreCommentInputCp from "./MoreCommentInputCp";
import MoreCommentCp from "./MoreCommentCp";
import { useQuery } from "@tanstack/react-query";
import {
  getComments,
  getDiaryComments,
  getStoryComments,
} from "@/apis/comment/getApis";

interface Props {
  contentType: string;
  contentId: number;
}

const MoreCommentsRCp = ({ contentType, contentId }: Props) => {
  const { data: comments } = useQuery({
    queryKey: [`${contentType}Comments`],
    queryFn: () => getComments(contentId, contentType),
  });
  return (
    <MoreContentCommentsContainer>
      <MoreCommentBackground>
        <MoreCommentsContainer>
          <MoreCommentCountCp />
          <MoreCommentInputCp contentType={contentType} contentId={1} />
          <MoreCommentsWrapper>
            {comments!.map((comment) => (
              <MoreCommentCp contentType={contentType} commentInfo={comment} />
            ))}
          </MoreCommentsWrapper>
        </MoreCommentsContainer>
      </MoreCommentBackground>
    </MoreContentCommentsContainer>
  );
};

export default MoreCommentsRCp;

const MoreContentCommentsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const MoreCommentBackground = styled.div`
  width: 100%;
  height: auto;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.moreCommentsBgColor};
`;

const MoreCommentsContainer = styled.div`
  width: 560px;
  height: 100%;
  @media screen and (max-width: 600px) {
    padding-right: 20px;
    padding-left: 20px;
    width: 100%;
  }
`;

const MoreCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
