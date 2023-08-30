import { AppProps } from 'next/app'
import Head from 'next/head'

import { inter } from '@styles/fonts'
import { GlobalStyles } from '@styles/global'
import { theme } from '@styles/theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
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
