import styled from 'styled-components';
import theme from './theme';
const { colors, fontSizes, fonts } = theme;

//show more button at bottom
const Button = styled.button`
  color: ${colors.darkGrey};
  background-color: ${colors.beige2};
  border: 1px solid ${colors.darkGrey};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.sm};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.darkGrey};
    color: ${colors.red};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
