import aboutImg from '../assets/images/about.jpg';
import propertiesImg from '../assets/images/properties.jpg';
import homeImg from '../assets/images/home.png';

const aboutBox = {
  title: 'About Moderne',
  text: 'About us',
  imgSrc: aboutImg,
  pathTo: '/about',
};

const propertiesBox = {
  title: 'Properties',
  text: 'Elegi tu propiedad',
  imgSrc: propertiesImg,
  pathTo: '/properties',
};

const homeBox = {
  title: 'Home',
  text: 'Know us',
  imgSrc: homeImg,
  pathTo: '/',
};

export { aboutBox, propertiesBox, homeBox };
