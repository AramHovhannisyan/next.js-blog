import { getFeaturedPosts } from '../lib/db-utils'; 
import Hero from "../components/hero";
import FeaturedPosts from "../components/featured-posts";



function HomePage(props) {
  console.log(process.env.NODE_ENV, process.env.NEXT_ENV);
  return <>
    <Hero/>
    <FeaturedPosts posts={props.posts} />
  </>
}

export async function getStaticProps() {
  const posts = await getFeaturedPosts();

  return { props: { posts: posts } }
}

export default HomePage;
