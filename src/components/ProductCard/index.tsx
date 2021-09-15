import './styles.scss';

import {Typography} from '../../blocks/Typography';
import {Button} from '../../blocks/Button';
import {Whatsapp} from '../Icon';
import {MouseEventHandler} from 'react';

export interface ProductCardProps {
    title: string;
    urduTitle: string;
    price: number;
    image: {url: string};
    contactText?: React.ReactNode;
    onClickButton?: MouseEventHandler<HTMLButtonElement>;
}

export const ProductCard = ({title, urduTitle, price, image, contactText, onClickButton}: ProductCardProps) => (
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
        <div className="title">
            <Typography text={title} variant="label-3" />
            <Typography text={urduTitle} variant="label-3" />
        </div>

        {contactText && (
            <Button content={contactText} className="contact-button" startIcon={<Whatsapp />} onClick={onClickButton} />
        )}
    </div>
);
