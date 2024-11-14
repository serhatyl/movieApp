import { createContext } from "react";
import { LayoutProps } from "./LayoutProps";

const DefaultLayoutProps: LayoutProps = {} as LayoutProps;

const LayoutContext = createContext<LayoutProps>(DefaultLayoutProps);

export default LayoutContext;
