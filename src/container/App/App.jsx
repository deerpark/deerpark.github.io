import { RecoilRoot } from 'recoil'
import Contents from '../Layout/Contents'
import Layout from '../Layout/Layout'

const App = () => (
  <RecoilRoot>
    <Layout>
      <Contents />
    </Layout>
  </RecoilRoot>
)

export default App
