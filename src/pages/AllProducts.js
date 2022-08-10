import ProductsList from "../components/Products/ProductsList";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "iPhone 13 Pro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi mi, efficitur vel nisi sed, posuere tempus metus. Integer lectus elit, bibendum nec lectus in, aliquet pretium mauris.",
    price: 1299.9,
  },
  {
    id: "p2",
    name: "Samsung Galaxy Note 22",
    description:
      "Ut imperdiet lorem at finibus laoreet. Praesent elementum vehicula enim, quis vestibulum purus pretium eu. Phasellus ornare mauris mollis, mollis tellus a, pellentesque est, consectetur adipiscing elit.",
    price: 1099.9,
  },
  {
    id: "p3",
    name: "Apple Macbook Pro",
    description:
      "Nam sit amet eleifend leo. Quisque commodo erat vel nunc vestibulum dictum. Cras accumsan nisl sapien, sed fermentum tortor viverra ut, imperdiet lorem at finibus laoreet.",
    price: 2499.9,
  },
  {
    id: "p4",
    name: "Lenovo Ideapad 320",
    description:
      "Morbi non massa massa. Vestibulum non vehicula tellus, viverra laoreet ipsum. Nam luctus in nisl et fermentum. Morbi a dolor et diam vehicula egestas a id quam.",
    price: 749.9,
  },
];

const AllProducts = () => {
  return <ProductsList products={DUMMY_PRODUCTS} />;
};

export default AllProducts;
