import { H1 } from "../components/H1";
import { H2 } from "../components/H2";
import { P1 } from "../components/P1";
import { ProductSection } from "./ProductSection";

interface BuilderProps {
  content: any;
}
export const Builder = ({ content }: BuilderProps) => {
  return (
    <>
      {content.map((block: any) => {
        switch (block.__typename) {
          case "H1Record":
            return <H1 key={block.id} {...block} />;
          case "H2Record":
            return <H2 key={block.id} {...block} />;
          case "ProductSectionRecord":
            return <ProductSection key={block.id} {...block} />;
          default:
            return <P1 key={block.id} {...block} />;
        }
      })}
    </>
  );
};

// __typename: string;
//   id: number;
//   props: any;
