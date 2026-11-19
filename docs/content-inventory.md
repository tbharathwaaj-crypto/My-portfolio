# Source content inventory

Source: the supplied `saveweb2zip-com-bharathwaajintoux-framer-website (1).zip` archive. It contains one mobile-rendered HTML capture of the original homepage plus local image, font, and video assets. The captured page is treated as a content source; its layout and styling were not reused.

The extraction includes the full raw source folder alongside this project. `asset-manifest.json` indexes the source files and records which image variant was selected for the new site.

## Identity and positioning

- Name appears as **Bharathwaaj Murugan** and in the page title as **Bharathwaaj .V.M**.
- Role labels in the source: **User Experience/Product Designer**, **User Experience/Interaction Designer**, and **Creative UX Designer**.
- Personal introduction: curiosity and empathy inform design solutions; experience includes design systems, AI agentic websites for non-technical users, and banking products.
- The current site presents Bharathwaaj as a product/UX designer working across user needs, technology, and creative problem solving.
- Design quote: “Design isn’t just how it looks, it’s how it works.”
- Background: Computer Science foundation; interest shifted toward building experiences, leading to User Experience Design.
- Belief: “Creators Think Differently.” The source says anyone can follow, but only a few choose to create; its stated aim is to align logic with empathy for meaningful user experiences.

## Projects

| Project | Source description and treatment |
| --- | --- |
| AAVA 2.0 | Simplified, structured AI agents and workflow configuration; source reports approximately 40% reduced manual task effort. Original AAVA wordmark retained. |
| HP Inc. | UX improvements for HP Global Solutions and printer parts management platforms to streamline complex enterprise workflows. Original HP mark retained. |
| Axos Bank | Designed and scaled the bank’s design system for consistency across digital banking products. Original Axos mark retained. |
| CVS Healthcare | Created accessible, user-centered interfaces to improve clarity and trust in digital healthcare. Original CVS Health mark retained. |
| Startwise AI — From Idea to Execution | UX case study exploring AI and structured workflows to help users research, plan, and turn business ideas into execution-ready outcomes. Original cover visual and Figma prototype link retained. |
| TSB — Saving Pot | Shared savings concept for couples: shared goals, real-time progress, visible individual contributions, transparency, and trust. Original concept visual and Figma prototype link retained. |
| Flexi UI Kit | Figma UI kit with variable tokens, light/dark mode switching, and customizable themes. Original visual and archived `/trenco` project route retained. |
| Gallivanter | Social travel application case study. The source has a project visual and title but no project-specific written summary; this is stated on the detail page. |
| AI Operations Analytics | Dashboard providing a centralized view of AI performance, usage, and system health. Original dashboard screenshot and archived `/trenco` route retained. |
| Surgi Tech | Landing page for a surgical technical supply industry. The source says it received very good customer reviews and offers easy contact support. Original visual and Figma link retained. |

The original route `./trenco` resolves against the archived portfolio hostname and is included for Flexi and AI Operations Analytics because both cards used it. The two Figma links are included as captured. The archive does not contain full case-study source material for every project, so no project role, research process, or additional results have been added.

## Professional experience

- **Senior Associate UX Designer:** Works across user needs, business goals, and technical feasibility; turns complex problems into intuitive, scalable experiences; contributes to product strategy, design systems, experience direction, design initiatives, and cross-functional collaboration.
- **Associate UX Designer:** Play+ Design System and Figma tokenization; components for prototyping and handoff; user and task flows; usability testing; AI agentic and workflow builders; contribution to the AAVA Agentic Platform.
- **UX Designer Intern:** Two-month internship, June 2024–July 2024, after formal training; stakeholder interviews, advanced Figma workflows, usability testing, and user-centered projects.
- **UI/UX Trainee:** Six-month program; design thinking, user research, wireframing, prototyping, end-to-end UX case studies, Figma, and usability testing. Dates are not present.
- Role descriptions for the first two positions appear in responsive variants and repeat in the archive. They are consolidated here. The source does not specify employer names or dates for those roles; the site leaves them unspecified.

## Capabilities

Design Thinking; Design System; User Research; Journey Mapping; Accessibility; Interaction Design; UX Writing; User Testing; Information Architecture; User and Task Flow; Wireframing & Prototyping; Visual Design.

Descriptions are preserved in `src/data/content.ts` and shown through an accessible selectable capability list.

## Tools

Figma (Advanced); Claude AI; Framer; Lovable.dev; ChatGPT; Maze; Miro Board; Jira; Bolt.dev; Adobe XD; Adobe Premiere Pro (shown as “Premier Pro” in the source); Adobe Photoshop.

The source labels Figma as “Advanced” in its tool section and “Expert” in a responsive card; the new site uses “Advanced” and retains the source capability description. “Bolt.dev” is the tool label; the source description contains the spelling “Bold.dev.”

## Achievements and learning

- **Champion of Excellence — Q1 & Q2 2025:** Ascendion award for consistent performance and high-impact UX contributions. The award image is included.
- **Product–Business Alignment Masterclass:** Session by Satyam Kantamneni, Founder of UX Reactor, on aligning product strategy and business objectives.
- **Collaborative Ideation Through Card Sorting:** Applied card sorting in team workshops to structure information architecture and support user-centered ideation. Workshop imagery is included.
- **Learning the 5D UX Problem-Solving Framework:** Received *User Experience Design to Fuel Business Growth* as a gift and learned the 5D methodology. The source spells the giver’s surname “Kantemneni” here, while the masterclass entry spells it “Kantamneni”; both spellings are retained in site data.
- **Generative AI 101 by Cognixia:** Level 101 certification covering LLMs, prompt engineering, and real-world GenAI applications. The certificate image is included.

## Forms, links, and missing items

- The source includes a portfolio feedback form and a “Lets Connect” form with name, email, and contact number fields. The new site keeps both flows, adds client-side validation, and reports clearly that no message is sent until an endpoint is configured.
- The source has no working submission endpoint in the archive. Set `VITE_CONTACT_ENDPOINT` and `VITE_FEEDBACK_ENDPOINT` to public form API URLs to enable actual submissions. The frontend does not contain or request secrets.
- The archive had no resume file or download URL, LinkedIn profile URL, email address, phone number, or individual portrait photograph. Bharathwaaj later supplied a LinkedIn profile URL and an illustrated portrait. Resume, email, and phone details remain placeholders. The original team and workshop photographs are included.
- The source includes Figma prototype links for Startwise AI, TSB Saving Pot, and Surgi Tech; an original portfolio URL; two `./trenco` routes; and a Framer platform-promotion link. The portfolio URL and project links are included on the site. The Framer promotion is recorded in the source manifest and omitted from the portfolio because it is a site-builder advertisement.
- The archive does not contain an employment timeline with dates beyond the internship, role-specific responsibilities for every position, full research documentation for every project, or a complete case-study deck for all work.

## Source duplicates and naming notes

- The captured homepage contains desktop/mobile content variants and repeated project cards. Exact repeated copy was consolidated.
- The source contains both `Bharathwaaj Murugan` and `Bharathwaaj .V.M` as name forms; the site uses the full name from the source content.
- “Premier Pro” and “Adobe Premiere Pro” refer to the same tool; the product name is normalized in the site.
- Tool descriptions, achievement descriptions, and all listed project summaries remain available in the data source and inventory.
- Poppins is the requested body font and loads from Google Fonts. PP Neue Machina is the requested heading font, but its font file is not in the supplied archive; headings use it when installed locally and otherwise fall back to Space Grotesk. The missing font is recorded in the asset manifest.
- A user-provided illustrated portrait replaces the supplied WebM clip in the hero section.
