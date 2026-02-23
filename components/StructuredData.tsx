"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krish Sangani",
    url: "https://krishai.me",
    jobTitle: "Fullstack Developer",
    sameAs: [
      "https://github.com/krishpatel09",
      "https://linkedin.com/in/krish-sangani",
    ],
    description:
      "Seasoned Fullstack Developer specializing in Next.js, React, and TypeScript.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
