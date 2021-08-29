import { Title1 } from "./Typography/Title1";
import { Title2 } from "./Typography/Title2";
import { Message1 } from "./Typography/Message1";
import { ProductSection } from "./ProductSection";
enum Components {
  Title1 = "Title1Record",
  Title2 = "Title2Record",
  Message1 = "Message1Record",
  Label1 = "Label1Record",
  ProductSection = "ProductSectionRecord",
}
interface BuilderProps {
  content: any;
}
export const Builder = ({ content }: BuilderProps) => {
  return (
    <>
      {content.map((block: any) => {
        switch (block.__typename) {
          case Components.Title1:
            return <Title1 key={block.id} {...block} />;
          case Components.Title2:
            return <Title2 key={block.id} {...block} />;
          case Components.ProductSection:
            return <ProductSection key={block.id} {...block} />;
          case Components.Message1:
            return <Message1 key={block.id} {...block} />;
          default:
            return <Message1 key={block.id} {...block} />;
        }
      })}
    </>
  );
};

// __typename: string;
//   id: number;
//   props: any;
