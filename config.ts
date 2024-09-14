import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Export the environment variables
export const environments = {
  botToken: process.env.BOT_TOKEN,
};
