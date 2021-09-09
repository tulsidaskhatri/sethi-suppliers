import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" {...props}>
            <circle data-name="Ellipse 20" cx={30} cy={30} r={30} fill="#fff" />
            <path
                data-name="Path 76"
                d="M35 20h-3a5 5 0 00-5 5v3h-3v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3z"
                fill="none"
                stroke="#27742d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

export default SvgFacebook;
