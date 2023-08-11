import { useContext } from "react";

const FormContext = useContext()

export function useFormContext() {
    return useContext(FormContext);
  }
  
  export default FormContext;