import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from './about/About'
import Blogs from './blogs/Blogs'
import Contact from './contact/Contact'
import Login from './login/Login'
import PageNotFound from './notFound/PageNotFound'

// temporary
import SingleBlog from './singleBlog/SingleBlog'
import SingleJob from './singleJob/SingleJob'

function App() {
  return (
	<Router>
	  <Header />
	  <Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' exact component={About} />
		<Route path='/blogs' exact component={Blogs} />
		<Route path='/contact' exact component={Contact} />
		<Route path='/login' exact component={Login} />
		{/* temporary */}
		<Route path='/blog' exact component={SingleBlog} />
		<Route path='/job' exact component={SingleJob} />
		{/* page not found */}
		<Route path='/*' component={PageNotFound} />
	  </Switch>
	  <Footer />
	</Router>
  )
}

export default App
