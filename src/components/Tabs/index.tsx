import {Typography} from '../../blocks/Typography';
import './styles.scss';

interface TabsProps {
    list: string[];
    current: number;
    onChange: (current: number) => void;
}

export const Tabs = ({list, current, onChange}: TabsProps) => {
    return (
        <ul className="Tabs--root">
            {list.map((item, index) => (
                <li
                    key={index}
                    style={{color: current === index ? 'green' : 'black'}}
                    onClick={() => {
                        current !== index && onChange(index);
                    }}
                >
                    <Typography text={item} variant={'label-2'} />
                    {current === index && <div className="hr" />}
                </li>
            ))}
        </ul>
    );
};
