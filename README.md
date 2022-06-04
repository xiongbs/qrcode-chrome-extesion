# qrcode-chrome-extesion

# start

```bash
# clone repository
git clone https://github.com/xiongbs/qrcode-chrome-extesion.git

# install dependency
pnpm install

# dev
pnpm dev

#build 
pnpm build

```

# change adapter

> change the csp.adpter.js to custom your adapter，

# to chrome extension

* chrome://extensions/
* 打开开发者模式
* 加载已解压的扩展程序
* 点击更新，可以工作了

# 以下式svelte 开发流程操作，可以参照[`svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte)
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
