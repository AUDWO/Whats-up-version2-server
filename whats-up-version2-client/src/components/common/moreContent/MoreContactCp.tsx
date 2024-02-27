import styled from "styled-components";

const MoreContactCp = () => {
  return (
    <ContactContainer>
      <ContactsWrapper>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
        <Contact></Contact>
      </ContactsWrapper>
    </ContactContainer>
  );
};

export default MoreContactCp;

const ContactContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 560px;
`;

const Contact = styled.div`
  width: 80px;
  height: 35px;
  background-color: skyBlue;
  @media screen and (max-width: 470px) {
    width: 60px;
    height: 30px;
  }
`;
