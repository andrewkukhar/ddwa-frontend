// src/context/user-context.tsx
import { createContext, Dispatch, SetStateAction } from "react";

interface UserContextInterface {
  user: null,
  setUser: Dispatch<SetStateAction<null>>,
}

const UserContext = createContext<UserContextInterface>({
  user: null,
  setUser: () => {},
});

export default UserContext;
