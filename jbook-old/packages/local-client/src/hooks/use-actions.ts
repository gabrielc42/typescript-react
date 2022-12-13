import { actionCreators } from '../state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useMemo } from 'react';


export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};