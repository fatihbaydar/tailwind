import React from "react";

const Typography = () => {
  return (
    <div>
      <p className="text-sm">Typography</p>
      <p className="text-base">Typography</p>
      <p className="text-lg">Typography</p>
      <p className="text-xl">Typography</p>
      <p className="text-2xl">Typography</p>
      <p className="text-[3rem]">Typography</p>

    {/* line clamp */}
      <article>
        <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vel doloremque doloribus dolores sapiente asperiores repudiandae praesentium pariatur error, modi laudantium ullam recusandae qui et in explicabo laborum, voluptates excepturi quaerat ducimus quis iusto? Minima aperiam aliquam quidem in doloribus odit sed dolores, molestiae aspernatur suscipit ipsum, nesciunt magni nisi dolor at quam natus praesentium id. Quidem nemo quae soluta quisquam pariatur ratione, iste explicabo ducimus dignissimos debitis eum, magnam quo quis, dolores mollitia itaque! Impedit ex optio ipsa quasi deserunt sunt debitis dolores accusamus? Consequatur, cupiditate quia? Blanditiis optio eveniet dignissimos illum expedita laboriosam et sint ea voluptate error.</p>
      </article>
      <div className="font-bold">
        <p className="font-bold">Merhaba</p>
        <p className="text-center">Merhaba</p>
        <p className="underline">Merhaba</p>
        <p className="line-through">Merhaba</p>
        <p className="uppercase">Merhaba</p>
        <p className="lowercase">Merhaba</p>
        <p className="text-blue-600">Merhaba</p> 
        <p className="bg-slate-500">Merhaba</p> 
        <p className="bg-slate-500">Merhaba</p> 
      </div>
 
    </div>
  );
};

export default Typography;
