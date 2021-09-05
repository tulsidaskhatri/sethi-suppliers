import './styles.scss';
import {useState} from 'react';
import {ProductCard} from '../../components/ProductCard';
import {Tabs} from '../../components/Tabs';
import {Category, Product} from '../../model';
import {Typography} from '../Typography';
interface ProductSectionProps {
    title: string;
    contactButtonText?: string;
    products: Product[];
    categories: Category[];
    cssClasses: {name: string}[];
    htmlId?: string;
}

export const ProductSection = ({
    htmlId,
    title,
    contactButtonText,
    products,
    categories,
    cssClasses,
}: ProductSectionProps) => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div id={htmlId} className={`ProductSection--root ${cssClasses.map((cssClass) => cssClass.name).join(' ')}`}>
            <div className="container">
                <div className="grid header mq-desktop">
                    <div className="col-5">
                        <Typography variant="title-1" text={title} />
                    </div>

                    <div className="col-7">
                        <Tabs
                            list={categories.map((category) => (
                                <Typography text={category.title} variant={'label-2'} />
                            ))}
                            current={currentTab}
                            onChange={setCurrentTab}
                        />
                    </div>
                </div>
                <div className="products-container">
                    <ul>
                        {products
                            .filter((product) =>
                                product.categories
                                    .map((category) => category.key)
                                    .includes(categories.map((category) => category.key)[currentTab])
                            )
                            .map((product) => (
                                <li key={product.title}>
                                    <ProductCard {...product} contactText={contactButtonText} />
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="scroll-track"></div>
            </div>
        </div>
    );
};
