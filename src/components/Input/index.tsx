import { FormField } from 'components';
import { useState } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import { BsCheck2, BsX } from 'react-icons/bs';
import { InputProps } from 'types';

import { InputField, StyledInput, Wrapper } from './styles';

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
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (value: string) => {
    setInputValue(value)
    ;(onChange != null) && onChange();
  };
  const showIcon =
    hasStatusIcon &&
    (status === 'error' || status === 'success' || status === 'warning');
  const StatusIcon =
    status === 'success' ?
      BsCheck2 :
      status === 'warning' ?
        AiOutlineWarning :
        BsX;
  return (
    <Wrapper status={status} disabled={disabled}>
      <FormField label={label} status={status} helperText={helperText}>
        <InputField status={status} disabled={disabled} role="group">
          <StyledInput
            type={hasPassword ? 'password' : 'text'}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={onFocus}
            status={status}
            role="textbox"
          />
          {showIcon && <StatusIcon role="img" aria-label={`Status: ${status}`} />}
        </InputField>
      </FormField>
    </Wrapper>
  );
};

export { Input };
