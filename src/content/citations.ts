export const codes={
  s312:{t:"Minimum front yard setback",q:"4. Minimum front yard setback (linear ft.) — a. Minimum except as provided for in b and c: <mark>20 · 20 · 20 · 20 · 18 · 18 · 18</mark>"},
  s1210:{t:"Projections into setbacks",q:"Projecting Feature: Cornices, eaves, roof overhangs, brackets, bay windows and similar features — Front Setback Area: <mark>30 inches</mark>"},
  drive:{t:"Sec. 90-1423(B)(22)",q:"3. Bank — a. <mark>With drive-through: C</mark> (conditionally permitted) in each commercial zone · Sec. 90-1423(B)(22)"},
  cfc903:{t:"[A] 104.2.1 Substantial improvement",q:"For applications for reconstruction, rehabilitation, repair, alteration, addition or other improvement of existing buildings or structures located in flood hazard areas, <mark>the building official shall determine if the proposed work constitutes substantial improvement</mark>…"},
  res041:{t:"Sec. 82-41 Connection fees",q:"There shall be paid to the city fees for connection to the city sewer system <mark>prior to any connection being made</mark>. The amount of such fees shall be set from time to time by the council, and a schedule of such fees is on file in the city clerk's office."},
  fp:{t:"[A] 104.10.1 Flood hazard areas",q:"The building official shall not grant modifications to any provision required in flood hazard areas… unless a determination has been made that: 1. <mark>A showing of good and sufficient cause</mark> that the unique characteristics of the size, configuration or…"}
};
// Document viewer deep links: /document/<filename>?annotation=<annotations.id>; rows from the annotations table
const APP='https://app.redflagdata.com';
const ART11='ca/hemet/municipal_code/article_xi _single_family_residential_zones.pdf';
const ART26='ca/hemet/municipal_code/article_xxvi _commercial_zones.pdf';
const CH14='ca/hemet/municipal_code/co_ch14bubure.pdf';
const CH82='ca/hemet/municipal_code/co_ch82ut.pdf';
const A11='file-article_xi__single_family_residential_zones_pdf-61727469636C655F7869205F73696E676C655F66616D696C795F7265736964656E7469616C5F7A6F6E65732E706466';
const A26='file-article_xxvi__commercial_zones_pdf-61727469636C655F78787669205F636F6D6D65726369616C5F7A6F6E65732E706466';
const C14='file-co_ch14bubure_pdf-636F5F636831346275627572652E706466';
const C82='file-co_ch82ut_pdf-636F5F6368383275742E706466';
export const docs={
  s312:{id:ART11,ann:`${A11}-page-8`,page:8,name:'Article XI. Single-Family Residential Zones'},
  s1210:{id:ART11,ann:`${A11}-page-10`,page:10,name:'Article XI. Single-Family Residential Zones'},
  drive:{id:ART26,ann:`${A26}-page-5`,page:5,name:'Article XXVI. Commercial Zones'},
  cfc903:{id:CH14,ann:`${C14}-page-6`,page:6,name:'Chapter 14 - Buildings and Building Regulations'},
  res041:{id:CH82,ann:`${C82}-page-3`,page:3,name:'Chapter 82 - Utilities'},
  fp:{id:CH14,ann:`${C14}-page-7`,page:7,name:'Chapter 14 - Buildings and Building Regulations'}
};

export const citationHref = (key: keyof typeof docs) => { const doc=docs[key]; return `${APP}/document/${doc.id.split("/").map(encodeURIComponent).join("/")}?annotation=${encodeURIComponent(doc.ann)}`; };
