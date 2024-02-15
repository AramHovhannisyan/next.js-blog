import AllPosts from "../../components/post/all-posts";
import { getAllPosts } from "../../lib/db-utils";

function AllPostsPage({posts}) {
  return <AllPosts posts={posts} />
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return { props: { posts: posts } }
}

export default AllPostsPage;
