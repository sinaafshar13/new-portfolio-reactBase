import "./Blog.css";
import BlogItem from "./BlogItem";
import ImgBlog1 from '../../assets/img/post-1.jpg'
import ImgBlog2 from '../../assets/img/post-2.jpg'
import ImgBlog3 from '../../assets/img/post-3.jpg'

function Blog() {
  let posts = [
    {
      id: 0,
      img: ImgBlog1,
      title: "post title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
      author: "Ashkan Zarabi",
      date: "10",
    },
    {
      id: 1,
        img: ImgBlog2,
        title: "post title 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
        author: "Erfan Zaree",
        date: "15",
      },
      {
        id: 2,
        img: ImgBlog3,
        title: "post title 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
        author: "Sina Afhsari",
        date: "20",
      },
  ];
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {posts.map(post => (
            <BlogItem key = {post.id} {...post}/>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blog;
