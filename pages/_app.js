import '@/styles/globals.sass'
import { AuthContextProvider } from '@/contexts/AuthContext'

import Layout from '@/components/layout/default-layout'
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <AuthContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </AuthContextProvider>
  )
}
