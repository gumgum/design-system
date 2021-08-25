// if login page then do not load this component
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { hideForLogin } from "../../utils/helper";
import { useAppContext } from "../../context/state";

const navItems = [
  {
    title: "Reporting",
    url: "/home/dashboard",
    icon: "chart-bar",
  },
  {
    title: "Zones",
    url: "/zones",
    icon: "layer-group",
  },
  {
    title: "Global Blocks",
    url: "/global-blocks",
    icon: "ban",
  },
  {
    title: "Payments",
    url: "/payments",
    icon: "credit-card",
  },
  {
    title: "Account Settings",
    url: "/settings/user",
    icon: "user-cog",
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
        <a className="gds-nav__logo"></a>
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
      <div className="gds-nav__item--grow-0 -m-b-3">
        <Link href="/login">
          <a className="gds-nav__link">
            <i className={`fas  fa-sign-out-alt gds-nav__link-icon`} />
            <span className="gds-nav__link-text">Logout</span>
          </a>
        </Link>
      </div>

      {/* <ul className="gds-nav__icons gds-nav__item--grow-0">
        <li>
          <button className="gds-nav__icon">
            <i className="fas fa-search"></i>
          </button>
        </li>
        <li>
          <Link href="/settings">
            <a className=" gds-nav__icon">
              <i className="fas fa-user"></i>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a className=" gds-nav__icon">
              <i className="fas fa-sign-out-alt"></i>
            </a>
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}
