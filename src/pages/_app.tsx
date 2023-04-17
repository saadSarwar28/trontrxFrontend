import type {AppProps} from 'next/app'
import Layout from '@/components/Layout'
import {useState, useEffect} from 'react'
import GlobalStyles from '@/styles/Global'
import {ThemeProvider} from 'styled-components'
import {LightTheme} from '@/styles/themes/LightTheme'
import {DarkTheme} from '@/styles/themes/DarkTheme'
import {wrapper} from '@/store/store';


function App({Component, pageProps}: AppProps) {
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
        <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
            <GlobalStyles/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App);
