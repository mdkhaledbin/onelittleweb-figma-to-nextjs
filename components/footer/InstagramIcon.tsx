interface IconProps {
  className?: string;
  size?: number;
}

export const InstagramIcon = ({ className, size = 20 }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="2.2"
      y="2.2"
      width="15.6"
      height="15.6"
      rx="4.2"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="14.7" cy="5.5" r="1" fill="currentColor" />
  </svg>
);
