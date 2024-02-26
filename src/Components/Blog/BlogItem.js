
function BlogItem({img , title, desc, author, date}) {
    return (
        <div class="col-4">
            <div class="blog-box">
              <div class="blog-img">
                <img src={img} class="img-fluid" />
              </div>
              <div class="blog-content">
                <h3 class="blog-title">{title}</h3>
                <p class="blog-desc">
                  {desc}
                </p>
              </div>
              <div class="blog-footer">
                <div class="post-author">
                  <p class="author">{author}</p>
                </div>
                <div class="post-date">
                  <span class="bi bi-clock"></span> {date} min
                </div>
              </div>
            </div>
          </div>
    );
    
}
export default BlogItem;