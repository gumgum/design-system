import Link from 'next/link';

const FooterLinks = [
    {
        url: 'https://gumgum.com/',
        title: 'FAQs',
    },
    {
        url: 'https://gumgum.com/',
        title: 'Privacy Policy',
    },
    {
        url: 'https://gumgum.com/',
        title: 'Terms of Service',
    },
    {
        url: 'https://gumgum.com/',
        title: 'Opt-out',
    },
];

export default function Footer() {
    return (
        <footer className="gds-flex gds-flex--justify-between -color-tx-lt-3 gds-text--body-sm">
            <div>
                <p className="gds-text--body-sm">
                    Copyright &copy; {new Date().getFullYear()}{' '}
                    <Link href="https://gumgum.com/" passHref={true}>
                        <a className="gds-text-button--light-grey">GumGum Inc.</a>
                    </Link>{' '}
                    All rights reserved.
                </p>
                <Link href="https://gumgum.com/" passHref={true}>
                    <a className="gds-text-button--light-grey -p-a-1">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </Link>
                <Link href="https://gumgum.com/" passHref={true}>
                    <a className="gds-text-button--light-grey -p-a-1">
                        <i className="fab fa-twitter"></i>
                    </a>
                </Link>
            </div>
            <div>
                <ul className="gds-flex ">
                    {FooterLinks.map((item, i) => {
                        return (
                            <li className={`${i !== 0 ? '-m-l-2' : null}`} key={i}>
                                <Link href={item.url} passHref={true}>
                                    <a className="gds-text-button--light-grey gds-text--body-sm">
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
}
