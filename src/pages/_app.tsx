import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'

import { Provider } from 'react-redux'
import store from '@/store/store'

import GlobalStyles from '@/styles/Global'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '@/styles/themes/LightTheme'
import { DarkTheme } from '@/styles/themes/DarkTheme'


export default function App({ Component, pageProps }: AppProps) {
    const [isLight, setIsLight] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 100)
    }, [])

    return (
        <Provider store={store}>
            <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
                <GlobalStyles />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    )
}
