import styled from "styled-components";

interface Props {
  nickname: string;
  mainContent: string;
}

const PostContentCp = ({ nickname, mainContent }: Props) => {
  return (
    <PostContentWrapper>
      <PostContent>
        <PostContentProfileName>{nickname}</PostContentProfileName>
        {mainContent}
      </PostContent>
    </PostContentWrapper>
  );
};

export default PostContentCp;

const PostContentWrapper = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;

  background-color: ${(props) => props.theme.backColor};

  display: flex;
  algin-items: center;
  padding-top: 15px;

  @media screen and (max-width: 501px) {
    width: 420px;
    border-top: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
  }
`;

const PostContentProfileName = styled.span`
  font-weight: 900;
  font-size: 16px;
  margin-right: 10px;
  color: ${(props) => props.theme.fontColor};
`;

const PostContent = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  line-height: 140%;
  margin-left: 10px;
`;
