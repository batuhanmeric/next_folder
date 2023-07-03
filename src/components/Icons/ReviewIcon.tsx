import { IIcon } from '@/interfaces/Icons/icons.interface';

export default function ReviewIcon({ width = 48, height = 48, color = '#D62631' }: IIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 0H12C5.376 0 0 5.35468 0 11.958V26.3172V28.7184C0 35.3217 5.376 40.6763 12 40.6763H15.6C16.248 40.6763 17.112 41.1086 17.52 41.6368L21.12 46.4152C22.704 48.5283 25.296 48.5283 26.88 46.4152L30.48 41.6368C30.936 41.0365 31.656 40.6763 32.4 40.6763H36C42.624 40.6763 48 35.3217 48 28.7184V11.958C48 5.35468 42.624 0 36 0ZM14.4 24.012C13.056 24.012 12 22.9315 12 21.6108C12 20.2901 13.08 19.2096 14.4 19.2096C15.72 19.2096 16.8 20.2901 16.8 21.6108C16.8 22.9315 15.744 24.012 14.4 24.012ZM24 24.012C22.656 24.012 21.6 22.9315 21.6 21.6108C21.6 20.2901 22.68 19.2096 24 19.2096C25.32 19.2096 26.4 20.2901 26.4 21.6108C26.4 22.9315 25.344 24.012 24 24.012ZM33.6 24.012C32.256 24.012 31.2 22.9315 31.2 21.6108C31.2 20.2901 32.28 19.2096 33.6 19.2096C34.92 19.2096 36 20.2901 36 21.6108C36 22.9315 34.944 24.012 33.6 24.012Z"
        fill={color}
      />
    </svg>
  );
}