import { styled, keyframes } from '@mui/system';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledApp = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AppLogo = styled('img')`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`;

const AppHeader = styled('header')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #000000;
  margin-right: 20px;
`;

const AppLink = styled('a')`
  color: #61dafb;
`;

export { StyledApp, AppLogo, AppHeader, AppLink };