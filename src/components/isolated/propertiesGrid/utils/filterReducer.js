import { UPDATE_FILTER, FILL_PROPERTIES_ARRAY, FILTER_PROPERTIES_ARRAY } from './types';

/* eslint-disable consistent-return */
export function filterReducer(state, action) {
  if (action.type === UPDATE_FILTER) {
    return {
      ...state,
      currentFilter: action.payload.filter,
    };
  }

  if (action.type === FILL_PROPERTIES_ARRAY) {
    return {
      ...state,
      propertiesArr: action.payload.propertiesData,
      filterArr: action.payload.propertiesData,
    };
  }

  if (action.type === FILTER_PROPERTIES_ARRAY) {
    const { propertiesArr, currentFilter } = state;
    let tempPropertiesArr = propertiesArr;

    if (currentFilter === 'all') {
      return {
        ...state,
        filterArr: propertiesArr,
      };
    }

    // Filter array
    tempPropertiesArr = tempPropertiesArr.filter(propertie => propertie.status === currentFilter);

    return {
      ...state,
      filterArr: tempPropertiesArr,
    };
  }
}
