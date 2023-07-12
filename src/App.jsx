import ReactQueryFetchWithAxios from './ReactQueryFetchWithAxios'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
const queryClient = new QueryClient()

function App() {


  return (
    <>
      <QueryClientProvider client={queryClient}>
      <ReactQueryFetchWithAxios />
      </QueryClientProvider>
    </>
  )
}

export default App
