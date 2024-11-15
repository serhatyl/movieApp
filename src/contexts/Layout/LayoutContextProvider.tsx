import React, {useState} from 'react';
import AuthContext from './LayoutContext';
import {LayoutProps} from './LayoutProps';

interface Props {
  children: React.ReactNode;
}

const LayoutContextProvider: React.FC<Props> = ({children}) => {
  const setShowSearch = (showSearch: boolean) => {
    setLayoutProps((oldState) => ({...oldState, showSearch}));
  };

  const setShowFavourites = (showFavourites: boolean) => {
    setLayoutProps((oldState) => ({...oldState, showFavourites}));
  };

  const setTitle = (title: string) => {
    if (title) setLayoutProps((oldState) => ({...oldState, title}));
  };

  const toggleLoader = (showLoader: boolean) => {
    setLayoutProps((oldState) => ({...oldState, showLoader}));
  };

  const [layoutProps, setLayoutProps] = useState<LayoutProps>({
    showFavourites: false,
    showSearch: false,
    showLoader: false,
    title: 'Movie App',
    setShowFavourites,
    setShowSearch,
    toggleLoader,
    setTitle,
  });

  return <AuthContext.Provider value={layoutProps}>{children}</AuthContext.Provider>;
};

export default LayoutContextProvider;
