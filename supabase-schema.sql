-- Supabase SQL Schema for SNowPrep
-- Run this in your Supabase SQL Editor (supabase.com/dashboard -> SQL Editor)

-- Create the user_data table
CREATE TABLE IF NOT EXISTS user_data (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
    progress JSONB DEFAULT '{}'::jsonb,
    notes JSONB DEFAULT '[]'::jsonb,
    quiz_history JSONB DEFAULT '[]'::jsonb,
    streak INTEGER DEFAULT 0,
    last_visit TEXT,
    daily_goals JSONB DEFAULT '[]'::jsonb,
    weekly_plan JSONB DEFAULT '{}'::jsonb,
    reminders JSONB DEFAULT '{"morning": false, "afternoon": false, "evening": false}'::jsonb,
    timer_state JSONB DEFAULT '{"sessionsToday": 0, "focusMinutesToday": 0}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_user_data_user_id ON user_data(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE user_data ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to only access their own data
CREATE POLICY "Users can view their own data" ON user_data
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own data" ON user_data
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own data" ON user_data
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own data" ON user_data
    FOR DELETE USING (auth.uid() = user_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to auto-update updated_at
CREATE TRIGGER update_user_data_updated_at
    BEFORE UPDATE ON user_data
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
