import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <IconWrapper><Icon id={'chevron-down'} strokeWidth={2} size={22} /></IconWrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <SelectText>{displayedValue}</SelectText>
    </SelectWrapper>
  );
};

const SelectText = styled.div`
  display: block;
  padding: 12px 16px;
  padding-right: 52px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 22px;
  height: 22px;
  right: 12px;
`;

const SelectElement = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SelectWrapper = styled.div`
  position: relative;
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font: 1em roboto, sans-serif;
  border-radius: 8px;
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default Select;
