// if login page then do not load this component
import { useRouter } from "next/router";
import { hideForLogin } from "../../utils/helper";
import Link from "next/link";
import { useAppContext } from "../../context/state";

export default function Header() {
  const router = useRouter();
  const { leftNav, setLeftNav } = useAppContext();
  if (hideForLogin(router)) return <></>;
  return (
    <header className="gds-app-layout__top gds-nav__top gds-nav__auto-hide">
      <button
        className="gds-nav__menu gds-nav__auto-hide"
        onClick={() => setLeftNav(!leftNav)}
      ></button>
      <p>{leftNav ? "True" : "False"}</p>
      <Link href="/">
        <a className="gds-nav__logo"></a>
      </Link>
    </header>
  );
}
