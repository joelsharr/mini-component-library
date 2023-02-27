import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  "small": {
    "--borderWidth": 1 + "px",
    "--fontSize": (14/16) + "rem",
    "--paddingLeft": 24 + "px",
  },
  "large": {
    "--borderWidth": 2 + "px",
    "--fontSize": (18/16) + "rem",
    "--paddingLeft": 36 + "px",
  },
};

const iconSizes = {
  "small": {
    "size": 16,
    "stroke": 1,
  },
  "large": {
    "size": 20,
    "stroke": 2,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  const iconSize = iconSizes[size];
  
  return (
      <>
        <VisuallyHidden><label for="textInput">{label}</label></VisuallyHidden>
        <Wrapper style={{"--width": width + "px", ...styles}} id="textInput">
          <TextInput type={"text"} placeholder={placeholder}></TextInput>
          <IconWrapper>
            <Icon 
              id={icon} 
              size={iconSize.size} 
              strokeWidth={iconSize.stroke}
            />
          </IconWrapper>
        </Wrapper>
      </>
    );
};

const Wrapper = styled.div`
  width: var(--width);
  position: relative;
  color: ${COLORS.gray700};
`;

const TextInput = styled.input`
width: 100%;
height: ${24/16}rem;
border-width: 0 0 var(--borderWidth) 0;
border-color: ${COLORS.black};
font-size: var(--fontSize);
font: var(--fontSize) roboto, sans-serif;
font-weight: 700;
padding-left: var(--paddingLeft);
color: inherit;

&::placeholder {
  color: ${COLORS.gray500};
  font-weight: 400;
}

&:focus {
  outline-offset: 2px;
}

&:hover {
  color: ${COLORS.black};
}
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: max-content;
  height: max-content;
  margin: auto;
  left: 2px;
  color: inherit;
  pointer-events: none;
  padding-bottom: 2px;

  ${TextInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
