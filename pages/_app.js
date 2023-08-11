import '@/styles/globals.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'
import { CartCountContextProvider } from '@/contexts/CartCountContext'
import { CartDataContextProvider } from '@/contexts/CartDataContext'
import { WannaBuyDataContextProvider } from '@/contexts/WannaBuyDataContext'
import Layout from '@/components/layout/default-layout'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <AuthContextProvider>
      <CartCountContextProvider>
        <CartDataContextProvider>
          <WannaBuyDataContextProvider>
            {getLayout(<Component {...pageProps} />)}
          </WannaBuyDataContextProvider>
        </CartDataContextProvider>
      </CartCountContextProvider>
    </AuthContextProvider>
  )
}
