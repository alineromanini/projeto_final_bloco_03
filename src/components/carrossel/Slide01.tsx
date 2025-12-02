import ModalProduto from "../produtos/modalprodutos/ModalProduto"

function Slide01() {
  return (
    <div
      className="flex justify-center items-center h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://ik.imagekit.io/5qjemq96e/farmacia/pngtree-pharmacy-drugstore-shop-interior-blur-background-image_15660282.jpg")'
      }}
    >
      <div className="w-full max-w-7xl h-full grid grid-cols-1 place-items-center text-purple-950">
        
        {/* COLUNA DO TEXTO */}
        <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
          <h1 className="text-3xl md:text-7xl font-bold">
            Farmácia Dobrasil
          </h1>
          <h2 className="text-lg md:text-xl">
            Aqui você encontra tudo para sua saúde e bem-estar!
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
