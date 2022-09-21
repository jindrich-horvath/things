import {createContext} from "react";

export const ThingsContext = createContext(null);

const THINGS = [
  {
    happy: true,
    wrong: 6,
    id: "1"
  },
  {
    happy: false,
    wrong: 1,
    id: "2"
  },
  {
    happy: false,
    wrong: 8,
    id: "3"
  }
]

export function ThingsProvider({ children }) {
  const value = {
    getById: (id) =>  THINGS.find(th => th.id === id),
    getAll: () => THINGS
  };

  return <ThingsContext.Provider value={value}>
    {children}
  </ThingsContext.Provider>;
}

export default ThingsProvider;
