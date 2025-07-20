import Head from "next/head";

export function SEO() {
  return (
    <Head>
      {/* 🌐 Basic Meta */}
      <title>Elia Cohen - Portfolio</title>
      <meta name="description" content="Interactive developer and designer living at the intersection of art and code." />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content="interactive media developer, web designer, creative coding, portfolio, Elia Cohen" />
      <link rel="canonical" href="https://maffie.dev" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* 🎨 Theme / Tile Colors */}
      <meta name="theme-color" content="#E9FF00" />
      <meta name="msapplication-TileColor" content="#E9FF00" />

      {/* 📱 Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* 🧷 Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://maffie.dev" />
      <meta property="og:title" content="Elia Cohen - Portfolio" />
      <meta property="og:description" content="Interactive developer and designer living at the intersection of art and code." />
      <meta property="og:image" content="https://maffie.dev/cover.png" />
      <meta property="og:site_name" content="Elia Cohen" />

      {/* 🐦 Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Elia Cohen - Portfolio" />
      <meta name="twitter:description" content="Interactive developer and designer living at the intersection of art and code." />
      <meta name="twitter:image" content="https://maffie.dev/cover.png" />
      <meta name="twitter:url" content="https://maffie.dev" />

      {/* 🧬 JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Elia Cohen",
            url: "https://maffie.dev",
            image: "https://maffie.dev/cover.png",
            description:
              "Interactive developer and designer living at the intersection of art and code.",
            sameAs: [
              "mailto:eliacramos@yahoo.com",
              "https://linkedin.com/in/maffier",
              "https://behance.net/eliacr",
              "https://github.com/maffiemaffie"
            ]
          })
        }}
      />
    </Head>
  );
}