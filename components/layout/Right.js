// if login page then do not load this component
import { useRouter } from "next/router";
import { hideForLogin } from "../../utils/helper";

export default function Right({ children }) {
  const router = useRouter();
  if (hideForLogin(router)) return <></>;
  return <aside className="gds-app-layout__right">{children}</aside>;
}
