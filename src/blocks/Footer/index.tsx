import './styles.scss';
import React from 'react';
import {Typography} from '../Typography';

interface FooterProps {
    columns: ColumnProps[];
    logo?: {
        alt: string | null;
        url: string;
    };
}

export function Footer({logo, columns}: FooterProps) {
    return (
        <ul className="Footer--root">
            <li>
                <div className="logo-container">
                    <img src={logo?.url} alt={logo?.alt || 'company-logo'} />
                </div>
            </li>
            {columns.map((column) => (
                <li key={column.title} className="column">
                    <Column {...column} />
                </li>
            ))}
            <li className="column">
                {' '}
                <Typography className="title" text="Follow us on" variant="label-6" />
            </li>
        </ul>
    );
}

interface ColumnProps {
    title: string;
    links?: {label: string; link: string}[];
}
const Column = ({title, links}: ColumnProps) => (
    <div className="FooterColumn--root">
        <Typography className="title" text={title} variant="label-6" />
        {links && (
            <nav>
                <ul className="list">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a className="Typography__label-8 Typography__light" href={link.link}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )}
    </div>
);
