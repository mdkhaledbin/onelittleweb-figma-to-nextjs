interface IconProps {
  className?: string;
  size?: number;
}

export const ArrowRightIcon = ({ className, size = 10 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={Math.round(size * 0.9)}
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 4.5H8.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M5.5 1.25L8.75 4.5L5.5 7.75"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
