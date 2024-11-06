import Hero from '../component/Hero';
import HomeCards from '../component/HomeCard';
import Joblistings from '../component/Joblistings';
import ViewAllJobs from '../component/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <Joblistings  isHome= {true}/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage