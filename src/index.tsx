import cn from 'classnames';
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import './index.css';

export interface ScrollShadowProps {
  size?: number;
  threshold?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function ScrollShadow({
  size = 30,
  threshold = 100,
  children,
  className,
  style,
}: ScrollShadowProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const updateShadow = useCallback(() => {
    if (!rootRef.current || !topRef.current || !bottomRef.current) return;
    topRef.current.style.height =
      Math.min((rootRef.current.scrollTop / threshold) * size, size) + 'px';
    bottomRef.current.style.height =
      Math.min(
        ((rootRef.current.scrollHeight -
          rootRef.current.clientHeight -
          rootRef.current.scrollTop) /
          threshold) *
          size,
        size,
      ) + 'px';
  }, []);

  useEffect(() => {
    updateShadow();
  }, []);

  return (
    <div
      ref={rootRef}
      onScroll={updateShadow}
      className={cn('react-scroll-shadow-pro', className)}
      style={{ ...style, '--size': size } as CSSProperties}
    >
      <div className="react-scroll-shadow-pro-top">
        <div ref={topRef} className="react-scroll-shadow-pro-top-shadow"></div>
      </div>
      <div className="react-scroll-shadow-pro-content">{children}</div>
      <div className="react-scroll-shadow-pro-bottom">
        <div
          ref={bottomRef}
          className="react-scroll-shadow-pro-bottom-shadow"
        ></div>
      </div>
    </div>
  );
}
