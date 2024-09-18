import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://bhcjyvizwfneloeaflab.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoY2p5dml6d2ZuZWxvZWFmbGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzkxMjUsImV4cCI6MjA0MjI1NTEyNX0.nLygWxMxCNCCu7YaELOv9Xlmy2Td8lZTeQH24NA7caE"
);

export default supabase;
