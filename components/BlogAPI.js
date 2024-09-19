import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogAPI = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/random/allblog`);
        const data = await response.json();
        // console.log('API Data:', data);
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="col-lg-6">
      <div className="blogs-extra-title">
        <h3>Articles</h3>
      </div>
      {blogPosts.slice(0, 5).map((post, index) => (
        <div className="blogs-extra-left" key={index}>
          <div className="blogs-extra-left-img">
            
              <Link href={`/blog/${post.title_slug}`}>
                <a>
                  <img src={post.image} alt={post.title} />
                </a>
              </Link>
            
          </div>
          <div className="blogs-extra-left-content">
            <h4>
            
                <Link href={`/blog/${post.title_slug}`}>
                  <a>{post.title}</a>
                </Link>
            
             
            </h4>
            <span>{post.publish_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogAPI;