import Head from "next/head";
import { ThemeProvider } from 'styled-components';
import ColorPalette from '../src/styles/ColorPalette';
import GlobalStyles from '../src/styles/GlobalStyles';
import Classes from '../src/styles/Classes';
import { Header } from '../src/components/header/Header';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <title>My Animations</title>
            </Head>
            <ThemeProvider theme={ColorPalette}>
                <GlobalStyles />
                <Classes />
                <Header />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}