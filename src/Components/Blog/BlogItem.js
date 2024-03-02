
function BlogItem({img , title, desc, author, date}) {
    return (
        <div className="col-4">
            <div className="blog-box">
              <div className="blog-img">
                <img src={img} className="img-fluid" alt="post-1" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{title}</h3>
                <p className="blog-desc">
                  {desc}
                </p>
              </div>
              <div className="blog-footer">
                <div className="post-author">
                  <p className="author">{author}</p>
                </div>
                <div className="post-date">
                  <span className="bi bi-clock"></span> {date} min
                </div>
              </div>
            </div>
          </div>
    );
    
}
export default BlogItem;