import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
    <hr />
      <Link href="/other">
        <a>Go to Other page &gt;&gt;</a>
      </Link>
  </Layout>
)
