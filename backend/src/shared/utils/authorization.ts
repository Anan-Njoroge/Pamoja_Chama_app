import { supabase } from '@/config/database';

export async function getUserRole(
  userId: string,
) {

  const { data, error } =
    await supabase
      .from('profiles')
      .select('default_role')
      .eq('id', userId)
      .single();

  if (error || !data) {

    return null;

  }

  return data.default_role;

}