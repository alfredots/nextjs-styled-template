import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { getTheme, GlobalStyles, inter } from 'styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme()}>
      <Head>
        <title>TWDNEXT</title>
        <meta
          name="description"
          content="A simple project start to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles fontNext={inter} />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
