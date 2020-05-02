import Link from 'next/link'
import Layout from '../components/Layout'
import Counter from '../components/Counter'

export default () => (
  <Layout header="Next" title="Top page.">
    <Counter />
    <hr />
    <div>
      <Link href="/other">
        <a>Go to Other page &gt;&gt;</a>
      </Link>
    </div>
  </Layout>
)
