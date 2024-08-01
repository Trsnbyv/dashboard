import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-green-300 py-[20px]">
      <ul className="flex justify-center gap-[30px]">
        <li>
            <NavLink className={'font-bold text-[20px] text-black'} to={'/'}>Pokemons</NavLink>
        </li>
        <li>
            <NavLink className={'font-bold text-[20px] text-black'} to={'/saved'}>Saved</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
