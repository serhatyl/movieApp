import {useContext} from 'react';
import LayoutContext from '../contexts/Layout/LayoutContext';

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error('useMLayout must be used within a LayoutProvider');
  return context;
};
