import { NavLink } from "react-router";

interface Iprops {
  width: number;
}
const Logo = ({ width }: Iprops) => {
  return (
    <NavLink title="logo" to={`/`} className="inline-flex" aria-label="Cruip">
      <img
        src={"https://blogsbackend.spikecode.net/website/img/logo.webp"}
        alt="logo"
        height={80}
        width={width}
        className="m-2"
      />
    </NavLink>
  );
};
export default Logo;
