import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to cleanly merge Tailwind CSS classes with clsx conditionals.
 * Standard helper used by shadcn/ui and modern React component libraries.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
