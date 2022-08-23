import { FormField } from 'components';
import { useState } from 'react';
import { InputProps } from 'types';
import { InputField, StyledInput, Wrapper } from './styles';
import { BsX, BsCheck2 } from 'react-icons/bs'
import { AiOutlineWarning } from "react-icons/ai";

const Input = ({ 
  disabled, 
  hasPassword,
  hasStatusIcon, 
  helperText, 
  id, 
  label, 
  onChange, 
  onFocus, 
  placeholder, 
  status = 'default', 
  value, 
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (value: string) => {
    setInputValue(value)
    onChange && onChange()
  }
  const showIcon = hasStatusIcon && (status === 'error' || status === 'success' || status === 'warning')
  const StatusIcon = status === 'success' ? BsCheck2 : status === 'warning' ? AiOutlineWarning : BsX
   return (
    <Wrapper status={status} disabled={disabled}>
      <FormField
        label={label}
        status={status}
        helperText={helperText}
      >
        <InputField status={status} disabled={disabled}>
          <StyledInput
            type={hasPassword ? 'password' : 'text'}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={onFocus}
            status={status}
          />
          {showIcon && <StatusIcon />}
        </InputField>
      </FormField>
    </Wrapper>
  );
};

export { Input };
