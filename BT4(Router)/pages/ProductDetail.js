import { useParams } from 'react-router-dom';

function ProductDetail() {
  let { productId } = useParams();
  // Lấy giá trị của productId từ đường dẫn
  return (
    <div>
      <h2>Product Detail: {productId}</h2>
    </div>
  );
}

export default ProductDetail;
