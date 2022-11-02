import Link from 'next/link';

import {
    Row,
    FormGroup,
    FormGroupLabel,
    LayoutContainer,
    LoginForm,
    TextInput,
    Checkbox,
    Button,
} from 'gumdrops';
export default function Login() {
    return (
        <LayoutContainer style={{ minHeight: `calc(100vh - 100px)` }}>
            <Row className="-m-t-6">
                <LoginForm
                    auth="username"
                    capText="Design System"
                    logoText="Design"
                    //   onSubmit={this._login}
                    recoveryFn={() => alert('HELP')}
                    recoveryText="Forgot Password?">
                    <FormGroup className="-m-b-1">
                        <FormGroupLabel text="username" />
                        <TextInput name="username" type="text" placeholder="username" />
                    </FormGroup>
                    <FormGroup className="-m-b-2">
                        <FormGroupLabel text="Password" />
                        <TextInput name="password" type="password" placeholder="password123" />
                    </FormGroup>
                    <Link href="/">
                        <a className="gds-button gds-button--primary gds-button--block">Login</a>
                    </Link>
                </LoginForm>
            </Row>
        </LayoutContainer>
    );
}
