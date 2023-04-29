import { useQuery } from 'react-query';

async function fetchPropertiesData() {
  const response = await fetch('https://modern-realestate-api.onrender.com/api/properties');
  return response.json();
}

export const usePropertiesData = () => {
  const { isLoading, error, data: propertiesData } = useQuery('properties', fetchPropertiesData);
  return { isLoading, error, propertiesData };
};
