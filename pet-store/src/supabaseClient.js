import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ggdtgfbigemeagnsrryb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZHRnZmJpZ2VtZWFnbnNycnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3NjUwOTksImV4cCI6MjA0NTM0MTA5OX0.APXDcVIVYeIGOSOd0s3zq6602rKOOpQu3BzkN7Jp0D8';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);