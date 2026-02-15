# Supabase Setup Guide

## Local Development Setup

### 1. Install Docker
Supabase requires Docker to run locally. Install Docker Desktop from https://www.docker.com/products/docker-desktop

### 2. Start Supabase Locally
```bash
npm run supabase:start
```

This will:
- Start the Supabase local development environment
- Create and run PostgreSQL database container
- Set up Auth, Realtime, and Vector services

### 3. Access Local Supabase Studio
After starting, open: http://localhost:54323

- **Email**: supabase
- **Password**: password (default)

### 4. Create .env.local for Development
Copy `.env.example` to `.env.local` and fill in the local Supabase credentials:

```bash
cp .env.example .env.local
```

The credentials will be printed when you run `npm run supabase:start`

### 5. Run Migrations
```bash
npm run supabase:migrate
```

Or reset the database with fresh migrations:
```bash
npm run supabase:reset
```

## Database Schema

**Tables:**
- `users` - User profiles and KYC status
- `loans` - Loan applications and history
- `repayments` - Repayment schedules and history
- `waitlist` - Email waitlist for early access
- `transactions` - All financial transactions

**Features:**
- Row Level Security (RLS) for data privacy
- Auto-generated timestamps (created_at, updated_at)
- Automatic indexes for performance
- PostgreSQL extensions for UUID and crypto functions

## Production Deployment

### 1. Create Supabase Project
- Visit https://app.supabase.com
- Create a new project
- Note the Project URL and Anon Key

### 2. Set Environment Variables
```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Deploy Migrations
```bash
supabase db push --project-ref <project-id>
```

### 4. Stop Local Supabase (when dev is complete)
```bash
npm run supabase:stop
```

## Useful Commands

```bash
npm run supabase:start    # Start local Supabase
npm run supabase:stop     # Stop local Supabase
npm run supabase:reset    # Reset database with migrations
npm run supabase:migrate  # Run pending migrations
```

## RLS Policies

Row Level Security is enabled to ensure:
- Users can only see their own loan and transaction data
- Admin/service role can access all data
- Waitlist has open read access for analytics

## Adding New Migrations

Create new migration files in `supabase/migrations/`:
```
supabase/migrations/[TIMESTAMP]_[description].sql
```

Example:
```sql
-- supabase/migrations/20260220_add_documents_table.sql
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  file_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Then run `npm run supabase:reset` to apply the new migration locally.

## Documentation

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
