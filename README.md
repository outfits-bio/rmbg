# Remove Background (rmbg)
Technology that removes the background of images using the [inspyrenet 2022](https://github.com/plemeri/InSPyReNet) model ported to a node package.

## How to use?
1. Install our [bun](https://bun.sh/) (fast runtime with built-in typescript support) i prefer using.
2. Install packages i prefer [pnpm](https://pnpm.io/) so `pnpm install`.
3. Upload images in the /images directory.
4. Run either by `pnpm run dev` or `bun run`.
5. For support, questions or else join our [Discord](https://discord.com/invite/f4KEs5TVz2).

## Dependencies
- [transparent-background](https://www.npmjs.com/package/transparent-background) by [@makidoll](https://github.com/makidoll) - used to remove the background of images.
- [fs](https://github.com/npm/fs) - used to write the data in .json files.
- [path](https://www.npmjs.com/package/path) - used to find paths easily.