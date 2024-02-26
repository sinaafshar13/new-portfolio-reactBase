import "./Blog.css";
import BlogItem from "./BlogItem";
import ImgBlog1 from '../../assets/img/post-1.jpg'
import ImgBlog2 from '../../assets/img/post-2.jpg'
import ImgBlog3 from '../../assets/img/post-3.jpg'

function Blog() {
  let post = [
    {
      img: ImgBlog1,
      title: "post title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
      author: "Ashkan Zarabi",
      date: "10",
    },
    {
        img: ImgBlog2,
        title: "post title 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
        author: "Erfan Zaree",
        date: "15",
      },
      {
        img: ImgBlog3,
        title: "post title 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
        author: "Sina Afhsari",
        date: "20",
      },
  ];
  return (
    <section id="blog">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title">BLOG</h2>
          <p class="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="row">
          <BlogItem {...post[0]}/>
          <BlogItem {...post[1]}/>
          <BlogItem {...post[2]}/>
        </div>
      </div>
    </section>
  );
}
export default Blog;
