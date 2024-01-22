import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface ScrollShadowProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function ScrollShadow({
  children,
  className,
  style,
}: ScrollShadowProps) {
  return (
    <>
      {children}
      <div className={cn('react-scroll-shadow-pro', className)} style={style}>
        <div className="react-scroll-shadow-pro-top"></div>
        <div className="react-scroll-shadow-pro-bottom"></div>
      </div>
    </>
  );
}
