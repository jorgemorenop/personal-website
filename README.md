# A web portfolio

This repository contains the source code implemented in order to develop my personal website: [jorgemoreno.co](https://www.jorgemoreno.co/)

It uses React, Typescript, Next.js and Tailwind. I'm not very used to some of these technologies so it may be some room for improvement. Ping me with any suggestions 🙂! 


## About the project

### Deploy changes
1. Build static files for website:
    ```bash
    npm run build-s3
   ```
2. Deploy with CDK:
    ```bash
   cd cdk && cdk deploy --profile <AWS_PROFILE> 
   ```

### How was it created
This project was created from a sample project that shows the usage of Next.js with TypeScript.

```bash
npx create-next-app --example with-typescript with-typescript-app
```

Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.


### Other project configuration
- Tailwind: https://dev.to/ethand91/creating-a-react-app-with-typescript-tailwind-support-18b8
