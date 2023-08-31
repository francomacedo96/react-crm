import { useNavigate, Form } from "react-router-dom"
import Formulario from "../components/Forumulario"

export async function action({ request }) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  //validacion 
  const errores = []

  if (Object.values(datos).includes("")) {
    errores.push("todos los cambios son obligatorios")
  }

  // retornar
  if (Object.keys(errores).length) {
    console.log("si hay errores")
  }

  return (

    <>
      {
        /*
        console.log(datos),
        console.log(errores)
        */
      }
    </>

  )

}

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
        <Form
          method="post"
        >

          <Formulario />

          <input type="submit" value="registrar cliente" className="mt-5 w-full bg-blue-800 p-3 text-white text-lg uppercase font-bold" />
        </Form>
      </div>

    </>


  )
}

export default NuevoCliente
