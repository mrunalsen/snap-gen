import { useContext } from "react";

const FormContext = useContext();

export function useFormContext() {
  // Returns form context for Create form (NewForm.jsx) component
  return useContext(FormContext);
}

export default FormContext;