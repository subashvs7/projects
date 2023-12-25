
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eanlyvuyhxkzfkkomoar.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbmx5dnV5aHhremZra29tb2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMzIzMjUsImV4cCI6MjAxODcwODMyNX0.q67Mzm2YrcifxUilzd0nv1H5dsZ893y6rHgTZlwxRFE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;