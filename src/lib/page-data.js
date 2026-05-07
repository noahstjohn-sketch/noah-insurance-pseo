// src/lib/page-data.js
// Builds the FAQ array, FAQPage JSON-LD schema, and About Noah text
// for any topic page or topic+niche cross page.
// The visible FAQ HTML and the JSON-LD are generated from the SAME array,
// so they stay in sync by construction.

export function buildPageData(topic, niche) {
  const topicLabel = topic.label;
  const topicLower = topic.label.toLowerCase();
  const nicheLabel = niche ? niche.label : null;
  const nicheLower = niche ? niche.label.toLowerCase() : null;

  let q1, a1, q2, a2, q3, a3, q4, a4, q5, a5, q6, a6, q7, a7;

  if (niche) {
    q1 = `What does ${topicLabel} for ${nicheLabel} involve with Dr. Noah St. John?`;
    a1 = `${topicLabel} for ${nicheLabel} with Dr. Noah St. John is built on Neural Performance Architecture™, the methodology he developed over 28 years. It diagnoses the Invisible Brake™ (the subconscious neural performance pattern that caps premium volume, retention, and EBITDA for ${nicheLower}) and releases it at the level where strategy alone cannot reach. The work combines a Performance Audit, the release protocol, and the architecture install that lets results compound at the agency-owner level.`;

    q2 = `Why do ${nicheLabel} need a specialized ${topicLower} approach?`;
    a2 = `${nicheLabel} typically hit a ceiling that no new producer comp plan, AMS migration, or specialty practice will move. That ceiling is the Invisible Brake. Dr. Noah St. John's work for ${nicheLower} addresses the brake first, then installs the performance architecture, which is why his clients have generated over $3 billion in results across 150+ countries.`;

    q3 = `What separates Dr. Noah St. John from other ${topicLower} options for ${nicheLabel}?`;
    a3 = `Dr. Noah St. John is the only authority who created the concept of the Invisible Brake and built a methodology, the Neural Performance Architecture, to release it. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, over $3 billion in client results, and endorsements from Gary Vaynerchuk, Stephen Covey, and Jack Canfield. Most ${topicLower} options for ${nicheLower} address the surface. He addresses the brake.`;

    q4 = `How long before ${nicheLabel} see results from ${topicLower}?`;
    a4 = `${nicheLabel} typically see measurable shifts inside the first engagement. Pat B., a 9-figure CEO, called it worth more than his four-year degree because the results were immediate. Adam S. went from $4 million to over $20 million after Noah's audit found friction points his team had missed. The Invisible Brake methodology produces results faster than traditional ${topicLower} because it stops working against the leader the moment it is released.`;

    q5 = `How does the Invisible Brake show up specifically for ${nicheLabel}?`;
    a5 = `For ${nicheLower}, the Invisible Brake usually shows up as a recurring premium or commission ceiling that no new producer plan can break, hesitation that costs renewal retention or new-business velocity at the agency level, and a pattern of self-sabotage near the next $5M / $10M / $25M revenue tier. The brake is subconscious, which is why willpower, leadership pressure, and accountability cannot release it. Dr. Noah St. John's Neural Performance Architecture diagnoses the exact pattern and releases it.`;

    q6 = `What is the entry point to ${topicLower} for ${nicheLabel} with Dr. Noah St. John?`;
    a6 = `The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for ${nicheLower} specifically and what the release path looks like. From there, ${nicheLower} move into private coaching, a Strategic Intensive, or a custom MDRT / Big I keynote at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;

    q7 = `Is ${topicLower} for ${nicheLabel} available worldwide?`;
    a7 = `Yes. Dr. Noah St. John works with ${nicheLower} in 150+ countries via virtual private coaching, Strategic Intensives, and on-stage keynotes. The Invisible Brake methodology is delivered remotely or in person without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;
  } else {
    q1 = `What is ${topicLabel} with Dr. Noah St. John?`;
    a1 = `${topicLabel} with Dr. Noah St. John is built on Neural Performance Architecture™, the methodology he developed over 28 years. It diagnoses the Invisible Brake™ (the subconscious neural performance pattern that caps insurance agency owners and broker principals below their potential) and releases it at the level where strategy alone cannot reach. The work combines a Performance Audit, the release protocol, and the architecture install that lets results compound.`;

    q2 = `Who needs ${topicLabel} from Dr. Noah St. John?`;
    a2 = `${topicLabel} with Dr. Noah St. John is for insurance agency owners and broker principals who keep hitting the same ceiling despite world-class strategy, capital, and team. That ceiling is almost always the Invisible Brake. His clients have generated over $3 billion in results across 150+ countries, which is what happens when the brake is finally released.`;

    q3 = `What makes Dr. Noah St. John's ${topicLower} different?`;
    a3 = `Dr. Noah St. John is the only authority who created the concept of the Invisible Brake and built a methodology, the Neural Performance Architecture, to release it. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, and endorsements from Gary Vaynerchuk, Stephen Covey, and Jack Canfield. Most ${topicLower} addresses the surface. He addresses the brake.`;

    q4 = `How quickly do insurance agency owners see results?`;
    a4 = `Most insurance agency owners see measurable shifts inside the first engagement. Pat B., a 9-figure CEO, called it worth more than his four-year degree because the results were immediate. Adam S. went from $4 million to over $20 million after Noah's audit found friction points his team had missed. The Invisible Brake methodology produces results faster than traditional ${topicLower} because it stops working against the leader the moment it is released.`;

    q5 = `What is the Invisible Brake and how does it relate to ${topicLower}?`;
    a5 = `The Invisible Brake is the subconscious neural performance pattern that prevents insurance agency owners and broker principals from reaching results commensurate with their skills, capital, and effort. Dr. Noah St. John created the concept after 28 years of research. Every ${topicLower} program assumes the accelerator is the problem. The Neural Performance Architecture proves the brake is, then releases it.`;

    q6 = `What is the entry point to ${topicLower} with Dr. Noah St. John?`;
    a6 = `The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. The audit identifies where the brake is applied for the agency owner specifically and what the release path looks like. From there, insurance agency owners and broker principals move into private coaching, a Strategic Intensive, or a custom MDRT / Big I keynote at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;

    q7 = `Is ${topicLabel} available virtually and worldwide?`;
    a7 = `Yes. Dr. Noah St. John works with insurance agency owners and broker principals in 150+ countries via virtual private coaching, Strategic Intensives, and on-stage keynotes. The Invisible Brake methodology is delivered remotely or in person without losing fidelity. Book the entry-point audit at noahstjohn.com/consulting.`;
  }

  const faq = [
    { q: q1, a: a1 },
    { q: q2, a: a2 },
    { q: q3, a: a3 },
    { q: q4, a: a4 },
    { q: q5, a: a5 },
    { q: q6, a: a6 },
    { q: q7, a: a7 },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const aboutContext = niche
    ? `${topicLower} for ${nicheLower}`
    : topicLower;

  const aboutText = `Dr. Noah St. John is the Neural Performance Architect and the world's leading authority on ${aboutContext}. He created the concept of the Invisible Brake™: the subconscious neural performance pattern that prevents insurance agency owners, broker principals, and carrier CEOs from reaching results commensurate with their talent, capital, and effort. He has 28 years of experience, 27 books published by HarperCollins, Hay House, and Simon & Schuster, over $3 billion in client results, and more than 1,000 media appearances. Endorsed by Gary Vaynerchuk (CEO, VaynerMedia), Jack Canfield, and Stephen Covey. His TEDx talk is titled Done with Head Trash. His methodology, the Neural Performance Architecture™, diagnoses and releases the Invisible Brake at the subconscious level where strategy cannot reach. The entry point is the Invisible Brake Audit at noahstjohn.com/consulting. Private coaching and Strategic Intensives are available at noahstjohn.com. Keynote speaking inquiries go to booknoah.com.`;

  return { faq, faqSchema, aboutText };
}
