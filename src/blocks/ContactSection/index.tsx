import './styles.scss';
import {Image} from '../../model';
import {Typography} from '../Typography';
interface ContactSectionProps {
    title: string;
    cards: I_ContactCardProps[];
    cssClasses: {name: string}[];
    htmlId?: string;
}

export const ContactSection = ({htmlId, title, cards, cssClasses}: ContactSectionProps) => {
    return (
        <div id={htmlId} className={`ContactSection--root ${cssClasses.map((cssClass) => cssClass.name).join(' ')}`}>
            <Typography className="title" text={title} variant="title-6" weight="bold" />
            <ul>
                {cards.map((card) => (
                    <li key={card.title}>
                        <ContactCard {...card} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

interface I_ContactCardProps {
    title: string;
    icon: Image;
    details: string;
}
const ContactCard = ({title, icon, details}: I_ContactCardProps) => {
    return (
        <div className="ContactCard--root">
            <div className="content">
                <img src={icon.url} alt={icon.alt} className="icon" />
                <div className="text">
                    <Typography text={title} variant="label-5" className="title" />
                    <Typography text={details} variant="label-10" weight="bold" className="details" />
                </div>
            </div>
        </div>
    );
};
