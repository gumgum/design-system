import '../styles/scss/index.scss';
import { AppWrapper } from '../context/state';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Left from '../components/layout/Left';
import ModalWrapper from '../components/common/modal/modalWrapper';
import GlobalSearch from '../components/common/search/GlobalSearch';
// import Right from "../components/layout/Right";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <AppWrapper>
            <div className="gds-app-layout__container">
                <Header />
                <Left />
                <Main>
                    <Component {...pageProps} />
                </Main>
                {/* <Right /> */}
                {/* <div className="gds-app-layout__bottom">Not used</div> */}
            </div>

            {/* Prevent the modal from loading each time when not needed */}
            {!!router.query.modalItem && (
                <ModalWrapper
                    isOpen={!!router.query.modalItem}
                    title={router.query.modalItem}
                    content={router.query.modalItem}
                    global={router.query.global}
                />
            )}
            <GlobalSearch />
        </AppWrapper>
    );
}

export default MyApp;
