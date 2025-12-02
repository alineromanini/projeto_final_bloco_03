import { Link } from "react-router-dom"


function Home() {
  return (
    <div className="flex justify-center bg-cyan-300 h-[80vh]">
      <div className="container grid grid-cols-2 py-4.5">
        <div className="flex flex-col justify-center items-center gap-6 text-black">
          <h1 className="text-6xl font-bold">Farmácia Dobrasil</h1>
          <p className="text-2xl font-semibold">Aqui você encontra tudo no precinho!</p>

            <Link to='/cadastrarcategoria' className='rounded py-2 w-1/3 cursor-pointer bg-indigo-800
              hover:bg-indigo-950 text-white flex justify-center transition delay-2'>
              Cadastrar Categoria
            </Link>
          
        </div>
        <img src="https://ik.imagekit.io/5qjemq96e/farmacia/home.png"
          className="w-2/3 max-w-96 m-auto" alt="Imagem principal da página home" />
      </div>
    </div>
  )
}

export default Home