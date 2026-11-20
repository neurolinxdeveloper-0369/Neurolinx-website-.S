import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
  className?: string;
  showHome?: boolean;
}

export function Breadcrumbs({
  items,
  dark = false,
  className = '',
  showHome = true,
}: BreadcrumbsProps) {
  const containerClasses = dark
    ? 'text-gray-300'
    : 'text-gray-500';

  const linkClasses = dark
    ? 'hover:text-white transition-colors duration-150'
    : 'hover:text-slate-900 transition-colors duration-150';

  const separatorClasses = dark
    ? 'w-3.5 h-3.5 text-gray-400 shrink-0'
    : 'w-3.5 h-3.5 text-gray-400 shrink-0';

  const currentClasses = dark
    ? 'text-white font-semibold'
    : 'text-brand-red font-semibold';

  return (
    <nav aria-label="Breadcrumbs" className={`flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs font-medium ${containerClasses} ${className}`}>
      {showHome && (
        <>
          <Link to="/" className={`inline-flex items-center gap-1 ${linkClasses}`}>
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className={separatorClasses} />
        </>
      )}

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast || !item.path) {
          return (
            <span
              key={`${item.label}-${index}`}
              className={`truncate max-w-[200px] sm:max-w-none ${currentClasses}`}
              aria-current="page"
            >
              {item.label}
            </span>
          );
        }

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            <Link to={item.path} className={linkClasses}>
              {item.label}
            </Link>
            <ChevronRight className={separatorClasses} />
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
