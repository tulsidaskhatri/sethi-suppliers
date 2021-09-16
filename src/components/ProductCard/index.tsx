import './styles.scss';

import {Typography} from '../../blocks/Typography';
import {Button} from '../../blocks/Button';
import {Whatsapp} from '../Icon';
import {MouseEventHandler} from 'react';

export interface ProductCardProps {
    title: string;
    urduTitle: string;
    price: number;
    netWeight?: string;
    image: {url: string};
    contactText?: React.ReactNode;
    onClickButton?: MouseEventHandler<HTMLButtonElement>;
}

export const ProductCard = ({
    title,
    urduTitle,
    netWeight,
    price,
    image,
    contactText,
    onClickButton,
}: ProductCardProps) => (
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
        <div className="row1">
            <Typography text={`Rs. ${price}`} variant="label-11" />
            {netWeight && <Typography text={`Net wt: ${netWeight}`} variant="label-11" />}
        </div>

        <div className="row2">
            <Typography text={title} variant="label-3" />
            <Typography text={urduTitle} variant="label-3" />
        </div>

        {contactText && (
            <Button content={contactText} className="contact-button" startIcon={<Whatsapp />} onClick={onClickButton} />
        )}
    </div>
);
