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
}

export const ProductSection = ({title, contactButtonText, products, categories, cssClasses}: ProductSectionProps) => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <div className={`ProductSection--root ${cssClasses.map((cssClass) => cssClass.name).join(' ')}`}>
            <div className="container">
                <div className="grid header">
                    <div className="col-4">
                        <Typography variant="title-1" text={title} />
                    </div>

                    <div className="col-8">
                        <Tabs
                            list={categories.map((category) => category.title)}
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
