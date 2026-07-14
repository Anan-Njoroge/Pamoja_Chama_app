import type {
    AvatarSize,
  } from '@/components/ui';
  
  export interface AvatarExample {
    name: string;
    size: AvatarSize;
    online?: boolean;
  }
  
  export const AVATAR_EXAMPLES: AvatarExample[] = [
    {
      name: 'John Mwangi',
      size: 'xs',
    },
  
    {
      name: 'Mary Wanjiku',
      size: 'sm',
    },
  
    {
      name: 'Alice Kamau',
      size: 'md',
    },
  
    {
      name: 'Brian Otieno',
      size: 'lg',
    },
  
    {
      name: 'Grace Njeri',
      size: 'xl',
    },
  ];
  
  export const ONLINE_AVATARS: AvatarExample[] = [
    {
      name: 'John Mwangi',
      size: 'md',
      online: true,
    },
  
    {
      name: 'Mary Wanjiku',
      size: 'md',
      online: true,
    },
  
    {
      name: 'Alice Kamau',
      size: 'md',
      online: true,
    },
  ];