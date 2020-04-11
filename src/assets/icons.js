import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const VegIcon = (props) => {
  const color = props.veg ? '#4caf50' : '#c62828';
  return (
    <SvgIcon
      {...props}
      style={{width: '19', height: '19'}}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="19px"
        height="19px"
        rx="4"
        fill="white"
        stroke={props.outlined ? `${color}` : 'none'}
      />
      <circle cx="9.5" cy="9.5" r="4.5" fill={color} />
    </SvgIcon>
  );
};

export const StarIcon = (props) => (
  <SvgIcon viewBox="0 0 17 17" {...props}>
    <path
      fill={props.color ? props.color : '#FBD92A'}
      fillRule="evenodd"
      d="M9.635 3.446l-3.27-.009L5.332.26C5.282.1 5.147-.006 4.984 0a.361.361 0 0 0-.343.266l-.966 3.171-3.31.009a.361.361 0 0 0-.346.262c-.05.16 0 .327.13.426l2.59 2.002-1.016 3.365a.386.386 0 0 0 .134.425c.065.049.14.074.214.074a.35.35 0 0 0 .212-.072l2.73-2.017 2.705 2.015a.345.345 0 0 0 .426 0 .386.386 0 0 0 .134-.425L7.261 6.136l2.59-2.001c.129-.1.18-.267.13-.427a.361.361 0 0 0-.346-.262z"
      clipRule="evenodd"
    />
  </SvgIcon>
);
