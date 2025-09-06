import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

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
          This is my personal blog. Here, I publish content related to my research field. 
          Following the wisdom that the best way of understanding any topic is by explaining it.
        </p>

        <p>
          <Link href="/blog">Read my first blog post →</Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
