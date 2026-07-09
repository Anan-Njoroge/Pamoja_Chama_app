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
    Mail,
    Menu,
    MessageCircle,
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
  
  import type { LucideIcon } from 'lucide-react-native';
  
  import type {
    ColorKey,
  } from '@/theme';
  
  import type {
    IconName,
    IconSize,
    IconTone,
  } from './Icon.types';
  
  export const ICON_SIZE_MAP: Record<IconSize, number> = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 40,
  };
  
  export const ICON_TONE_MAP: Record<IconTone, ColorKey> = {
    default: 'textPrimary',
    primary: 'primary',
    success: 'success',
    warning: 'pending',
    danger: 'danger',
    muted: 'textPlaceholder',
  };
  
  export const ICON_MAP: Record<IconName, LucideIcon> = {
    // Navigation
    dashboard: House,
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
  
    payment: WalletCards,
    loan: CreditCard,
    savings: Wallet,
    statement: FileText,
  
    // Members
    'member-add': UserPlus,
    'member-remove': UserMinus,
    members: Users,
  
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
    streak: TrendingUp,
  
    // Communication
    notification: Bell,
    message: MessageCircle,
    mail: Mail,
  
    settings: Settings,
  };