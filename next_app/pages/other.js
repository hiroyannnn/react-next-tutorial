import Link from 'next/link'
import Layout from '../components/Layout'
import Counter from '../components/Counter'

export default () => (
  <Layout header="Other" title="Other page.">
    <Counter />
    <hr />
      <Link href="/">
        <a>&lt;&lt; Back to Index page</a>
      </Link>
  </Layout>
)
