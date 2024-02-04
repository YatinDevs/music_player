## Music Player : Getting Started

Setting up the Project Repository :

    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/YatinDevs/music_player.git
    git push -u origin main

Initial Project Setup (Next-App) FrontEnd :

    npx create-next-app@latest

    Initializing project with template: app-tw

        Installing dependencies:

            - react
            - react-dom
            - next

        Installing devDependencies:

            - autoprefixer
            - postcss
            - tailwindcss
            - eslint
            - eslint-config-next

        Install Node modules :

        npm install

        First, run the development server:

            ```bash
            npm run dev
            # or
            yarn dev
            # or
            pnpm dev
            # or
            bun dev
            ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Hosting Repository on Vercel :

    Add new Project - (Vercel)
    Add github Account - (Vercel)
    Giving music_player Repository access - (github)
    Import Repository music_player - (Vercel)
    Deploy Repo music_player - (Vercel)

Components Structuring :

    Header
    Outlet
    Footer

    Here we need, Components for HomePage.(Nesting Accordingly)
      - MusicCardsList
        - MusicCard
      - MusicPlayer

API Setup for Fetching Data : Axios Interceptor

    Api is not Protected for MusicCardList here (no need).

    Creating Folder (for Axios Interceptor). apis
        - axios-instance

    npm i axios
