import NavBar from "./components/navbar";
import Products from "./pages/products";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <div className="flex justify-center dark:bg-slate-500 min-h-screen ">
        <Products />
      </div>
    </QueryClientProvider>
  );
}

export default App;
