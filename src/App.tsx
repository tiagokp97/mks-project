import Header from "./components/header"
import GlobalStyles from './styles/global'
import ProductsList from "./components/productList.tsx"
import Footer from "./components/footer"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <ProductsList />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Footer />
    </div>
  )
}

export default App
