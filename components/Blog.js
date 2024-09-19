import Link from "next/link";
import React from "react";
import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      title: "What are the Benefits and Capabilities of Microsoft Dynamics 365 for Sales?",
      image: "/img/MicrosoftTeams-image-4.jpg",
      href: "https://blog.dynamicssquare.com/what-are-dynamics-365-for-sales-benefits-and-capabilities/",
      date: "August 3, 2022",
    },
    {
      title: "What is the Difference between Microsoft Dynamics NAV and Dynamics 365 Business Central?",
      image: "/img/Microsoft-Dynamics-NAV-and-Business-Central.jpg",
      href: "https://blog.dynamicssquare.com/microsoft-dynamics-nav-vs-business-central/",
      date: "June 28, 2022",
    },
    {
      title: "Why Your Business Needs Power BI?",
      image: "/img/Why-Your-Business-Needs-Power-B.jpg",
      href: "https://blog.dynamicssquare.com/why-your-business-needs-power-bi/",
      date: "June 22, 2022",
    },
    {
      title: "How to Generate Interactive Reports in Power BI?",
      image: "/img/Generate-Interactive-Reports-in-Power-BI.jpg",
      href: "https://blog.dynamicssquare.com/how-to-generate-interactive-reports-in-power-bi/",
      date: "June 16, 2022",
    },
  ];

  return (
    <>
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>
        {blogPosts.map((post, i) => (
          <div className="blogs-extra-left" key={i}>
            <div className="blogs-extra-left-img">
              <Link href={post.href}>
                <a>
                  <Image src={post.image} alt="imgs" width={1200} height={627} />
                </a>
              </Link>
            </div>
            <div className="blogs-extra-left-content">
              <h4>
                <Link href={post.href}>
                  <a>{post.title}</a>
                </Link>
              </h4>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;