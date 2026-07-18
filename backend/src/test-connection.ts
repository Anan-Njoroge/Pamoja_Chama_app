/**
 * ============================================================================
 * Test Supabase Connection
 * ============================================================================
 */

import { supabase } from './config/supabase';

async function testConnection() {
  console.log('Testing Supabase connection...\n');

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .limit(1);

  if (error) {
    console.error('❌ Connection failed');
    console.error(error);
    return;
  }

  console.log('✅ Connected successfully');
  console.log(data);
}

testConnection();