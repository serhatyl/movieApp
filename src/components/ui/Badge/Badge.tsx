import React, {ReactNode} from 'react';

interface BadgeProps {
  children: ReactNode;
  position: 'left' | 'right';
  rounded?: boolean;
  clickable?: boolean;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Badge: React.FC<BadgeProps> = ({
  position,
  rounded,
  clickable,
  className = '',
  onClick,
  children,
}) => {
  const computedClassName = [
    'badge',
    className,
    position && `badge--${position}`,
    rounded ? 'badge--rounded' : '',
    clickable ? 'badge--clickable' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={computedClassName}
      onClick={(event) => {
        onClick && onClick(event);
      }}
    >
      {children}
    </div>
  );
};

export default Badge;
