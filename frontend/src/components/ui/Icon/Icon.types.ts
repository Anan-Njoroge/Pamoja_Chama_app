import type { StyleProp, ViewStyle } from 'react-native';
import type { ColorKey } from '@/theme';

export type IconSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';

export type IconTone =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'muted';

export type IconName =
  // Navigation
  | 'dashboard'
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
  | 'payment'
  | 'loan'
  | 'savings'

  // Members
  | 'member-add'
  | 'member-remove'
  | 'members'

  // Files
  | 'folder'
  | 'document'
  | 'statement'
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
  | 'streak'
  | 'trending-up'
  | 'trending-down'

  // Communication
  | 'notification'
  | 'message'
  | 'mail'
  | 'settings';

export interface AppIconProps {
  name: IconName;

  size?: IconSize;

  color?: ColorKey;

  tone?: IconTone;

  strokeWidth?: number;

  style?: StyleProp<ViewStyle>;

  onPress?: () => void;

  accessibilityLabel?: string;
}