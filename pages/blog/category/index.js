import Image from "next/image";
import Head from "next/head";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  const res = await fetch(
    process.env.BACKEND_URL+"/api/blog/category/"+slug);
  const blogs = await res.json();

  const categoryblog = await fetch(`${process.env.BACKEND_URL}`+"/api/blog/category");
  const categoryblogs = await categoryblog.json();

  return { props: { blogs, categoryblogs } };
}

function CategoryBlogs({ blogs, categoryblogs }) {
  return (
    <div>
      <Head>
        <title>Blog Category</title>
      </Head>

      <div className="blogs-extra-new">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="blogs-breadcromb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/blog/">
                        Blog
                      </a>
                    </li>
                    <li className="breadcrumb-item active"></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-ex-side-cate blogs-ex-side-cate-home">
                <h3>Explore by Category</h3>
                <ul>
                  {categoryblogs &&
                    categoryblogs.map((cateitem, i) => (
                      <li>
                        <a href={`/blog/category/${cateitem.category_slug}`}>
                          {cateitem.category_name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default CategoryBlogs;
