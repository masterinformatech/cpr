const WP_API_URL = "https://admin.cpr-cg.org/graphql";

export interface WPPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage: {
    node: {
      uri: string;
    };
  } | null;
}

export interface WPPosts {
  posts: {
    nodes: WPPost[];
  };
}

export async function fetchWPPosts(first = 10): Promise<WPPost[]> {
  const query = `
    query GetPosts($first: Int!) {
      posts(first: $first, where: { status: PUBLISH }) {
        nodes {
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              uri
            }
          }
        }
      }
    }
  `;

  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { first } }),
    next: { revalidate: 60 },
  });

  const json = (await res.json()) as { data: WPPosts };
  return json.data.posts.nodes;
}