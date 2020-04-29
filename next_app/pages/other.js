import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout header="Other" title="Other page.">
    <p>This is Other page</p>
    <hr />
      <Link href="/">
        <a>&lt;&lt; Back to Index page</a>
      </Link>
  </Layout>
)
