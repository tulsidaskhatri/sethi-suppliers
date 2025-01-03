import React, {useRef} from 'react';
import {useRipple} from 'react-use-ripple';

interface TabProps {
    active?: boolean;
    onClick: () => void;
    content: React.ReactNode;
}

export function Tab({active, onClick, content}: TabProps) {
    const ref = useRef<HTMLLIElement>(null);
    useRipple(ref);
    return (
        <li ref={ref} className={`${active ? 'active' : 'inactive'}`} onClick={onClick}>
            {content}
            {active && <div className="hr" />}
        </li>
    );
}
