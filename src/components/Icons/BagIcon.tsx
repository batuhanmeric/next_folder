import { IIcon } from '@/interfaces/Icons/icons.interface';
import React from 'react';

export default function BagIcon({ width = 19, height = 20, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9184 4.47H14.1232C16.8152 4.47 19 6.72 19 9.47998V15C19 17.76 16.8152 20 14.1232 20H4.8768C2.1848 20 0 17.76 0 15V9.47998C0 6.72 2.1848 4.47 4.8768 4.47H5.08162C5.10113 3.27 5.55955 2.15 6.3886 1.31C7.22741 0.46 8.3003 0.03 9.5098 0C11.9286 0 13.8891 2 13.9184 4.47ZM7.41273 2.38C6.86653 2.94 6.56417 3.68 6.54466 4.47H12.4553C12.4261 2.83 11.1191 1.5 9.5098 1.5C8.7587 1.5 7.9784 1.81 7.41273 2.38ZM13.2064 8.31998C13.616 8.31998 13.9379 7.98 13.9379 7.57V6.41C13.9379 6 13.616 5.66 13.2064 5.66C12.8065 5.66 12.4748 6 12.4748 6.41V7.57C12.4748 7.98 12.8065 8.31998 13.2064 8.31998ZM6.43737 7.57C6.43737 7.98 6.1155 8.31998 5.70585 8.31998C5.30595 8.31998 4.97433 7.98 4.97433 7.57V6.41C4.97433 6 5.30595 5.66 5.70585 5.66C6.1155 5.66 6.43737 6 6.43737 6.41V7.57Z"
        fill={color}
      />
    </svg>
  );
}
