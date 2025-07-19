import { NavLink } from "react-router";

interface Iprops {
  width: number;
}
const Logo = ({ width }: Iprops) => {
  return (
    <NavLink title="logo" to={`/`} className="inline-flex" aria-label="Cruip">
      <img
        src={
          "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937901/logo_d1rdi5.png"
        }
        alt="logo"
        height={80}
        width={width}
        className="m-2"
      />
    </NavLink>
  );
};
export default Logo;
