## holoApp

#### Web Site
https://holo-app.vercel.app

#### Zennで作成方法を書いてます。 (VTuberアプリケーション開発の基本　基礎から始めるアプリケーション開発のステップ)
https://zenn.dev/eternaleight/books/fedd5f1ce2f9fc



<a href="https://holo-app.vercel.app" target="_blank" rel=”noopener”><img src="https://user-images.githubusercontent.com/96198088/214283904-4ec943e7-58c3-4b35-8cfa-afbe9a250546.png" alt="holo-app" /></a>

- [Next.js](https://nextjs.org/) - The React Framework for Production Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

<a href="https://holo-app.vercel.app" target="_blank" rel=”noopener”><img src="https://user-images.githubusercontent.com/96198088/214283941-fae3ee90-a7f7-44f6-bfe7-c6c3e07c0f91.png" alt="holo-app" width="50%" /></a>
<a href="https://holo-app.vercel.app" target="_blank" rel=”noopener”><img src="https://user-images.githubusercontent.com/96198088/214284033-a14d6fb6-9422-45d5-9c77-b4b083cb809f.png" alt="holo-app" width="45%" /></a>



- [Preline](https://preline.co/) - Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.
 
## Project structure
```
.
├── README.md                      # プロジェクトの説明やドキュメンテーション
├── components                     # Reactコンポーネントが格納されているディレクトリ
│   ├── atoms                      # 小さな再利用可能なコンポーネント
│   └── layouts                    # 大きなコンポーネントやページのレイアウト
├── lib                            # プロジェクトで使用される外部ライブラリや関数を含むディレクトリ
│   └── gtag.ts                    # GoogleAnalyticsの設定
├── next-env.d.ts                  # Next.jsのTypeScript型の定義
├── next.config.js                 # Next.jsの設定
├── package.json                   # プロジェクトの依存関係やスクリプトが含まれている。
├── pages                          # Next.jsのページコンポーネントが格納されているディレクトリ
│   ├── _app.tsx                   # 全てのページで共通のレイアウトや設定を定義
│   └── index.tsx                  # ホームページのコンポーネント
├── postcss.config.js              # PostCSSの設定
├── prettier.config.js             # Prettierの設定
├── public                         # 静的ファイルが格納されているディレクトリ
├── styles                         # スタイルシートを配置するディレクトリ
│   └── globals.css                # グローバルCSSファイル
├── tailwind.config.js             # TailwindCSSの設定
├── tsconfig.json                  # TypeScriptの設定
├── utils                          # ユーティリティ関数が含まれているディレクトリ
│   └── util.ts                    # 表示するチャンネルの判定をする関数ファイル
└── yarn.lock                      # Yarnパッケージマネージャが生成する依存関係のロックファイル
```
