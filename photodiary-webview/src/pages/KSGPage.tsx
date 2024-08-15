import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
`;

const STitle = styled.h1`
  font-size: 16px;
  margin-top: 40px;
  font-weight: 700;
`;

const SImageContainer = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 600px;
`;

const KSGPage = () => {
  return (
    <SContainer>
      <STitle>다이어리</STitle>
      <SImageContainer></SImageContainer>
    </SContainer>
  );
};

export default KSGPage;
