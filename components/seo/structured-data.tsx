import { LINKS } from "@/constants";

export const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Fulsome CG International VFX Academy",
    alternateName: "Fulsome CG",
    url: "https://www.fulsomecg.in",
    logo: "https://www.fulsomecg.in/logo.png",
    description:
      "India's first job-based VFX training centre with AI integration offering comprehensive courses in rotoscopy, paint prep, compositing, and visual effects in Thrissur, Kerala.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36/4063, City Centre",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9061356366",
      contactType: "Admissions",
      email: "info@fulsomecg.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Malayalam"],
    },
    sameAs: [
      "https://www.instagram.com/fulsomecg/",
      "https://www.facebook.com/fulsomecg/",
      "https://www.youtube.com/@fulsomecg",
    ],
  };

  const courseSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "AVFX - Advanced VFX Course",
      description:
        "Comprehensive 9-month VFX training program covering rotoscopy, paint & prep, compositing, motion graphics, and AI-integrated workflows with guaranteed internship.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Fulsome CG International VFX Academy",
        sameAs: "https://www.fulsomecg.in",
      },
      educationalCredentialAwarded: "VFX Professional Certificate",
      timeRequired: "P9M",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: ["Onsite", "Online", "Blended"],
        courseWorkload: "P9M",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "RPVFX - Roto & Paint VFX Course",
      description:
        "Intensive 6-month program specializing in rotoscopy and paint & prep techniques using Mocha Pro, Silhouette FX, and Nuke for aspiring prep artists.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Fulsome CG International VFX Academy",
        sameAs: "https://www.fulsomecg.in",
      },
      educationalCredentialAwarded: "Roto & Paint Specialist Certificate",
      timeRequired: "P6M",
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "RTVFX - Rotoscopy Training",
      description:
        "Fast-track 3-month rotoscopy training program for quick entry into the VFX industry with frame-by-frame element isolation techniques.",
      provider: {
        "@type": "EducationalOrganization",
        name: "Fulsome CG International VFX Academy",
        sameAs: "https://www.fulsomecg.in",
      },
      educationalCredentialAwarded: "Rotoscopy Professional Certificate",
      timeRequired: "P3M",
    },
  ];

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Fulsome CG International VFX Academy",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {courseSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
    </>
  );
};
