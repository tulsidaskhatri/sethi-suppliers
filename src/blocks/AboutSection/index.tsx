import './styles.scss';
import {Typography} from '../Typography';
import {TextLogo} from '../../components/TextLogo';
import {Tick1} from '../../components/Icon';
interface AboutSectionProps {
    title: string;
    cssClasses: {name: string}[];
    htmlId?: string;
    shortInfoText: string;
    listTitle: string;
    list: string;
    longInfoTitle: string;
    longInfoText: string;
}

export const AboutSection = ({
    htmlId,
    title,
    cssClasses,
    shortInfoText,
    listTitle,
    list,
    longInfoTitle,
    longInfoText,
}: AboutSectionProps) => {
    return (
        <div id={htmlId} className={`AboutSection--root ${cssClasses.map((cssClass) => cssClass.name).join(' ')}`}>
            <Typography className="grid-item-1 title" text={title} variant="title-5" weight="bold" />
            <div className="grid-item-2">
                <TextLogo className="logo" />
                <Typography className="short-info-text" text={shortInfoText} variant="label-6" />
                <Typography className="list-title" text={listTitle} variant="label-2" />
                <div className="list">
                    {list.split('\n').map((item) => (
                        <div className="item" key={item}>
                            <Tick1 className="icon" />
                            <Typography className="label" text={item} variant="label-8" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid-item-3">
                <Typography className="long-info-title" text={longInfoTitle} variant="title-4" weight="bold" />
                <Typography className="long-info-text" text={longInfoText} variant="label-6" />
            </div>
        </div>
    );
};
