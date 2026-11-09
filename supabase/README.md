# Supabase

1. Make a Supabase project.
2. Copy `.env.example` to `.env`. Add the Project URL and publishable key from **Project Settings → API**.
3. Paste `migrations/20261103000000_initial_schema.sql` into the Supabase SQL Editor and run it.
4. Restart `npm run dev`.

Signup and login use Supabase Auth. The SQL makes a sample `students` table that anyone can read. Do not use the secret/service-role key in this app.
