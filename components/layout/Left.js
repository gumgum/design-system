// if login page then do not load this component
import Link from "next/link";
import { useRouter } from "next/router";
import { hideForLogin } from "../../utils/helper";
import { useAppContext } from "../../context/state";

const navItems = [
  {
    title: "Subatomic",
    url: "/subatomic",
    icon: "atom",
  },
  {
    title: "Atoms",
    url: "/atoms",
    icon: "bacterium",
  },
  {
    title: "Molecules",
    url: "/molecules",
    icon: "bacteria",
  },
  {
    title: "Organisms",
    url: "/organisms",
    icon: "dna",
  },
  {
    title: "Pages",
    url: "/pages",
    icon: "desktop",
  },
  {
    title: "Utilities",
    url: "/utilities",
    icon: "wrench",
  },
];

export default function Left() {
  const router = useRouter();
  const { leftNav, setLeftNav, leftNavCollapsed, setLeftNavCollapsed } =
    useAppContext();

  if (hideForLogin(router)) return <></>;

  return (
    <nav
      className={`gds-app-layout__left gds-nav__side ${
        leftNav ? "gds-app-layout__left--open" : ""
      }
    ${leftNavCollapsed ? "gds-nav__side--collapsed" : ""}
    `}
    >
      <div className="gds-nav__side--collapse-wrapper">
        <button
          onClick={() => setLeftNavCollapsed(!leftNavCollapsed)}
          className="gds-nav__side--collapse-button"
        ></button>
      </div>
      <div className="gds-nav__close-wrapper">
        <button
          className="gds-nav__close"
          onClick={() => setLeftNav(!leftNav)}
        ></button>
      </div>
      <Link href="/">
        <a className="gds-nav__logo" data-site-title="Publisher Manager"></a>
      </Link>

      <ul className="gds-nav__links">
        {navItems.map((item, i) => {
          return (
            <li key={i}>
              <Link href={item.url}>
                <a className="gds-nav__link">
                  <i className={`fas  fa-${item.icon} gds-nav__link-icon`} />
                  <span className="gds-nav__link-text">{item.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="gds-nav__icons gds-nav__item--grow-0">
        <li>
          <a
            href="https://github.com/gumgum/design-system"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <div className="gds-nav__item--grow-0 -m-b-3">
        <Link href="/login">
          <a className="gds-nav__link">
            <i className={`fas  fa-sign-out-alt gds-nav__link-icon`} />
            <span className="gds-nav__link-text">Logout</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
