import styled from 'styled-components';
import { respondTo } from '../../../styles/helpers';

export const StyledSection = styled.section`
  ${respondTo.xl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`}
`;
