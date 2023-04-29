import { useReducer, useEffect } from "react";
import { filterReducer } from "./utils/filterReducer";
import {
  UPDATE_FILTER,
  FILL_PROPERTIES_ARRAY,
  FILTER_PROPERTIES_ARRAY,
} from "./utils/types";
import { usePropertiesData } from "../../../api/usePropertiesData";

export const usePropertiesGrid = () => {
  const { isLoading, error, propertiesData } = usePropertiesData();
  const [properties, dispatch] = useReducer(filterReducer, {
    propertiesArr: [],
    filterArr: [],
    currentFilter: "all",
  });

  // fill reducer state when properties data is ready
  useEffect(() => {
    if (isLoading || !propertiesData) return;

    dispatch({ type: FILL_PROPERTIES_ARRAY, payload: { propertiesData } });
  }, [isLoading, propertiesData]);

  // Filter properties when the filter changes
  useEffect(() => {
    dispatch({ type: FILTER_PROPERTIES_ARRAY });
  }, [properties.currentFilter]);

  const updateFilter = (filter) =>
    dispatch({ type: UPDATE_FILTER, payload: { filter } });

  return { isLoading, error, properties, updateFilter };
};
