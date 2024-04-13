import { css, keyframes, createGlobalStyle } from "styled-components";
import PretendardR from "../fonts/Pretendard-Regular.otf";
import PretendardB from "../fonts/Pretendard-Bold.otf";
import mainFont from "../fonts/main-font.ttf";
import reset from "styled-reset";

const layoutCssProps = css`
  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .layout {
    width: 100%;
    min-width: 320px;
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#eecbcb, #f8c5c5, #ffc5c5);
  }
`;

const fontFaceCssProps = css`
  @font-face {
    font-family: "PretendardR";
    src: local("PretendardR"), local("PretendardR");
    font-style: normal;
    src: url(${PretendardR}) format("opentype");
  }

  @font-face {
    font-family: "PretendardB";
    src: local("PretendardB"), local("PretendardB");
    font-style: normal;
    src: url(${PretendardB}) format("opentype");
  }

  @font-face {
    font-family: "mainFont";
    src: local("mainFont"), local("mainFont");
    font-style: normal;
    src: url(${mainFont}) format("truetype");
  }

  body {
    font-family: "PretendardR", sans-serif;
    color: #333;
  }
`;

export const quoteCssProps = css`
  position: relative;

  &:before {
    font-family: Georgia, serif;
    content: "“";
    position: absolute;
    top: -10px;
    left: -25px;
    font-size: 2.5em;
    color: rgba(0, 0, 0, 0.9);
  }

  &:after {
    font-family: Georgia, serif;
    content: "”";
    position: absolute;
    top: -10px;
    right: -25px;
    font-size: 2.5em;
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const typing = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 50%;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${layoutCssProps}
    ${fontFaceCssProps}
`;

export default GlobalStyle;
