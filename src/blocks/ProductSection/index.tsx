import './styles.scss';
import {useContext, useState} from 'react';
import {ProductCard} from '../../components/ProductCard';
import {Tabs} from '../../components/Tabs';
import {Category, Product} from '../../model';
import {Typography} from '../Typography';
import {CompanyContext} from '../../ContextProviders/Company';
import {GLOBAL} from '../../globals';
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
    const company = useContext(CompanyContext);
    const onClickCardButton = () => {
        window.open(`${GLOBAL.WHATSAPP_BASE}${company.contacts[0].phone}`, '_blank');
    };
    return (
        <div id={htmlId} className={`ProductSection--root ${cssClasses.map((cssClass) => cssClass.name).join(' ')}`}>
            <div className="container">
                <div className="header">
                    <Typography variant="title-1" text={title} />
                    <Tabs
                        list={categories.map((category) => (
                            <Typography text={category.title} variant={'label-2'} />
                        ))}
                        current={currentTab}
                        onChange={setCurrentTab}
                    />
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
                                    <ProductCard
                                        {...product}
                                        contactText={contactButtonText}
                                        onClickButton={onClickCardButton}
                                    />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
