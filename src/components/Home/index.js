import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
    </div>
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
