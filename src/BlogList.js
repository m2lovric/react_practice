import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <article className='blog-preview'>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
              <button onClick={() => handleDelete(blog.id)}>delete blog</button>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
