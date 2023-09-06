import { useRouteError } from "react-router-dom";


export default function ErrorPage( ) {

    const error = useRouteError()
    console.log(error)

    return (

        <div className="space-y-8">
            <h1 className="text-center font-extrabold text-6xl mt-20 text-blue-900">CRM - Clientes</h1>

            <h1 className="text-center"> Hay un error </h1>

            <h1 className="text-center"> {error.statusText || error.message} </h1>

        </div>

    )
}
