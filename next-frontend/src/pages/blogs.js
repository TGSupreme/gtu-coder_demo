import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Script from "next/script";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Blogs = ({ blogs, profile }) => {
  const client = createClient({
    projectId: "iytovi01",
    dataset: "production",
    useCdn: false,
  });
  return (
    <div>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{profile.title} | PPS </title>

        <meta
          property="og:title"
          content="How to become a frontend developer | Atom Template"
        />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />
      </Head>

      <NavBar profile={profile} />
      <div className="bg-grey-50 my-12" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          {/* <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((item) => {
              return (
                <Link
                  key={item.slug.current}
                  href={"/blog/" + item.slug.current}
                  className="shadow"
                >
                  <div>
                    <div
                      style={{
                        backgroundImage: "url(/assets/img/post-01.jpg)",
                      }}
                      className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                    >
                      <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                      <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-purple-700 border-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer">
                        Read More
                      </span>
                    </div>
                    <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
                      <span className="block font-body text-lg font-semibold text-black">
                        {" "}
                        {item.title}
                      </span>
                      <span className="block pt-2 font-body text-grey-20">
                        {item.metadesc}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div> */}
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          {blogs.sort((a, b) => a.title.localeCompare(b.title)).map((item) =>{
    return (
      <Link
        key={item.slug.current}
        href={"/blog/" + item.slug.current}
        className="shadow"
      >
        <div>
          <div
            style={{
              backgroundImage: "url(/assets/img/post-01.jpg)",
            }}
            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
          >
            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-purple-700 border-purple-700 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer">
              Read More
            </span>
          </div>
          <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
            <span className="block font-body text-lg font-semibold text-black">
              {" "}
              {item.title}
            </span>
            <span className="block pt-2 font-body text-grey-20">
              {item.metadesc}
            </span>
          </div>
        </div>
      </Link>
    );
  })}
</div>
        </div>
      </div>
      <Footer profile={profile}/>
    </div>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "uktsokcx",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile,
    },
  };
}
