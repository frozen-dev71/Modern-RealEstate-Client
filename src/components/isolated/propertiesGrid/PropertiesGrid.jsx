import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Error from '../../reusable/error/Error';
import Card from './card/Card';
import GridSkeleton from './gridSkeleton/GridSkeleton';
import { StyledWrapper, StyledGrid, StyledFiltersWrapper, StyledBtnFilter } from './styles';
import { usePropertiesGrid } from './usePropertiesGrid';
import { filters } from './utils/types';

const PropertiesGrid = () => {
  const { isLoading, error, properties, updateFilter } = usePropertiesGrid();

  if (isLoading) {
    return <GridSkeleton />;
  }

  if (error) {
    return (
      <section>
        <Error />
      </section>
    );
  }

  return (
    <StyledWrapper className='wrapper'>
      <StyledFiltersWrapper>
        {filters.map(filter => (
          <StyledBtnFilter
            type='button'
            key={uuidv4()}
            className={`btn ${properties.currentFilter === filter.type ? 'underline' : ''}`}
            onClick={() => updateFilter(filter.type)}
          >
            {filter.content}
          </StyledBtnFilter>
        ))}
      </StyledFiltersWrapper>

      <StyledGrid>
        <LayoutGroup id='cards'>
          <AnimatePresence>
            {properties.filterArr.map((propertie, index) => (
              <Card key={propertie.id} data={propertie} index={index} />
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </StyledGrid>
    </StyledWrapper>
  );
};

export default PropertiesGrid;
