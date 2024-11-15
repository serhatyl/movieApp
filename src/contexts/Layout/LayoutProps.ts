/* eslint-disable no-unused-vars */
export interface LayoutProps {
  setShowSearch: (showSearch: boolean) => void;
  showSearch: boolean;
  setShowFavourites: (showFavourites: boolean) => void;
  showFavourites: boolean;
  setTitle: (title: string) => void;
  title: string;
  toggleLoader: (showLoader: boolean) => void;
  showLoader: boolean;
}
