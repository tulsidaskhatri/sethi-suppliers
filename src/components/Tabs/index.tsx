import './styles.scss';
import {Tab} from './Tab';

interface TabsProps {
    list: React.ReactNode[];
    current: number;
    onChange: (current: number) => void;
}

export const Tabs = ({list, current, onChange}: TabsProps) => {
    return (
        <ul className="Tabs--root">
            {list.map((item, index) => (
                <Tab
                    key={index}
                    active={current === index}
                    content={item}
                    onClick={() => {
                        current !== index && onChange(index);
                    }}
                />
            ))}
        </ul>
    );
};
