import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-white dark:bg-black text-white dark:text-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
