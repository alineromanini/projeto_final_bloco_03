import ModalProduto from "../produtos/modalprodutos/ModalProduto"

function Slide01() {
  return (
    <div
      className="flex justify-center items-center h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://ik.imagekit.io/5qjemq96e/livraria/abstrato-blur-lindo-shopping-center-de-shopping-center.jpg")'
      }}
    >
      <div className="w-full max-w-7xl h-full grid grid-cols-1 place-items-center text-purple-950">
        
        {/* COLUNA DO TEXTO */}
        <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
          <h1 className="text-3xl md:text-5xl font-bold">
            Seja bem vinde!
          </h1>
          <h2 className="text-lg md:text-xl">
            Aqui você encontra os melhores livros!
          </h2>

          <div className="hidden md:flex justify-center items-center py-8">
            <ModalProduto />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slide01
