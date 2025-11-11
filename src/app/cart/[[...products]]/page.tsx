interface ProductsPageProps {
  params?: {
    products: string[];
  };
}
const products = ({ params }: ProductsPageProps) => {
  console.log(params);
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {params?.products?.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default products;
