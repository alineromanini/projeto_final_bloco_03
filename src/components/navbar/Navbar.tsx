import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="w-full py-6 flex justify-center bg-sky-400 text-white">
      <div className="container flex justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src="https://ik.imagekit.io/5qjemq96e/farmacia/farmacia.png"
              alt="Logo farmacia" className='w-52' />
          </div>
        </Link>

        <div className="flex items-center gap-4.5 w-2/5">
          <input
            type="text"
            className='bg-white rounded-2xl border border-slate-700 text-black py-3 px-4 w-full'
            placeholder='Procurar'
          />

          <button className='rounded-lg py-2 px-3 cursor-pointer
            bg-cyan-400 border border-cyan-800 hover:bg-cyan-600 transition delay-2'>
            <MagnifyingGlassIcon size={24} color="#ffffff" />
          </button>
        </div>

        <div className="flex items-center font-bold text-lg gap-5.5">
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
          <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
          
        </div>

        <div className="flex items-center gap-4">
          <UserIcon size={36} color="#ffffff" />
          <ShoppingCartIcon size={36} color="#ffffff" />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar