import styled from "styled-components";
import logo from "../../../images/logo.webp";

interface LogoProps {
  size?: string;
  position?: number;
  step?: number;
}

const Logo = ({ size, position, step }: LogoProps) => {
  const refinedSize = size ? size : "1";
  const refinedOpacity =
    step === 1 && position === 1
      ? 1
      : step === 2 && (position === 1 || position === 2)
      ? 1
      : step === 3
      ? 1
      : 0.5;

  return (
    <StyledLogo
      src={logo}
      alt="logo"
      size={refinedSize}
      opacity={refinedOpacity}
    />
  );
};

export default Logo;

const StyledLogo = styled.img<{ size: string; opacity: number }>`
  zoom: ${(props) => props.size};
  opacity: ${(props) => props.opacity};
  pointer-events: none;
  width: 50px;
  height: 125px;
  margin-top: 15px;
`;
