/* eslint-disable import/no-anonymous-default-export */
import { useSearchParams } from 'react-router-dom';

export default () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParams = (params) => {
    const currentParams = Object.fromEntries(searchParams.entries());

    const updatedParams = { ...currentParams, ...params };

    setSearchParams(updatedParams);
  };

  return [searchParams, updateQueryParams];
};
