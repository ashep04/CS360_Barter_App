import 'dotenv/config';

export default {
  expo: {
    name: "Barter Buddy",
    slug: "your-app",
    extra: {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME,
        DB_PORT: process.env.DB_PORT,
    },
    plugins: ['expo-secure-store'],
  },
};
