import './styles.scss';
import {Typography} from '../../blocks/Typography';
interface TextLogoProps {
    className?: string;
}
export function TextLogo({className}: TextLogoProps) {
    return (
        <div className={`TextLogo--root${className ? ` ${className}` : ''}`}>
            <Typography className="line-one" text="Sethi" variant="title-6" weight="bold" italic />
            <Typography className="line-two" text="Suppliers" variant="title-3" weight="bold" italic />
            <div className="hr" />
        </div>
    );
}
