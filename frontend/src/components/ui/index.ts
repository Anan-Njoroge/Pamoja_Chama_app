/**
 * ============================================================================
 * UI Component Library
 * ============================================================================
 *
 * PURPOSE
 * -------
 * This file acts as the public entry point for every reusable UI component
 * in the application.
 *
 * Instead of importing components from their individual folders:
 *
 * import { AppButton } from '@/components/ui/Button';
 * import { AppText } from '@/components/ui/Text';
 * import { AppCard } from '@/components/ui/Card';
 *
 * We can simply write:
 *
 * import {
 *   AppButton,
 *   AppText,
 *   AppCard,
 * } from '@/components/ui';
 *
 * BENEFITS
 * --------
 * ✓ Cleaner imports
 * ✓ Easier refactoring
 * ✓ Better autocomplete
 * ✓ Single public API for the UI library
 *
 * ============================================================================
 */

export * from './Avatar';
export * from './Badge';
export * from './Button';
export * from './Card';
export * from './Header';
export * from './Icon';
export * from './Input';
export * from './ListItem';
export * from './Screen';
export * from './SearchBar';
export * from './Surface';
export * from './Text';
export * from './EmptyState';
export * from './LoadingSpinner';
export * from './FloatingActionButton';
export * from './Toast';
export * from './Divider';