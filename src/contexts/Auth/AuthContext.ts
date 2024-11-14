import { createContext } from "react";
import { AuthProps } from "./AuthProps";

const DefaultAuthProps: AuthProps = {} as AuthProps;

const AuthContext = createContext<AuthProps>(DefaultAuthProps);

export default AuthContext;
