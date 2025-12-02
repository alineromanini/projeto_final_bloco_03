import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-red-500 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Farmacia Dobrasil | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="">
              <LinkedinLogoIcon size={36} />
            </a>
            <a href="">
              <InstagramLogoIcon size={36} />
            </a>
            <a href="">
              <FacebookLogoIcon size={36} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer