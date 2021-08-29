import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Tabs } from "../../components/Tabs";
import { Category, Product } from "../../model";
import { Title1 } from "../Typography/Title1";

interface ProductSectionProps {
  title: string;
  products: Product[];
  categories: Category[];
  cssClasses: { name: string }[];
}

export const ProductSection = ({
  title,
  products,
  categories,
  cssClasses,
}: ProductSectionProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className={cssClasses.map((cssClass) => cssClass.name).join(" ")}>
      <div className="grid">
        <div className="col-4">
          <Title1 text={title} />
        </div>

        <div className="col-8">
          <Tabs
            list={categories.map((category) => category.title)}
            current={currentTab}
            onChange={setCurrentTab}
          />
        </div>
      </div>
      <div className="grid gap-s">
        {products
          .filter((product) =>
            product.categories
              .map((category) => category.key)
              .includes(categories.map((category) => category.key)[currentTab])
          )
          .map((product) => (
            <div key={product.title} className="col-3">
              <ProductCard {...product} />
            </div>
          ))}
      </div>
    </div>
  );
};
