import './styles.scss';
import {useContext, useState} from 'react';
import {Tabs} from '../../components/Tabs';
import {Typography} from '../Typography';
import {GLOBAL} from '../../globals';
import {CompanyContext} from '../../ContextProviders/Company';
import {Link} from 'react-scroll';
interface HeaderProps {
    links: {label: string; link: string}[];
    contactLabel: string;
    logo?: {
        alt: string | null;
        url: string;
    };
}

export const Header = ({logo, contactLabel, links}: HeaderProps) => {
    const [currentTab, setCurrentTab] = useState(0);
    const company = useContext(CompanyContext);
    return (
        <header className="Header--root">
            {company.contacts.length > 0 && (
                <Typography
                    className="contact"
                    variant="label-10"
                    text={
                        <a
                            href={`${GLOBAL.WHATSAPP_BASE}${company.contacts[0].phone}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {`${contactLabel} ${company.contacts[0].phone}`}
                        </a>
                    }
                />
            )}
            <div className="bottom padding-sides-1">
                <img className="logo" src={logo?.url} alt={logo?.alt || 'company-logo'} />
                <nav>
                    <Tabs
                        list={links.map((link, index) => (
                            <Link
                                className="Typography__label-10 Typography__medium"
                                to={link.link}
                                smooth
                                offset={-160}
                                onClick={() => setCurrentTab(index)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        current={currentTab}
                        onChange={setCurrentTab}
                    />
                </nav>
            </div>
        </header>
    );
};
