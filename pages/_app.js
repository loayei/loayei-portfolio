import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";

const WEBSITE = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...pageProps} key = {router.route} />
            </Layout>
        </ChakraProvider>
    );
}

export default WEBSITE;