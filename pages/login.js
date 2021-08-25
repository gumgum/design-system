import Link from "next/link";

import {
  Row,
  FormGroup,
  FormGroupLabel,
  LayoutContainer,
  LoginForm,
  TextInput,
  Checkbox,
  Button,
} from "gumdrops";
export default function Login() {
  return (
    <LayoutContainer>
      <Row className="-m-t-4">
        <LoginForm
          auth="username"
          capText="Publisher Center"
          //   logoText="Publisher Center"
          //   onSubmit={this._login}
          //   recoveryFn={this._goToRecovery}
          recoveryText="Trouble signing in?"
        >
          <FormGroup className="-m-b-1">
            <FormGroupLabel text="username" />
            <TextInput name="username" type="text" placeholder="username" />
          </FormGroup>
          <FormGroup className="-m-b-2">
            <FormGroupLabel text="Password" />
            <TextInput
              name="password"
              type="password"
              placeholder="password123"
            />
          </FormGroup>
          <FormGroup className="-m-b-2">
            <Checkbox name="staySignedIn" label="Stay signed in" />
          </FormGroup>
          <Link href="/">
            <a className="gds-button gds-button--primary gds-button--block">
              Login
            </a>
          </Link>
        </LoginForm>
      </Row>
    </LayoutContainer>
  );
}
