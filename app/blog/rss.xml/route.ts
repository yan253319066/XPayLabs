import { blogPosts } from '@/lib/blog-posts';

export async function GET() {
  const baseUrl = 'https://www.xpaylabs.com';

  const items = blogPosts
    .map((post) => {
      const url = `${baseUrl}${post.href}`;
      // 解析 "June 2026" 格式日期
      const pubDate = new Date(post.date);
      const dateStr = isNaN(pubDate.getTime())
        ? new Date().toUTCString()
        : pubDate.toUTCString();

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <pubDate>${dateStr}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>XPay Labs (xpay) — Self-Hosted Crypto Payment Blog</title>
    <description>Guides, comparisons, and deep dives on self-hosted crypto payment infrastructure. From deployment walkthroughs to competitive analysis.</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
