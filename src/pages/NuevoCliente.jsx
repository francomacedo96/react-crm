import { useNavigate } from "react-router-dom"
import Formulario from "../components/Forumulario"

function NuevoCliente() {

  const navigate = useNavigate()

  return (

    <>

      <h1 className="font-black text-4xl text-blue-900">Nuevo clientes</h1>
      <p className="mt-3">Llena todos los campos para registrar un cliente</p>

      <div className="flex justify-end">

        <button onClick={() => navigate(-1)} className="bg-blue-800 text-white px-3 py-1 font-bold uppercase">
          Volver
        </button>

      </div>


      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-15">
        <form>

          <Formulario />

          <input type="submit" value="registrar cliente" className="mt-5 w-full bg-blue-800 p-3 text-white text-lg uppercase font-bold" />
        </form>
      </div>

    </>


  )
}

export default NuevoCliente
