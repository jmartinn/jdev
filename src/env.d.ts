declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_SANITY_DATASET: string;
      SANITY_API_TOKEN: string;
      SANITY_PREVIEW_SECRET: string;
      SANITY_STUDIO_REVALIDATE_SECRET: string;
      TWITTER_API_KEY: string;
    }
  }
}

export {}
