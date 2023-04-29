import styled from 'styled-components';
import PlaceholderLoading from 'react-placeholder-loading';
import { StyledGrid } from '../styles';
import { fluidValues, respondTo } from '../../../../styles/helpers';

const GridSkeleton = () => {
  return (
    <StyledGrid className='wrapper'>
      <StyledSkeletonWrapper>
        <PlaceholderLoading shape='rect' width='100%' height='100%' />

        <StyledSkeletonLines>
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
        </StyledSkeletonLines>
      </StyledSkeletonWrapper>

      <StyledSkeletonWrapper>
        <PlaceholderLoading shape='rect' width='100%' height='100%' />

        <StyledSkeletonLines>
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
        </StyledSkeletonLines>
      </StyledSkeletonWrapper>

      <StyledSkeletonWrapper>
        <PlaceholderLoading shape='rect' width='100%' height='100%' />

        <StyledSkeletonLines>
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
        </StyledSkeletonLines>
      </StyledSkeletonWrapper>

      <StyledSkeletonWrapper>
        <PlaceholderLoading shape='rect' width='100%' height='100%' />

        <StyledSkeletonLines>
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
        </StyledSkeletonLines>
      </StyledSkeletonWrapper>

      <StyledSkeletonWrapper>
        <PlaceholderLoading shape='rect' width='100%' height='100%' />

        <StyledSkeletonLines>
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
          <PlaceholderLoading shape='rect' width='100%' height='10px' />
        </StyledSkeletonLines>
      </StyledSkeletonWrapper>
    </StyledGrid>
  );
};

// Styles
const StyledSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${fluidValues(280, 1200, 400, 600)};
`;

const StyledSkeletonLines = styled.div`
  margin-top: ${fluidValues(280, 1200, 24, 40)};

  & > * + * {
    margin-top: 1.5rem;
  }

  ${respondTo.xl`
     margin-top: 1rem;
     padding: 0 2rem;
  `}
`;

export default GridSkeleton;
