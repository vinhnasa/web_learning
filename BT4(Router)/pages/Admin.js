import { useHistory } from 'react-router-dom';

function Admin() {
  const history = useHistory();

  // Kiểm tra quyền truy cập ở đây
  const isAdmin = false;

  if (!isAdmin) {
    // Nếu không có quyền, chuyển hướng người dùng sau 3 giây
    setTimeout(() => {
      history.push('/');
    }, 3000);
    return <p>Bạn không có quyền truy cập trang Admin!</p>;
  }

  return <h2>Admin Dashboard</h2>;
}

export default Admin;
