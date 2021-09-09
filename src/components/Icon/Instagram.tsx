import * as React from 'react';

function SvgInstagram(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" {...props}>
            <circle data-name="Ellipse 22" cx={30} cy={30} r={30} fill="#fff" />
            <g
                transform="translate(18 18)"
                fill="none"
                stroke="#27742d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <rect data-name="Rectangle 32" width={20} height={20} rx={5} transform="translate(2 2)" />
                <path data-name="Path 78" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            </g>
        </svg>
    );
}

export default SvgInstagram;
