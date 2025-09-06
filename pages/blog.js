import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>My Blog</title>
      </Head>

      <main>
        <h1>My First Blog Post</h1>
        <p>
          Welcome to my very first blog post! 🚀 <br />
          This is where I’ll be sharing thoughts, tutorials, and updates.
        </p>

        <p>
          <Link href="/">← Back to Home</Link>
        </p>
      </main>
    </div>
  )
}
