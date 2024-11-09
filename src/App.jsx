import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import HomePage  from './pages/HomePage';
import MainLayout from '../Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import Jobpage, {jobLoader} from './pages/Jobpage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import JobListings from './component/JobListings';


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
  });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  const updateJob = async(job) => {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job),
      });
      return;
  }

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />} >
 <Route index element={<HomePage />} />
 <Route path='/jobs' element={<JobsPage />} />
 <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
 <Route path='/api/jobs' element={<JobListings />} />
 <Route path='/edit-job/:id' 
 element={<EditJobPage updateJobSubmit={updateJob}/>} 
 loader={jobLoader}
  />
 <Route path='/jobs/:id' 
 element={<Jobpage deleteJob={deleteJob}/>} 
 loader={jobLoader} 
 />
 <Route path='*' element={<NotFoundPage />} />
 
  </Route>
 ) );
  return <RouterProvider router={router} />
};

export default App;
