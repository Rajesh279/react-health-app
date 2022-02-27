import { createContext, useContext, useState } from "react";
import { specializationConst } from "../Content";

export const appContext = createContext({
  specialization: specializationConst,
  selectedSpecializationTitle: null,
  getDoctorsBySpecialization: () => {},
  getSpecializationTitle: () => {},
});

export function AppContextProvider({ children }) {
  const [specialization, setSpecialization] = useState(specializationConst);
  const [selectedSpecializationTitle, setSelectedSpecializationTitle] = useState("");

  const getSpecializationTitle = (selectedSpecialization) => {
    setSelectedSpecializationTitle(selectedSpecialization);
  };
  
  return (
    <appContext.Provider
      value={{
        specialization,
        selectedSpecializationTitle,
        getSpecializationTitle,
      }}>
      {children}
    </appContext.Provider>
  );
}

export function useAppContext() {
  const {
    specialization,
    selectedSpecializationTitle,
    getSpecializationTitle,
  } = useContext(appContext);

  return {
    specialization,
    selectedSpecializationTitle,
    getSpecializationTitle,
  };
}
