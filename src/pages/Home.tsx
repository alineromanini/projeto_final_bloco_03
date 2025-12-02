import ListaProdutos from "../components/produtos/listaprodutos/ListaProdutos"
import Carrossel from "../components/carrossel/Carrossel"


function Home() {
  return (
    <>
			<div className="mt-6 md:mt-0">
				<Carrossel />
			</div>
			<div className="py-2 md:py-0 md:mb-4">
				<ListaProdutos />
			</div>
		</>
	)
}

export default Home