import styled from "styled-components";
import { typing } from "../../styles/GlobalStyle";
import Logo from "../common/icons/Logo";

const Splash = () => {
  return (
    <Layout className="layout">
      <div className="splash_container">
        <LogoWrapper>
          <Logo />
          <Text>Hi, I'm chichi</Text>
        </LogoWrapper>
      </div>
    </Layout>
  );
};

export default Splash;

const Layout = styled.div`
  .splash_container {
    width: fit-content;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;

  img {
    opacity: 1;
  }
`;

export const Text = styled.span`
  position: absolute;
  text-align: center;
  bottom: 15%;
  left: 25%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 18px;
  animation: ${typing} forwards 2s;
  animation-timing-function: steps(20);
`;
