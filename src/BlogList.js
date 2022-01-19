import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <article className='blog-preview'>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
