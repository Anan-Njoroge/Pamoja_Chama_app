/**
 * ============================================================================
 * AppIcon Component
 * ============================================================================
 *
 * PURPOSE
 * -------
 * AppIcon is the ONLY component responsible for rendering icons
 * throughout the Pamoja Chama application.
 *
 * Instead of importing icons directly from lucide-react-native
 * everywhere in the application, we centralize them here.
 *
 * BENEFITS
 * --------
 * ✓ Consistent icon sizes
 * ✓ Consistent colours
 * ✓ One place to change icon libraries in the future
 * ✓ Semantic icon names ("home", "record", "ledger")
 *   instead of depending on Lucide's internal names.
 *
 * EXAMPLES
 * --------
 *
 * <AppIcon name="phone" />
 *
 * <AppIcon
 *   name="review"
 *   size="lg"
 *   color="primary"
 * />
 *
 * ============================================================================
 */

import React from 'react';

import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BookOpenText,
  Calendar,
  ChartColumn,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleX,
  ClipboardCheck,
  Coins,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  FolderOpen,
  History,
  House,
  Lock,
  MoreVertical,
  Phone,
  Plus,
  Receipt,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  UserMinus,
  UserPlus,
  UserRound,
  Users,
  Wallet,
  WalletCards,
  type LucideIcon,
} from 'lucide-react-native';

import { Colors, ColorKey } from '@/theme';

/**
 * ============================================================================
 * Icon Sizes
 * ============================================================================
 *
 * These are semantic sizes used throughout the application.
 * Components should use these values rather than raw numbers.
 */
export type IconSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

/**
 * ============================================================================
 * Icon Names
 * ============================================================================
 *
 * IMPORTANT
 * ---------
 * These are APPLICATION icon names, not Lucide icon names.
 *
 * For example:
 *
 * "home"
 * instead of
 * "House"
 *
 * This abstraction means we can replace the underlying icon library
 * later without changing the rest of the application.
 */
export type IconName =
  | 'home'
  | 'history'
  | 'group'
  | 'profile'

  | 'review'
  | 'record'
  | 'ledger'

  | 'phone'
  | 'lock'
  | 'eye'
  | 'eye-off'

  | 'search'
  | 'calendar'
  | 'settings'

  | 'plus'

  | 'notification'

  | 'wallet'
  | 'coins'
  | 'credit-card'
  | 'receipt'

  | 'member-add'
  | 'member-remove'

  | 'folder'
  | 'document'

  | 'success'
  | 'warning'
  | 'error'

  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-left'
  | 'chevron-right'

  | 'trending-up'
  | 'trending-down'

  | 'chart'

  | 'more';

/**
 * ============================================================================
 * Component Props
 * ============================================================================
 */
export interface AppIconProps {
  /**
   * Semantic icon name.
   */
  name: IconName;

  /**
   * Theme icon size.
   *
   * Default: "md"
   */
  size?: IconSize;

  /**
   * Theme colour.
   *
   * Must exist inside Colors.ts
   */
  color?: ColorKey;

  /**
   * Lucide stroke width.
   *
   * Default: 2
   */
  strokeWidth?: number;
}

/**
 * ============================================================================
 * Icon Mapping
 * ============================================================================
 *
 * Maps application icon names to Lucide icons.
 */
const ICON_MAP: Record<IconName, LucideIcon> = {
  home: House,
  history: History,
  group: Users,
  profile: UserRound,

  review: ClipboardCheck,
  record: WalletCards,
  ledger: BookOpenText,

  phone: Phone,
  lock: Lock,
  eye: Eye,
  'eye-off': EyeOff,

  search: Search,
  calendar: Calendar,
  settings: Settings,

  plus: Plus,

  notification: Bell,

  wallet: Wallet,
  coins: Coins,
  'credit-card': CreditCard,
  receipt: Receipt,

  'member-add': UserPlus,
  'member-remove': UserMinus,

  folder: FolderOpen,
  document: FileText,

  success: CheckCircle2,
  warning: CircleAlert,
  error: CircleX,

  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,

  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,

  'trending-up': TrendingUp,
  'trending-down': TrendingDown,

  chart: ChartColumn,

  more: MoreVertical,
};

/**
 * ============================================================================
 * Icon Sizes (Pixels)
 * ============================================================================
 *
 * Converts semantic sizes into actual pixel values.
 */
const ICON_SIZES: Record<IconSize, number> = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
};

/**
 * ============================================================================
 * AppIcon
 * ============================================================================
 *
 * Renders a Lucide icon using the application's semantic icon names,
 * theme colours and standardised sizes.
 */
export function AppIcon({
  name,
  size = 'md',
  color = 'textPrimary',
  strokeWidth = 2,
}: AppIconProps) {
  const Icon = ICON_MAP[name];

  /**
   * Safety fallback.
   *
   * This should never happen because TypeScript ensures `name`
   * is a valid IconName, but this protects against unexpected
   * runtime values.
   */
  if (!Icon) {
    return null;
  }

  return (
    <Icon
      size={ICON_SIZES[size]}
      color={Colors[color]}
      strokeWidth={strokeWidth}
    />
  );
}