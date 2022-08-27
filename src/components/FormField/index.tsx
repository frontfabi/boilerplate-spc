import { Text } from "components";
import { FormFieldProps } from "types/FormField.types";

import { StyledFormField } from "./styles";

const FormField = ({
  children,
  label,
  status = "default",
  helperText,
}: FormFieldProps) => {
  return (
    <StyledFormField>
      {label && (
        <Text color={status} weight={2}>
          {label}
        </Text>
      )}
      {children}
      {helperText && (
        <Text color={status} weight={1} lineHeight={1}>
          {helperText}
        </Text>
      )}
    </StyledFormField>
  );
};

export { FormField };
