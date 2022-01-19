import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <h2>404 Page Not found</h2>
      <Link to={'/'}>Go back</Link>
    </section>
  );
};

export default NotFound;
