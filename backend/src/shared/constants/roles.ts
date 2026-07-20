export const ROLES = {

    MEMBER: 'member',
  
    TREASURER: 'treasurer',
  
    ADMIN: 'admin',
  
  } as const;
  
  export type Role =
    typeof ROLES[keyof typeof ROLES];