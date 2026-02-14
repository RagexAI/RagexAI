import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * 
 * Variants:
 * - primary: Main CTA button with accent color
 * - secondary: Secondary actions with secondary color
 * - outline: Outlined button with border
 * - ghost: Minimal button with no background
 * 
 * Sizes:
 * - sm: Small button
 * - md: Medium button (default)
 * - lg: Large button
 * - xl: Extra large button
 */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
  href?: string;
  to?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  href,
  to,
  icon,
  iconPosition = 'right',
  loading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-base focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-sm hover:shadow-md',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-sm hover:shadow-md',
    outline: 'border-2 border-border text-heading hover:border-primary hover:text-primary hover:bg-primary/5 focus:ring-primary',
    ghost: 'text-heading hover:bg-surface hover:text-primary focus:ring-primary',
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-6 py-3.5 text-lg gap-2.5',
    xl: 'px-8 py-4 text-xl gap-3',
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Combined styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  // Content with icon
  const content = (
    <>
      {loading && (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !loading && <span>{icon}</span>}
    </>
  );

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  // Internal link
  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button className={combinedStyles} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
};

export default Button;
