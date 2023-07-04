import '@/styles/globals.css'
import Layout from '@/components/layout/default-layout'

import { AuthProvider } from '@/hooks/use-auth'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>page</Layout>)

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
}
