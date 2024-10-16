
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import parse from "html-react-parser";
import { useRouter } from 'next/router';
import BlogSubscriberForm from "../../components/BlogSubscriberForm";
import Image from "next/image";
import cheerio from 'cheerio';
import { ShareSocial } from "react-share-social";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

// Utility function to parse HTML content and extract image URLs
function parseImagesFromHtml(htmlContent) {
  if (!htmlContent) {
    return []; // Return an empty array if htmlContent is undefined or null
  }

  const $ = cheerio.load(htmlContent.toString()); // Convert to string
  const images = [];

  $('img').each((index, element) => {
    const src = $(element).attr('src');
    const alt = $(element).attr('alt');
    images.push({ src, alt });
  });

  return images;
}



function Copyslug({ blogs, blogcat, authordetials, author }) {
  const router = useRouter();
  const images = parseImagesFromHtml(blogs.description);
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 85}`
  }
  return (
    
    <div>
      
      <section>
        {blogs &&
          blogs.map((item, i) => (
            <div key={i}>
              <Head>
                {/* <title>{item.meta_title}</title>
                <meta name="description" content={item.meta_description} />
                <link
                  rel="canonical"
                  href={`https://www.dynamicssquare.com/blog/${item.title_slug}`+
                '/'}
                />
                {item.rank==1 && <meta name="robots" content="noindex, nofollow" />}
                <meta property="og:title" content={item.meta_title} />
                <meta property="og:site_name" content="Dynamics Square" />
                <meta
                  property="og:url"
                  content={`https://www.dynamicssquare.com/blog/${item.title_slug}`+
                  '/'}
                />
                <meta property="og:description" content={item.meta_keyword} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${item.meta_image}`} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content={item.meta_title} />
                <meta
                  property="twitter:description"
                  content={item.meta_keyword}
                />
                <meta property="twitter:image" content={`${item.meta_image}`} />
                <script

                 type="application/ld+json"

                    dangerouslySetInnerHTML={{ __html:item.additional_script

                  }}

                /> */}
                      <meta name="robots" content="noindex, nofollow" />
              </Head>

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
                          <li className="breadcrumb-item active">
                            {item.title}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-lg-8">
                    <div className="blogs-single-post-sec">
                      <div className="blogs-lates blogs-lates-top-head">
                        <h1>{item.title}</h1>
                        <div className="blogs-info-list">
                          <div className="left-list">
                            <span className="user">
                              <a href={`/blog/author/${item.author.split(" ").join("-")}`}>{item.author}</a>
                            </span>
                            <span className="date">
                              <a>
                                <i className="bi bi-calendar"></i>{" "}
                                {item.publish_date}
                              </a>
                            </span>
                            <span className="time">
                              <a>
                                <i className="bi bi-clock"></i> {item.read_time}
                              </a>
                            </span>
                            <span className="cate">
                            <a href={`/blog/category/${item.category_slug}`}>
                            <i className="bi bi-app"></i> {item.category}
                          </a>
                            </span>
                          </div>

                          <div className="sociallist">
                            <FacebookShareButton
                             url={`https://www.dynamicssquare.com/blog/${item.title_slug}`}
                              media={`${item.meta_image}`}
                              quote={item.title}
                            >
                              <a>
                                <i className="bi bi-facebook"></i>
                              </a>
                            </FacebookShareButton>

                            <TwitterShareButton
                             url={`https://www.dynamicssquare.com/blog/${item.title_slug}`}
                              media={`${item.meta_image}`}
                              quote={item.title}
                            >
                              <a>
                                <i className="bi bi-twitter"></i>
                              </a>
                            </TwitterShareButton>

                            <LinkedinShareButton
                             url={`https://www.dynamicssquare.com/blog/${item.title_slug}`}
                              media={`${item.meta_image}`}
                              source={item.title}
                              summary={item.short_description.substring(0, 60)}
                            >
                              <a>
                                <i className="bi bi-linkedin"></i>
                              </a>
                            </LinkedinShareButton>
                          </div>
                        </div>
                      </div>

                      <div className="blogs-content">
                        <div className="blogs-content-inner">
                          {/* {parse(item.description)} */}
                          {parse(item.description, {
                            replace: (domNode) => {
                              // Render images using next/image
                              if (domNode.type === 'tag' && domNode.name === 'img') {
                                const src = domNode.attribs.src;
                                const alt = domNode.attribs.alt;
                                return (
                                //  <div style={{margin:'30px 0px'}}>
                                //    <Image src={src} alt={alt} width={650} height={350} key={src}
                                //     objectFit='contain' loader={imageLoader}  />
                                //   </div>
                                <div style={{ position: "relative", width: "100%", paddingBottom: "40%",margin:"30px 0px" }}>
                                <Image src={src} alt={alt} layout="fill"
                                  objectFit="contain" key={src} />
                              </div>
                                );
                              }
                              // Return other nodes as is
                              return domNode;
                            },
                          })}
                        </div>
                        <div><em>Tags</em>:
                        <>
                          {item.meta_tags?.split(',').map((item2,i) => (
                          <a href={`/blog/tag/${item2.split(" ").join("-")}`} key={i}><span className="blog-tagged">{item2.charAt(0).toUpperCase() + item2.slice(1)}</span></a>

                          ))}
                          

                        </>
                           </div>
                        <div className="sociallist sociallist-bott">
                          <FacebookShareButton
                           url={`https://www.dynamicssquare.com/blog/${item.title_slug}`}
                            media={`${item.meta_image}`}
                            quote={item.title}
                          >
                            <a>
                              <i className="bi bi-facebook"></i>
                            </a>
                          </FacebookShareButton>

                          <TwitterShareButton
                           url={`https://www.dynamicssquare.com/blog/${item.title_slug}`}
                            media={`${item.meta_image}`}
                            quote={item.title}
                          >
                            <a>
                              <i className="bi bi-twitter"></i>
                            </a>
                          </TwitterShareButton>

                          <LinkedinShareButton
                           url={`https://www.dynamicssquare.com/blog/${item.title_slug}`}
                            media={`${item.meta_image}`}
                            source={item.title}
                          >
                            <a>
                              <i className="bi bi-linkedin"></i>
                            </a>
                          </LinkedinShareButton>
                        </div>
                        {authordetials &&
                          authordetials.map((author, i) => (
                            <div className="author-side-head" key={i}>
                              <div className="left">
                                <img
                                  src={author.profile_photo_path}
                                  alt="bg-pic"
                                  width={74}
                                  height={74}
                                />
                                <span className="link-din"><a href={author.linkedin_url} target="_blank"> <i className="bi bi-linkedin"></i></a></span>
                              </div>
                              <div className="right">
                               <a href={`/blog/author/${author.name.split(" ").join("-")}`}><span>{author.name}</span></a>
                               <p>{author.about}</p>
                              </div>
                            </div>
                          ))}

                       
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="prom-bann">
                      <Link href="https://www.dynamicssquare.com/schedule-a-demo/"><a style={{display:'block',marginBottom:'20px'}}><Image src="/img/blog-side-pic-1.png" alt="blog-side-pic-1" width={413} height={350} /></a></Link>
                      <Link href="https://www.dynamicssquare.com/ebook/dynamics-365-finance/"><a><Image src="/img/blog-side-pic-2.png" alt="blog-side-pic-2" width={413} height={190} /></a></Link>
                    </div>
                  </div>
                </div>

                <div className="row pd-90">
                  
                  {blogcat &&
                    blogcat.map((item1, i) => {
                      if(router.query.slug !=item1.title_slug)
                      {
                        return <div className="col-lg-6" key={i}>
                         
                        <div className="blogs-lates blogs-lates-repet">
                          <h3>
                            <a href={`/blog/${item1.title_slug}`}>
                              {item1.title}
                            </a>
                          </h3>
                          <div className="blogs-info-list">
                            <span className="user">
                            <a href={`/blog/author/${item1.author.split(" ").join("-")}`}>
                            <i className="bi bi-person-circle"></i>{" "}
                            {item1.author}
                          </a>
                            </span>
                            <span className="date">
                              <a>
                                <i className="bi bi-calendar"></i>{" "}
                                {item1.publish_date}
                              </a>
                            </span>
                            <span className="time">
                              <a>
                                <i className="bi bi-clock"></i>{" "}
                                {item1.read_time}
                              </a>
                            </span>
                            <span className="cate">
                            <a href={`/blog/category/${item.category_slug}`}>
                            <i className="bi bi-app"></i> {item.category}
                          </a>
                            </span>
                          </div>
                          <div className="b-card-info">
                            <p>{item1.short_description.substring(0, 60)}</p>
                            <div className="page-link-read">
                              <a href={`/blog/${item1.title_slug}`}>
                                Read More <span>{">"}</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      }
                      
                     })}
                </div>
              </div>

              <div className="bootom-blogs-sub">
                <div className="container">
                  <div className="row justify-content-center row-bg">
                    <div className="col-lg-6">
                      <div className="form-subscriber-card">
                        <div className="sub-head">
                          <h3>Join our newsletter</h3>
                          <p>
                            Engaging stories and exclusive data, designed for
                            our best customers. We only send one issue each
                            month, so we try to make it useful.
                          </p>
                        </div>
                        <BlogSubscriberForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
    
  );
}
export async function getServerSideProps(context) {
  let slug = context.query.slug;
  console.log(slug);
 
  const res = await fetch(`${process.env.BACKEND_URL}`+'/api/blog_details/'+slug);
  const blogs = await res.json();
  const bloglength =blogs.length;
  if(bloglength >=1)
  {
    const category = blogs[0]["category_slug"];
    const res1 = await fetch(`${process.env.BACKEND_URL}`+'/api/blog/related/'+category);
    const blogcat = await res1.json();
  
    const author = blogs[0]["author_email"];
    const authorres = await fetch(`${process.env.BACKEND_URL}`+'/api/blog/author/details/'+author.split("-").join(" ")
    );
    const authordetials = await authorres.json();
  
    return { props: { blogs, blogcat, authordetials, author } };
  }
  else{
    return{
      notFound:true,
     };
  }
  
}
export default Copyslug;

