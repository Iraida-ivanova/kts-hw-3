import React from 'react';

const SearchIcon: React.FC = () => {
  return (
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_7_793)">
        <path
          d="M9.04197 12.5C12.2625 12.5 14.8732 10.1495 14.8732 7.25C14.8732 4.35051 12.2625 2 9.04197 2C5.82146 2 3.21072 4.35051 3.21072 7.25C3.21072 10.1495 5.82146 12.5 9.04197 12.5Z"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.165 10.9624L16.5389 14"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_793">
          <rect x="0.989288" width="17.7714" height="16" rx="7" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(SearchIcon);
