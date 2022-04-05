import React from "react";

const Blog = () => {
  const symantic =
    "Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain. For example, <header>, <footer>, <article> are considered semantic elements as they clearly describe their purpose and the type of content they should enclose. New HTML5 semantic tags to structure the document in a meaningful way are: Semantic Tags - HTML <header> <nav> <article> <section> <aside> <footer> Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.";
  return (
    <div className="p-44 border-2 rounded-2xl m-10">
      <div className="grid grid-cols-2">
        <div className="border-2 rounded-lg m-4 p-8">
          <h1 className="text-2xl text-orange-600">What is Context Api ?</h1>
          <p>
            Context is a built-in API introduced in ​​React 16.3. It makes it
            possible to pass data from parent to children nested deep down the
            component tree directly, instead of passing it down through a chain
            of props. It can be used to solve the same problems as Redux does,
            but it doesn’t provide a strict way of state manipulation to ensure
            predictable behavior. Despite its low-level nature, it might be the
            perfect solution in some cases.
          </p>
        </div>
        <div className="border-2 rounded-lg m-4 p-8">
          <h2 className="text-2xl text-orange-600">What is Semantic Tag ?</h2>
          <p>{symantic}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
