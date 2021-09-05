import './styles.scss';

import {Typography} from '../../blocks/Typography';
import {Button} from '../../blocks/Button';
import {Whatsapp} from '../Icon';

export interface ProductCardProps {
    title: string;
    price: number;
    image: {url: string};
    contactText?: React.ReactNode;
}

export const ProductCard = ({title, price, image, contactText}: ProductCardProps) => (
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
        {contactText && <Button content={contactText} className="contact-button" startIcon={<Whatsapp />} />}
    </div>
);
