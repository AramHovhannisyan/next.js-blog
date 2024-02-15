import Head from "next/head";
import PostContent from "../../../components/post/single-post/post-content";
import { getAllPosts, getPost } from "../../../lib/db-utils";

function SinglePostPage({post}) {
  return <>
    <Head>
      <title>{post.title}</title>
      <meta description={post.excerpt}/>
    </Head>
    <PostContent post={post} />
  </>
}

export async function getStaticProps({params}) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();
  const slugsArray = allPosts.map(singlePost => ({ params: { slug: singlePost.slug } }));
  // console.log("slugsArray:", slugsArray);

  return {
    paths: slugsArray,
    fallback: false,
  }
}


export default SinglePostPage;
