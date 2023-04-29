import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PlaceholderLoading from 'react-placeholder-loading';
import Error from '../../reusable/error/Error';
import { StyledH1 } from '../../../styles/reusable/typography';
import { StyledMapWrapper, StyledOverlay, StyledTitleWrapper, StyledCloseBtn } from './styles';
import { usePropertiesMap } from './usePropertiesMap';
import { attributionText, icon, apiKey } from './utils';

const PropertiesMap = () => {
  const { isLoading, error, properties, animationControls, toggleMapAnim, zoomLevel } =
    usePropertiesMap();

  if (isLoading) {
    return (
      <StyledMapWrapper>
        <PlaceholderLoading shape='rect' width='100%' height='100%' />
      </StyledMapWrapper>
    );
  }

  if (error) {
    return (
      <StyledMapWrapper className='wrapper'>
        <Error />
      </StyledMapWrapper>
    );
  }

  return (
    <StyledMapWrapper animate={animationControls.map}>
      <MapContainer
        center={[-34.59245773155005, -58.407329324609385]}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoom={zoomLevel}
      >
        <TileLayer attribution={attributionText} url={apiKey} />

        {properties.map(propertie => (
          <Marker
            key={propertie.id}
            position={propertie.coordinates}
            icon={icon}
            alt='icono marcador'
          >
            <Popup style={{ fontFamily: 'var(--font)' }}>{propertie.content}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <StyledOverlay animate={animationControls.overlay} onClick={() => toggleMapAnim(true)}>
        <StyledTitleWrapper className='wrapper' animate={animationControls.title}>
          <StyledH1 light>Propiedades</StyledH1>
        </StyledTitleWrapper>
      </StyledOverlay>

      <StyledCloseBtn
        initial={{ y: '-45px' }}
        animate={animationControls.closeBtn}
        onClick={() => toggleMapAnim(false)}
      >
        Cerrar
      </StyledCloseBtn>
    </StyledMapWrapper>
  );
};

export default PropertiesMap;
