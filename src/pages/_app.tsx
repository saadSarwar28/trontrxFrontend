import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { useState, useEffect } from 'react'
import GlobalStyles from '@/styles/Global'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from '@/styles/themes/LightTheme'
import { wrapper } from '@/store/store';
import { CONTENT } from '@/content/content';
import { LoaderStyled } from '@/styles/pages/components/Loader.styled'



function App({ Component, pageProps }: AppProps) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 100)
    }, [])

    if (!loaded) {

    }

    // styles
    const LogoSection = {
        display: 'flex',
        marginTop: '10px'
    }

    return (
        <ThemeProvider theme={LightTheme}>
            <GlobalStyles />
            <Layout>
                {loaded ? (
                    <Component {...pageProps} />
                ) : (
                    // Loader
                    <>
                        <LoaderStyled style={LogoSection}>
                            <div>
                                <img src="/assets/images/navbar/logo.svg" width="74" height="76" alt="..." />
                            </div>
                            <div>
                                <h1>{CONTENT.navbar.navTitle}</h1>
                                <p>{CONTENT.navbar.navDesc}</p>
                            </div>
                        </LoaderStyled>
                        <div style={{
                            width: '200px',
                            margin: '100px auto 0',
                            textAlign: 'center'
                        }}>
                            <img src="/assets/images/loader-icon.gif" width="100" height="100" alt="..." />
                        </div>
                    </>
                )}
            </Layout>
        </ThemeProvider >
    )
}

export default wrapper.withRedux(App);
