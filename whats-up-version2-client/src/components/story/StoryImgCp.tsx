import styled from "styled-components";

const StoryImgCp = () => {
  return (
    <StoryImgWrapper>
      <StoryImg
        src={
          "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
        }
      />
    </StoryImgWrapper>
  );
};

export default StoryImgCp;

const StoryImgWrapper = styled.div`
  border-radius: 15px;
  width: 560px;
  height: 500px;
  background-color: black;
  margin-bottom: 70px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    height: 0;
    width: 100%;
    padding-bottom: 89%;
    position: relative;
  }
`;

const StoryImg = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  background-color: black;
  margin-bottom: 70px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0;
  }
`;
