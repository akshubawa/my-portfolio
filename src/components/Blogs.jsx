import React from 'react';
import Footer from './Footer';

const BlogCard = ({ title, thumbnail, link }) => (
  <div className="max-w-sm rounded w-[90%] overflow-hidden mx-auto flex flex-col justify-between shadow-lg bg-gray-800 m-4">
    <div>
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
      </div>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 transition duration-300"
      >
        Read More
      </a>
    </div>
  </div>
);

const Blogs = () => {
  const blogPosts = [
    // {
    //   title: "Understanding React Hooks",
    //   thumbnail: "https://picsum.photos/seed/react/400/300",
    //   link: "https://medium.com/your-medium-article-link-1"
    // },
    // {
    //   title: "The Power of Machine Learning",
    //   thumbnail: "https://picsum.photos/seed/ml/400/300",
    //   link: "https://www.quora.com/your-quora-article-link-1"
    // },
    // {
    //   title: "Mobile App Development with Flutter",
    //   thumbnail: "https://picsum.photos/seed/flutter/400/300",
    //   link: "https://medium.com/your-medium-article-link-2"
    // },
    // Add more blog posts as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">My Blogs</h1>
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white text-xl">
              No blogs available at the moment. Check back later!
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;