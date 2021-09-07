import './styles.scss';
import {useState} from 'react';
import {Tabs} from '../../components/Tabs';
import {Typography} from '../Typography';

interface HeaderProps {
    links: {label: string; link: string}[];
    logo?: {
        alt: string | null;
        url: string;
    };
}

export const Header = ({logo, links}: HeaderProps) => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <header className="Header--root">
            <Typography className="contact" variant="label-10" weight="light" text="Order Now 03331333979" />
            <div className="bottom padding-sides-1">
                <img className="logo" src={logo?.url} alt={logo?.alt || 'company-logo'} />
                <nav>
                    <Tabs
                        list={links.map((link) => (
                            <a className="Typography__label-10 Typography__medium" href={link.link}>
                                {link.label}
                            </a>
                        ))}
                        current={currentTab}
                        onChange={setCurrentTab}
                    />
                </nav>
            </div>
        </header>
    );
};
