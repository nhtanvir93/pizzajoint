import Header from './components/Header';
import RouterProvider from './components/RouterProvider';

export default function App() {
  return (
    <div className='container'>
      <Header/>
      <div className="content">
        <RouterProvider />
      </div>
    </div>
  )
}