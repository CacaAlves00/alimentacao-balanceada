import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import store from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  
  return <Provider store={store}>
    <Head>
      <title>Alimentação balanceada</title>
      <meta name="description" content="Alimentação Balanceada: quiz e arraste-e-solte" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/apple.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <div className='app'>
      <Component {...pageProps} />
    </div>
  </Provider>
}