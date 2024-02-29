import { ContentUserInfo } from "@/types/userTypes";
import BasicProfileImgCp from "@components/profile/BasicProfileImgCp";
import styled from "styled-components";

interface Props {
  img: string | null;
}
const CommentProfileCp = ({ img }: Props) => {
  return (
    <CommentProfileImgWrapper>
      {img ? <CommentProfileImg /> : <BasicProfileImgCp width="40px" />}
    </CommentProfileImgWrapper>
  );
};

export default CommentProfileCp;

const CommentProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`;

const CommentProfileImgWrapper = styled.div`
  width: 40px;
  height: 40px;
`;
