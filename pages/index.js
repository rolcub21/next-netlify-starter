import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title=" Welcome to My Blog " />
        <p className="description">
          This is my very first site deployed with <strong>Next.js</strong> and <strong>Netlify</strong>. 🚀
        </p>
        <p>
          I’ll be posting updates here soon — stay tuned!
        </p>
      </main>

      <Footer />
    </div>
  )
}
