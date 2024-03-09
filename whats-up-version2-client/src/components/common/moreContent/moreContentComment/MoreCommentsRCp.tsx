import styled from "styled-components";
import MoreCommentCountCp from "./MoreCommentCountCp";
import MoreCommentInputCp from "./MoreCommentInputCp";
import MoreCommentCp from "./MoreCommentCp";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/apis/comment/getApis";

interface Props {
  contentType: string;
  contentId: number;
}

const MoreCommentsRCp = ({ contentType, contentId }: Props) => {
  const { data: comments, isLoading } = useQuery({
    queryKey: [`${contentType}Comments`],
    queryFn: () => getComments(contentId, contentType),
  });

  if (isLoading) {
    return <div>안녕</div>;
  }

  console.log(comments, "content comments -0-0-0");

  return (
    <MoreContentCommentsContainer>
      <MoreCommentBackground>
        <MoreCommentsContainer>
          <MoreCommentCountCp commentCount={comments!.length} />
          <MoreCommentInputCp contentType={contentType} contentId={1} />
          <MoreCommentsWrapper>
            {comments!.length === 0 ? (
              <NoCommentsCp>댓글이 존재하지 않습니다.</NoCommentsCp>
            ) : (
              comments!.map((comment) => (
                <MoreCommentCp
                  contentId={contentId}
                  contentType={contentType}
                  commentInfo={comment}
                />
              ))
            )}
          </MoreCommentsWrapper>
        </MoreCommentsContainer>
      </MoreCommentBackground>
    </MoreContentCommentsContainer>
  );
};

export default MoreCommentsRCp;

const NoCommentsCp = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  padding-top: 60px;
  align-items: flex-start;
  justify-content: center;
`;

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
    padding-bottom: 150px;
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
