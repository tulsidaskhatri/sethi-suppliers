import * as React from 'react';

function SvgTwitter(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" {...props}>
            <circle data-name="Ellipse 21" cx={30} cy={30} r={30} fill="#fff" />
            <path
                data-name="Path 77"
                d="M41 21.01a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0041 21.01z"
                fill="none"
                stroke="#27742d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
}

export default SvgTwitter;
