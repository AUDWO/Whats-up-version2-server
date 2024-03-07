import styled from "styled-components";
interface Props {
  img: string;
}
const DiaryImgCp = ({ img }: Props) => {
  return (
    <MoreContentImgWrapper>
      <MoreContentImg src={img} />
      <MoreContentImgSpace></MoreContentImgSpace>
    </MoreContentImgWrapper>
  );
  /*
  return (
    <MoreContentImgWrapper>
      {img ? <MoreContentImg src={img} /> : <MoreContentImg src={img} />}
    </MoreContentImgWrapper>
  );*/
};

export default DiaryImgCp;

const MoreContentImgWrapper = styled.div`
  object-fit: cover;
  border-bottom: 1px solid #d7d7d7;
  border-top: 1px solid #d7d7d7;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
`;

const MoreContentImgSpace = styled.img`
  border-radius: 5px;
  width: 100%;
  padding-bottom: 70%;
  background-color: black;
  @media screen and (max-width: 520px) {
  }
`;

const MoreContentImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const NoContentImg = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    margin-top: 20px;
  }
`;
