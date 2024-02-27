import styled from "styled-components";

const DiaryImgCp = () => {
  return (
    <MoreContentImgWrapper>
      <MoreContentImg
        src={
          "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
        }
      />
    </MoreContentImgWrapper>
  );
};

export default DiaryImgCp;

const MoreContentImgWrapper = styled.div`
  width: 560px;
  height: 500px;
  margin-bottom: 70px;
  object-fit: cover;
  border-bottom: 1px solid #d7d7d7;
  border-top: 1px solid #d7d7d7;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;

    padding-bottom: 89%;
    position: relative;
  }
`;

const MoreContentImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: black;
  margin-bottom: 70px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    margin-top: 20px;
  }
`;
