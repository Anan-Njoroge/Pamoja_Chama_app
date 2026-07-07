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
 * WHY?
 * ----
 * Instead of importing icons directly from lucide-react-native
 * everywhere in the application, we centralize them here.
 *
 * This means:
 *
 * ✓ Consistent sizing
 * ✓ Consistent colours
 * ✓ Easier maintenance
 * ✓ Easier library replacement
 *
 * Example:
 *
 * <AppIcon name="phone" />
 *
 * <AppIcon
 *    name="review"
 *    size="lg"
 *    color="primary"
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
  Clock3,
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

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/**
 * These names represent the application's features,
 * NOT Lucide's icon names.
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

interface AppIconProps {
  name: IconName;

  size?: IconSize;

  color?: ColorKey;

  strokeWidth?: number;
}

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

const ICON_SIZES = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export function AppIcon({
  name,
  size = 'md',
  color = 'textPrimary',
  strokeWidth = 2,
}: AppIconProps) {
  const Icon = ICON_MAP[name];

  return (
    <Icon
      size={ICON_SIZES[size]}
      color={Colors[color]}
      strokeWidth={strokeWidth}
    />
  );
}