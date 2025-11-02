export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
  ];
}
