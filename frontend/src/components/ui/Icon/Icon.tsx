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
 * Instead of importing icons directly from `lucide-react-native`
 * everywhere in the application, we centralize them here.
 *
 * This gives us:
 *
 * ✓ Consistent icon sizes
 * ✓ Consistent colours
 * ✓ Semantic icon names
 * ✓ Easier maintenance
 * ✓ One place to replace the icon library later
 *
 * ----------------------------------------------------------------------------
 * DESIGN PRINCIPLE
 * ----------------------------------------------------------------------------
 *
 * Components should NEVER depend directly on Lucide icon names.
 *
 * Good:
 *
 *     <AppIcon name="record" />
 *
 * Bad:
 *
 *     <WalletCards />
 *
 * The application should describe WHAT the icon represents,
 * not WHICH icon library provides it.
 *
 * ============================================================================
 */

import React from 'react';

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Banknote,
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
  Copy,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  FileText,
  FolderOpen,
  History,
  House,
  Info,
  Landmark,
  Lock,
  Menu,
  Minus,
  MoreVertical,
  Paperclip,
  Pencil,
  Phone,
  Plus,
  Receipt,
  Save,
  Search,
  Settings,
  Share2,
  SlidersHorizontal,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  UserMinus,
  UserPlus,
  UserRound,
  Users,
  Wallet,
  WalletCards,
  X,
} from 'lucide-react-native';

import type {
  LucideIcon,
} from 'lucide-react-native';

import { Colors } from '@/theme';

import type {
  ColorKey,
} from '@/theme';


/**
 * ============================================================================
 * Icon Sizes
 * ============================================================================
 *
 * These are semantic sizes used throughout the application.
 *
 * Instead of:
 *
 * size={21}
 *
 * we write:
 *
 * size="md"
 *
 * This ensures consistency throughout the application.
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
 *
 * These are APPLICATION icon names.
 *
 * They are intentionally independent from Lucide's names.
 *
 * If we ever replace Lucide,
 * only ICON_MAP changes.
 */

export type IconName =

  // Navigation
  | 'home'
  | 'history'
  | 'group'
  | 'profile'

  | 'review'
  | 'record'
  | 'ledger'

  | 'back'
  | 'forward'

  | 'arrow-left'
  | 'arrow-right'

  | 'chevron-left'
  | 'chevron-right'

  | 'menu'
  | 'more'

  // Search
  | 'search'
  | 'filter'
  | 'sort'
  | 'close'

  // Forms
  | 'phone'
  | 'lock'
  | 'calendar'
  | 'eye'
  | 'eye-off'

  | 'edit'
  | 'save'

  // Finance
  | 'wallet'
  | 'coins'
  | 'credit-card'
  | 'receipt'
  | 'money'
  | 'bank'

  // Members
  | 'member-add'
  | 'member-remove'

  // Files
  | 'folder'
  | 'document'
  | 'download'
  | 'upload'
  | 'attachment'

  // Status
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

  // Actions
  | 'plus'
  | 'minus'
  | 'delete'
  | 'share'
  | 'copy'

  // Analytics
  | 'chart'
  | 'trending-up'
  | 'trending-down'

  // Notifications
  | 'notification'
  | 'settings';

/**
 * ============================================================================
 * Icon Tone
 * ============================================================================
 *
 * Instead of asking:
 *
 * "What colour should this icon be?"
 *
 * we ask:
 *
 * "What does this icon represent?"
 *
 * Example:
 *
 * tone="warning"
 *
 * instead of
 *
 * color="pending"
 *
 * This separates DESIGN from BUSINESS LOGIC.
 */

export type IconTone =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'muted';

/**
 * ============================================================================
 * Component Props
 * ============================================================================
 */

export interface AppIconProps {

  /**
   * Semantic application icon.
   */
  name: IconName;

  /**
   * Semantic size.
   *
   * Default: md
   */
  size?: IconSize;

  /**
   * Explicit colour.
   *
   * NOTE:
   * -----
   * If both colour and tone are supplied,
   * colour always wins.
   *
   * In most situations,
   * prefer using tone.
   */
  color?: ColorKey;

  /**
   * Semantic colour.
   */
  tone?: IconTone;

  /**
   * Lucide stroke width.
   */
  strokeWidth?: number;
}

/**
 * ============================================================================
 * Icon Mapping
 * ============================================================================
 *
 * This is the ONLY place that knows
 * about Lucide.
 */

const ICON_MAP: Record<IconName, LucideIcon> = {

  // Navigation

  home: House,
  history: History,
  group: Users,
  profile: UserRound,

  review: ClipboardCheck,
  record: WalletCards,
  ledger: BookOpenText,

  back: ArrowLeft,
  forward: ArrowRight,

  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,

  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,

  menu: Menu,
  more: MoreVertical,

  // Search

  search: Search,
  filter: SlidersHorizontal,
  sort: ArrowUpDown,
  close: X,

  // Forms

  phone: Phone,
  lock: Lock,
  calendar: Calendar,

  eye: Eye,
  'eye-off': EyeOff,

  edit: Pencil,
  save: Save,

  // Finance

  wallet: Wallet,
  coins: Coins,
  'credit-card': CreditCard,
  receipt: Receipt,

  money: Banknote,
  bank: Landmark,

  // Members

  'member-add': UserPlus,
  'member-remove': UserMinus,

  // Files

  folder: FolderOpen,
  document: FileText,

  download: Download,
  upload: Upload,

  attachment: Paperclip,

  // Status

  success: CheckCircle2,
  warning: CircleAlert,
  error: CircleX,
  info: Info,

  // Actions

  plus: Plus,
  minus: Minus,

  delete: Trash2,

  share: Share2,
  copy: Copy,

  // Analytics

  chart: ChartColumn,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,

  // Notifications

  notification: Bell,
  settings: Settings,
};

/**
 * ============================================================================
 * Icon Size Map
 * ============================================================================
 *
 * Converts semantic sizes into actual pixel values.
 *
 * Components should never hardcode pixel values.
 *
 * Instead of:
 *
 *    <AppIcon size={24} />
 *
 * use:
 *
 *    <AppIcon size="lg" />
 *
 * If the design system changes in the future,
 * we only update these values.
 * ============================================================================
 */

const ICON_SIZE_MAP = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

/**
 * ============================================================================
 * Icon Tone Map
 * ============================================================================
 *
 * Maps semantic tones to theme colours.
 *
 * The goal is to express intent instead of implementation.
 *
 * Example:
 *
 *    tone="success"
 *
 * instead of
 *
 *    color="success"
 *
 * This keeps the UI consistent and allows us to change
 * the application's colour palette in one place.
 * ============================================================================
 */

const ICON_TONE_MAP: Record<IconTone, ColorKey> = {
  default: 'textPrimary',

  primary: 'primary',

  success: 'success',

  warning: 'pending',

  danger: 'danger',

  muted: 'textPlaceholder',
};

/**
 * ============================================================================
 * AppIcon
 * ============================================================================
 *
 * AppIcon is a lightweight wrapper around Lucide icons.
 *
 * Responsibilities
 * ----------------
 *
 * ✓ Render the correct icon
 *
 * ✓ Apply semantic sizing
 *
 * ✓ Apply semantic colouring
 *
 * ✓ Keep the rest of the application independent from Lucide
 *
 * ============================================================================
 */

export function AppIcon({
  name,

  size = 'md',

  color,

  tone = 'default',

  strokeWidth = 2,
}: AppIconProps) {

  /**
   * Retrieve the matching Lucide icon.
   */
  const Icon = ICON_MAP[name];

  /**
   * This should never happen because
   * TypeScript guarantees valid icon names.
   *
   * The guard simply protects against unexpected
   * runtime values.
   */
  if (!Icon) {
    return null;
  }

  /**
   * Resolve the icon colour.
   *
   * Priority
   * --------
   *
   * 1. Explicit colour
   * 2. Semantic tone
   */

  const resolvedColor = color
    ? Colors[color]
    : Colors[ICON_TONE_MAP[tone]];

  return (
    <Icon
      size={ICON_SIZE_MAP[size]}
      color={resolvedColor}
      strokeWidth={strokeWidth}
    />
  );
}

/**
 * Helps React DevTools display a friendly component name.
 */

AppIcon.displayName = 'AppIcon';

/**
 * ============================================================================
 * Exports
 * ============================================================================
 */

export type {
  ColorKey,
};