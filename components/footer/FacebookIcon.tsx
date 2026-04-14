interface IconProps {
  className?: string;
  size?: number;
}

export const FacebookIcon = ({ className, size = 18 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 10 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M9.2 0.5H6.9C4.82 0.5 3.5 1.82 3.5 3.9V6.1H1.4V9H3.5V17.5H6.7V9H9L9.4 6.1H6.7V4.2C6.7 3.36 6.93 2.9 8.14 2.9H9.3V0.5H9.2Z"
      fill="currentColor"
    />
  </svg>
);
