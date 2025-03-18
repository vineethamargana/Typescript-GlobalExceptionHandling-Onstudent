import { createClient } from "npm:@supabase/supabase-js";

const SUPABASE_URL = "https://rzqoscylrihabtvvummc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6cW9zY3lscmloYWJ0dnZ1bW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDA3NjEsImV4cCI6MjA1NTUxNjc2MX0.PzcfCUzZpE9v3-LJGVIXA0rX1-SauSmK1vyR-4Z5aiI";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log(SUPABASE_URL)
 
export default supabase;