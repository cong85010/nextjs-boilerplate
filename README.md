# Next.js Boilerplate

A feature-rich, customizable boilerplate for kickstarting your Next.js projects with best practices and a modern tech stack.

## Features

- **Next.js 15+**: Utilizing the latest features of Next.js, including the App Router for improved performance and developer experience.
- **TypeScript**: Full TypeScript support for type-safe code and enhanced developer productivity.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.
- **ESLint & Prettier**: Preconfigured linting and code formatting for consistent code style.
- **Husky & lint-staged**: Git hooks to ensure code quality before commits.

## Getting Started

Follow these steps to get your Next.js boilerplate up and running:

1. Clone the repository:

   ```
   git clone https://github.com/cong85010/nextjs-boilerplate.git
   ```

2. Navigate to the project directory:

   ```
   cd nextjs-boilerplate
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   - Copy the `.env.example` file to `.env.local`
   - Fill in the necessary environment variables

5. Run the development server:

   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
nextjs-boilerplate/
├── app/
│   ├── api/
│   ├── (routes)/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── (other components)
├── lib/
├── styles/
├── public/
├── tests/
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Runs ESLint
- `npm run format`: Formats the code with Prettier

## Customization

This boilerplate is designed to be a starting point. Feel free to modify and extend it to fit your project needs:

- Update `tailwind.config.ts` to customize your design tokens
- Modify `next.config.ts` for Next.js customizations
- Adjust `.eslintrc.json` and `.prettierrc` for code style preferences
- Extend `tsconfig.json` for TypeScript configuration

## Deployment

This project is ready to be deployed to Vercel with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-boilerplate)

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)

## Support

If you have any questions or need help, please open an issue or contact us at cong85010@gmail.com
