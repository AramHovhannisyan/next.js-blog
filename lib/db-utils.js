const DUMMY_POSTS = [
  {
    title: "Getting Started With Next JS",
    image: "getting-started-with-nextjs.png",
    excerpt: "NextJS is a frontend framework, which replaced the ReactJS",
    content: "NextJS is a frontend framework, which replaced the ReactJS",
    date: "2022-08-05",
    slug: "getting-started-with-nextjs",
    featured: true
  },
  {
    title: "Getting Started With Next JS 2",
    image: "getting-started-with-nextjs.png",
    excerpt: "NextJS is a frontend framework, which replaced the ReactJS",
    content: "NextJS is a frontend framework, which replaced the ReactJS",
    date: "2022-08-05",
    slug: "getting-started-with-nextjs2",
    featured: false
  },
  {
    title: "Getting Started With Next JS 3",
    image: "getting-started-with-nextjs.png",
    excerpt: "NextJS is a frontend framework, which replaced the ReactJS",
    content: "NextJS is a frontend framework, which replaced the ReactJS",
    date: "2022-08-05",
    slug: "getting-started-with-nextjs3",
    featured: true
  },
  {
    title: "Getting Started With Next JS 4",
    image: "getting-started-with-nextjs.png",
    excerpt: "NextJS is a frontend framework, which replaced the ReactJS",
    content: "NextJS is a frontend framework, which replaced the ReactJS",
    date: "2022-08-05",
    slug: "getting-started-with-nextjs4",
    featured: false
  },
];

export async function getAllPosts() {
  return DUMMY_POSTS;
}

export async function getFeaturedPosts() {
  return DUMMY_POSTS.filter(singlePost => singlePost.featured === true);
}

export async function getPost(slug) {
  return DUMMY_POSTS.find(singlePost => singlePost.slug === slug);
}