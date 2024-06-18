import { createClient } from '@supabase/supabase-js';
import './globals.css';

export const metadata = {
  title: 'App Router',
};

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const _supabase = createClient(supabaseUrl ?? '', supabaseKey ?? '');

export default function Page() {
  return <h1 className="border text-gray-500">App Router</h1>;
}
