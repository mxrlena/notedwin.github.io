import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  margin: 0 auto 2rem;
  padding: 3rem 2.5rem 1rem 2.5rem;//padding between sections
  max-width: 60rem;
  background-color: #D9D8D6;
  -webkit-box-shadow: -13px -5px 50px 11px rgba(0,0,0,0.53); 
  box-shadow: -13px -5px 50px 11px rgba(0,0,0,0.53);

  ${media.tablet`
  padding: 3rem 1.5rem 2rem 1.5rem;
  margin: 0 auto 3rem;`};
`;

export default Section;
