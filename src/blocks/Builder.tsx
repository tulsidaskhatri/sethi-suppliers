import {ContactSection} from './ContactSection';
import {ProductSection} from './ProductSection';
import {Typography} from './Typography';
enum Components {
    ProductSection = 'ProductSectionRecord',
    Typography = 'TypographyRecord',
    ContactSection = 'ContactSectionRecord',
}
interface BuilderProps {
    content: any;
}
export const Builder = ({content}: BuilderProps) => {
    return (
        <>
            {content.map((block: any) => {
                switch (block.__typename) {
                    case Components.ProductSection:
                        return <ProductSection key={block.id} {...block} />;
                    case Components.ContactSection:
                        return <ContactSection key={block.id} {...block} />;
                    case Components.Typography:
                        return <Typography key={block.id} {...block} />;
                    default:
                        return <Typography key={block.id} {...block} />;
                }
            })}
        </>
    );
};
