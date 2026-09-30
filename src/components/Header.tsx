import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Header() {

    const {pathname} = useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header className={ isHome ? "bg-[url('/bg.jpg')] bg-cover bg-center" : "bg-slate-800"}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"
                            }>Inicio</NavLink>
                        <NavLink
                            to="/favoritos"
                            className= {({isActive}) =>
                                isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"
                            }>Favoritos</NavLink>
                    </nav>
                </div>

                { isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o ingredientes</label>

                            <input
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="bg-slate-100 p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Café"
                            />
                        </div>

                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>

                            <select
                                id="ingredient"
                                name="ingredient"
                                className="bg-slate-100 p-3 w-full rounded-lg focus:outline-none"
                            >
                                <option value="">-- Seleccione --</option>

                            </select>
                        </div>
                        
                        <input
                            type="submit"
                            value="Buscar recetas"
                            className="cursor-pointer bg-lime-800 hover:bg-lime-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
