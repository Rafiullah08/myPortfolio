import styled from "styled-components";

const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 700;
`;

const HomeLink = styled.a`
  color: ${({ theme }) => theme.primaryText};
  font-weight: 600;
  font-size: 18px;
`;

const NotFound = () => (
  <Page>
    <Title>Page not found</Title>
    <HomeLink href="/">Back to home</HomeLink>
  </Page>
);

export default NotFound;
