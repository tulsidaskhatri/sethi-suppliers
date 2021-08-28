export interface ProductCardProps {
  title: string;
  price: number;
  image: { url: string };
}

export const ProductCard = ({ title, price, image }: ProductCardProps) => (
  <>
    <div
      style={{
        width: "100%",
        height: "350px",
        backgroundImage: `url(${image.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
    <h3>{title}</h3>
    <p>{price}</p>
  </>
);
