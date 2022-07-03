import {createClient} from '@supabase/supabase-js';
import * as dotenv from 'dotenv';


// get the keys from VITE (svelte-kit's way of handing env variables)
const supabaseUrl = process.env.SVELTE_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.SVELTE_APP_SUPABASE_ANON_KEY;



export const supabase = createClient(supabaseUrl, supabaseAnonKey)