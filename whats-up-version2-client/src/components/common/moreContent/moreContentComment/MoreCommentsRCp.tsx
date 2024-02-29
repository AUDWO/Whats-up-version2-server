import styled from "styled-components";
import MoreCommentCountCp from "./MoreCommentCountCp";
import MoreCommentInputCp from "./MoreCommentInputCp";
import MoreCommentCp from "./MoreCommentCp";

interface Props {
  contentType: string;
}

const MoreCommentsRCp = ({ contentType }: Props) => {
  return (
    <MoreContentCommentsContainer>
      <MoreCommentBackground>
        <MoreCommentsContainer>
          <MoreCommentCountCp />
          <MoreCommentInputCp contentType={contentType} contentId={1} />
          <MoreCommentsWrapper>
            <MoreCommentCp />
            <MoreCommentCp />
            <MoreCommentCp />
            <MoreCommentCp />
            <MoreCommentCp />
            <MoreCommentCp />
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
  background-color: ${(props) => props.theme.bgColor};
  background-color: #f7f7f7;
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
