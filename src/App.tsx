import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import ListaCategorias from './components/listacategorias/ListaCategorias'
import FormCategoria from './components/formcategoria/FormCategoria'
import DeleteCategoria from './components/deletecategoria/DeleteCategoria'
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos'
import FormProduto from './components/produtos/formproduto/FormProduto'
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProduto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className="min-h-[80vh]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

            <Route path='/categorias' element={<ListaCategorias />} />
            <Route path='/deletarcategoria/:id' element={<DeleteCategoria />} />
            <Route path='/cadastrarcategoria' element={<FormCategoria />} />
            <Route path='/editarcategoria/:id' element={<FormCategoria />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App