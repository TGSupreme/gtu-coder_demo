import React from 'react'
import { createClient } from "next-sanity";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const services = ({profile}) => {
  return (
  <>
  <NavBar profile={profile}/>
  <div>services</div>
  <Footer profile={profile}/>
  </>
    

  )
}

export default services

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "uktsokcx",
    dataset: "production",
    useCdn: false,
  });

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      profile,
    },
  };
}
