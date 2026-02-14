import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Card Component
 * 
 * A versatile card component for displaying content in a consistent container.
 * Supports hover effects, clickable cards, and various padding sizes.
 */

export interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
}

const Card = ({
  children,
  className = '',
  padding = 'md',
  hover = false,
  border = true,
  shadow = 'sm',
  to,
  href,
  onClick,
}: CardProps) => {
  // Base styles
  const baseStyles = 'bg-surface rounded-lg transition-all duration-base';

  // Padding styles
  const paddingStyles: Record<string, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  // Border styles
  const borderStyles = border ? 'border border-border' : '';

  // Shadow styles
  const shadowStyles: Record<string, string> = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  // Hover styles
  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';

  // Combined styles
  const combinedStyles = `${baseStyles} ${paddingStyles[padding]} ${borderStyles} ${shadowStyles[shadow]} ${hoverStyles} ${className}`;

  // If it's a link card
  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // If it's an external link card
  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  // If it's a clickable card
  if (onClick) {
    return (
      <div className={combinedStyles} onClick={onClick} role="button" tabIndex={0}>
        {children}
      </div>
    );
  }

  // Regular card
  return <div className={combinedStyles}>{children}</div>;
};

export default Card;
