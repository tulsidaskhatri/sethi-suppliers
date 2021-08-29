import './styles.scss';

import {Typography} from '../../blocks/Typography';

export interface ProductCardProps {
    title: string;
    price: number;
    image: {url: string};
}

export const ProductCard = ({title, price, image}: ProductCardProps) => (
    <div className="ProductCard--root">
        <div
            style={{
                width: '100%',
                height: '324px',
                backgroundImage: `url(${image.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        ></div>
        <Typography text={`Rs. ${price}`} variant="label-11" className="price" />
        <Typography text={title} variant="label-3" className="title" />
    </div>
);
