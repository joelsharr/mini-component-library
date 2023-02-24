/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadiusOutside": "4px",
    "--borderRadiusInside": "4px",
    "--height": "8px",
  },
  medium: {
    "--borderRadiusOutside": "4px",
    "--borderRadiusInside": "4px",
    "--height": "12px",
  },
  large: {
    "--borderRadiusOutside": "8px",
    "--borderRadiusInside": "4px",
    "--height": "24px",
    "--padding": "4px",
  }
};

const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size];
  let radiusInner = 0;
  if (size === 'large') {
    radiusInner = Math.max(0, parseInt(styles["--borderRadiusOutside"]) - (366 - (value / 100) * 362));
  } else {
    radiusInner = Math.max(0, parseInt(styles["--borderRadiusOutside"]) - (370 - (value / 100) * 370));
  }
  styles["--borderRadiusInsideRight"] = radiusInner + "px";

  return (
    <ProgressWrapper aria-valuenow={value} max={100} value={value} style={styles}>Progress Bar</ProgressWrapper>
  )
};

const ProgressWrapper = styled.progress`

  &[value] {
    -webkit-appearance: none;

    width: 370px;
    height: var(--height);
    border-radius: var(--borderRadiusOutside);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

    ::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      border-radius: var(--borderRadiusOutside);
      padding: var(--padding);
    };
    ::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: var(--borderRadiusInside) var(--borderRadiusInsideRight) var(--borderRadiusInsideRight) var(--borderRadiusInside);
    };
  }
`


export default ProgressBar;
