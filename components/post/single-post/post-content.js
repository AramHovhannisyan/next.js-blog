import PostHeader from "./post-header";
import classes from './post-content.module.css';

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
 
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <h1>{post.content}</h1>
    </article>
  );
}
