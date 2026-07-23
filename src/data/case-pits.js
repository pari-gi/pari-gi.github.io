import heroFinal from '../assets/photos/image_105__66d2f9be.jpg'
import originalSite from '../assets/photos/image_91__0913c1c4.jpg'
import heatmapOld from '../assets/photos/image_86__7b20efd4.jpg'
import sketch1 from '../assets/photos/IMG_1902_2__f2cc4d6c.jpg'
import sketch2 from '../assets/photos/IMG_1904_2__6ab1f512.jpg'
import sketch3 from '../assets/photos/IMG_1903_2__f7359383.jpg'
import iter1Mine from '../assets/photos/image_104__6369c883.jpg'
import iter1CoA from '../assets/photos/image_105__ee1b3ca3.jpg'
import iter1CoB from '../assets/photos/image_104__2ca0cfa4.jpg'
import heatMine from '../assets/photos/image_104__10522735.jpg'
import heatCo from '../assets/photos/image_105__d2b04b61.jpg'
import iter2 from '../assets/photos/image_104__78883815.jpg'
import iter3A from '../assets/photos/image_105__a3d94987.jpg'
import iter3B from '../assets/photos/image_104__59d6ccbf.jpg'
import iter4 from '../assets/photos/image_105__66d2f9be.jpg'
import iter4b from '../assets/photos/image_104__c4356759.jpg'

export default {
  slug: 'pits',
  name: 'Princeton IT Services',
  role: 'Product design intern',
  heroImage: heroFinal,
  heroHighlights: [
    'New hero design.',
    'New conversion strategy.',
    'New card system.',
    '',
    'Predictive heatmaps.',
    'Live A/B testing.',
    '+340% division clicks.',
  ],
  sections: [
    {
      title: 'Overview',
      layout: 'overview',
      heading: '70,000 visitors. Zero conversions.\nLets fix it up.',
      rows: [
        {
          eyebrow: 'Scope',
          items: [
            ['Product Design Intern', 'One of the two interns'],
            ['6 Week Timeline', 'Start to finish'],
            ['Hero redesign', 'Desktop'],
          ],
        },
        {
          eyebrow: 'Problem',
          body: '70,000 monthly visitors and almost none converting. The homepage buried five business subdivisions and gave enterprise buyers no clear path to act.',
        },
        {
          eyebrow: 'Solution',
          body: 'A redesigned, conversion-focused homepage — horizontal flip cards surfacing all five subdivisions at once, a clear value proposition, and one focused CTA.',
        },
        {
          eyebrow: 'Result',
          body: 'My variant drove +340% subdivision clicks, +127% on the "Free Consultation" CTA, and cut bounce 41%.',
        },
      ],
    },
    {
      title: 'Context',
      heading: 'Context',
      intro: '70,000 monthly visitors. Near zero conversions. Average session duration under 7 seconds.\nThe hero section — the first touchpoint for every visitor — was actively working against the business.',
      rows: [
        {
          eyebrow: 'My Initial Assessment:',
          statement: 'Audited the hero and found four failures: it looked outdated, said nothing about what PITS does, gave visitors no reason to click, and buried its five revenue divisions as tiny logos.',
          body: "Visually outdated. Cluttered grid layout, stock imagery, mismatched typography. The design language hadn't evolved in years. Against any modern B2B competitor, the first impression was immediate distrust.\n\nNo value proposition. A rotating carousel cycling through unrelated service announcements told visitors nothing about what Princeton IT Services does or why they should care.\n\nZero conversion clarity. Subdivision logos sat as passive tiles — no hover states, no clear affordance, nothing that read as clickable. A first time visitor had no idea what was interactive and what wasn't. The page offered no obvious next step.\n\nInvisible divisions. Five revenue generating business divisions were reduced to small logos in a grid. No context. No description. No reason to click. The company's most valuable assets were completely invisible.",
        },
        {
          eyebrow: 'Goals:',
          statement: 'Set three specific goals that target the business, UX, and conversion.',
          body: 'Business Goal: Convert a high traffic but zero engagement hero into an active lead generation surface.\n\nUX Goal: Establish identity and value proposition within the first 10 seconds of landing.\n\nConversion Goal: Drive measurable click-through to all five subdivision sites.',
        },
        {
          pair: [
            {
              eyebrow: 'Challenges:',
              body: "Diagnose why a high-traffic page was generating zero engagement\nRedesign the hero to communicate PITS's identity within 10 seconds\nUse above the fold real estate to drive qualified traffic to five subdivision sites\nModernize the section without updating the rest of the site",
            },
            {
              eyebrow: 'Constraints:',
              body: 'Only two interns on the project\nHero redesign section only\nLimited research budget',
            },
          ],
        },
      ],
    },
    {
      title: 'The Existing Site',
      heading: 'The Existing Site',
      intro: 'Before designing anything, we tested what was already there. The data confirmed the diagnosis.',
      rows: [
        {
          eyebrow: 'The original design:',
          body: 'A tile layout with a rotating carousel on the left and subdivision logo tiles on the right. No unified headline. No clear hierarchy. Competing focal points fighting for attention.',
          images: [{ src: originalSite, w: 471, alt: 'The original Princeton IT Services hero' }],
        },
        {
          eyebrow: 'Heatmap Analysis:',
          body: 'The Attention Insight predictive heatmap exposed a critical attention distribution failure across every relevant zone.',
          images: [{ src: heatmapOld, w: 940, alt: 'Predictive heatmap of the original hero' }],
        },
        {
          pair: [
            {
              body: "Heading — 14.9%\nThe majority of predicted attention landed on the carousel headline — but this is misleading. The heading was rotating through unrelated service announcements. Attention was captured by movement, not meaning. Users were reading a Windows 10 update notice on a B2B IT company's homepage.\n\nPrimary CTA — 2.4% / 0.7%\nThe two most important action buttons on the page (Get Free Consultation and Learn More) captured a combined 3.1% of attention. Effectively invisible. A visitor motivated to convert had no clear path forward.",
            },
            {
              body: 'Contact CTA — 0.3%\nThe nav bar contact button registered near zero fixation. The highest intent action on the entire page was the least seen element.\n\nSubdivision Logos — 3.9% / 3.0% / 1.1%\nThree subdivision logos combined for just 8% of total predicted attention — and that attention was passive. Logo recognition, not click intent.\n\nThe right half of the page — effectively dead.\nThe entire subdivision section — three divisions, real revenue opportunities — generated less predicted engagement than the rotating carousel heading alone.',
            },
          ],
        },
        {
          eyebrow: 'User Testing — 10 Second Test:',
          body: 'Goal: Validate whether the hero communicates who Princeton IT Services is, what they offer, and where to go next — within the first 10 seconds of landing.\n\nProcess: Showed the original hero to 12 participants for exactly 10 seconds, then closed it. Asked three questions: "What does this company do?", "What services do they offer?", and "Where would you click first?"\n\nResults:\n6 of 12 participants could not accurately describe what Princeton IT Services does\n0 of 12 recalled seeing or registering any subdivision links\n9 of 12 could not identify a clear next step or clickable element\n\nFindings: Zero brand recall. Zero subdivision awareness. Zero actionable next step. The hero wasn\'t just underperforming — it was actively failing to communicate anything meaningful at the most critical moment of the user journey.',
        },
        {
          eyebrow: 'User Testing — Comprehension Test:',
          body: 'Goal: Assess whether extended exposure to the hero produces meaningful comprehension — specifically around PITS\'s service offering and subdivision structure.\n\nProcess: Participants viewed the original hero for a full, uninterrupted session with no time limit. Then asked: "What does this company do?", "Can you name any of their services or divisions?", and "Who do you think this is for?"\n\nResults:\n73% failure rate on subdivision recall\nAverage comprehension score: 23%\n17 of 22 described the company only as "an IT company" with no further detail\n2 of 22 could name more than one subdivision\n14 of 22 could not identify who the target audience was\n\n"I saw some logos at the bottom but didn\'t know what they were for"\n"There was too much going on — I didn\'t know where to look"\n"I assumed it was for regular consumers, not businesses"\n\nFindings: Extended viewing time did not meaningfully improve comprehension. The information architecture was broken at a structural level. Users weren\'t missing the subdivisions because they weren\'t looking. They were missing them because nothing on the page communicated that those logos represented distinct, clickable business lines worth exploring.',
        },
        {
          eyebrow: 'The Verdict:',
          statement: "The original hero wasn't just visually outdated — it was structurally broken.",
          body: "Users couldn't identify the brand, couldn't find the subdivisions, and had no clear path to convert. Every test pointed to the same root cause: a page with no hierarchy, no value proposition, and no conversion intent baked into the design.",
        },
      ],
    },
    {
      title: 'Low Fidelity Planning',
      heading: 'Low Fidelity Planning',
      intro: 'Rapid concept generation with leadership in the room — seven directions on paper before anything touched Figma.',
      rows: [
        {
          eyebrow: 'Ideation session with Leadership:',
          statement: 'No polished decks, just sketches, rapid concept generation, and real time stakeholder input shaping the direction.',
          body: "Seven distinct layout concepts explored on paper, each addressing the same core tension: how do you surface five subdivision destinations without sacrificing the hero's primary job of establishing PITS's brand identity?",
          images: [
            { src: sketch1, w: 340, alt: 'Ideation sketch 1' },
            { src: sketch2, w: 340, alt: 'Ideation sketch 2' },
            { src: sketch3, w: 340, alt: 'Ideation sketch 3' },
          ],
        },
        {
          eyebrow: 'The seven directions explored:',
          statement: 'Two directions emerged from the seven explored: sticky scroll and horizontal flip cards. Both solved the visibility problem differently — and that difference became the central design debate of the project.',
          body: 'Stacked tiles / sticky scroll — Subdivisions stack vertically. User scrolls to reveal each one sequentially. Prioritizes depth of content per division.\n\nHorizontal flip cards — All five subdivisions visible above the fold simultaneously. Cards flip on interaction to reveal detail. Prioritizes immediate visibility over content depth.\n\nVertical flip cards — Similar to horizontal but oriented differently. Explores whether a sidebar-style layout could work alongside the hero copy.\n\nRotating card deck — An animated card stack cycles through subdivisions automatically. Prioritizes visual interest but reintroduces the carousel problem from the original design.\n\nTile grid — A clean modular grid of subdivision cards. Simple, structured, no interaction required.\n\nTile grid with promotions & announcements — An expanded version of the tile grid that flexes to include announcements alongside subdivision links. Prioritizes versatility and content dynamism.\n\nVertical Scroll Cards — A hybrid approach combining card based subdivision display with a vertical scrolling interaction. Explores middle ground between sticky scroll depth and card based visibility.',
        },
        {
          eyebrow: 'What this session taught me about collaboration:',
          statement: 'Biggest lesson: selling a sketch with confidence in a live C-suite room.',
          body: "Working alongside another designer in a live stakeholder session surfaced something I hadn't anticipated — two designers in the same room, given the same brief, will solve for completely different things.\n\nMy instinct was to optimize for immediate visibility. My co-intern's instinct was to optimize for content depth. Neither was wrong. But the decision between those two drove every subsequent iteration.\n\nRunning low fid ideation with C-suite present also changed the dynamic of the session. Decisions that might have taken days of async feedback happened in real time. But it also meant learning to present half-formed ideas with confidence. To sell a sketch and not a mockup, that skill, advocating for a design direction before it looks like anything, turned out to be one of the most valuable things I took away from this project.",
        },
      ],
    },
    {
      title: 'From Sketch to Solution',
      heading: 'From Sketch to Solution',
      intro: 'Every iteration surfaced a new constraint. Every constraint sharpened the design. What followed was four rounds of building, testing, and advocating until the data made the decision for us.',
      rows: [
        {
          eyebrow: 'ITERATION 1',
          statement: 'Rather than defaulting to a single shared direction, both interns developed independent concepts in parallel. The goal was solving the same problem differently.',
        },
        {
          eyebrow: 'My Direction — Subdivision Visibility',
          statement: 'Speed over depth. Show all five subdivisions and a conversion path right away — no scrolling, no clicking, so visitors act before they leave.',
          body: 'A dark, immersive hero anchored by a bold headline and clear value proposition. Service category tags positioned for scannability. Single CTA. Clean. Directed.\n\nBelow the hero: horizontal flip cards with all five subdivisions — no scroll required, no interaction barrier between a visitor and a conversion path.',
          images: [{ src: iter1Mine, w: 571, alt: 'My iteration 1 direction' }],
        },
        {
          eyebrow: "Co-Intern's Direction — Content Rich Divisions",
          statement: 'Depth over speed. Give each subdivision room to explain itself. Visitors leave understanding each business line completely.',
          body: 'A lighter hero featuring the brand name and three punchy descriptors. Subdivision logos presented as a scrolling row beneath the hero.\n\nThe main feature to showcase the subdivisions was an expandable stacked cards section. On hover, each card will provide full context on the division and the services it provides.',
          images: [
            { src: iter1CoA, w: 423, alt: "Co-intern's direction, screen 1" },
            { src: iter1CoB, w: 495, alt: "Co-intern's direction, screen 2" },
          ],
        },
        {
          pair: [
            {
              eyebrow: 'Heatmap Analysis — My Design',
              body: 'Strong headline fixation at 18.7% confirmed the value proposition was landing. Body copy at 9.6% suggested users were reading past the headline, a positive retention signal. Division cards registered meaningful secondary CTA engagement across all four visible cards (5.8% → 14.2%), with attention increasing left to right, confirming the horizontal layout was successfully directing eyes toward subdivisions.\n\nThe critical gap: primary CTA at 1.7%. The Request FREE Consultation button was present but invisible from an attention standpoint. On a page receiving 70,000 monthly visits, a 1.7% fixation rate on the primary conversion action is a compounding problem.',
              image: heatMine,
            },
            {
              eyebrow: "Heatmap Analysis — Co-Intern's Design",
              body: "Higher headline fixation at 22.9%. The large bold title commanded strong attention. The subheading trio captured 19.4% — the highest text fixation of either design. But the attention pattern told a concerning story: 42.3% of total predicted fixation was absorbed by the headline and subheading zone alone, leaving almost nothing for conversion.\n\nPrimary CTA at 3.1% — still critically underperforming. The subdivision logo ticker registered only 3.1% as a combined secondary CTA, all six divisions condensed into a single passive scrolling row, generating the same fixation as a single button.\n\nThe right half of the design, stock photography of a meeting room, captured significant residual attention with zero conversion value. Classic visual dead weight.",
              image: heatCo,
            },
          ],
        },
        {
          eyebrow: 'Key Takeaways',
          statement: 'Both designs failed — differently. Mine converted attention into division clicks, hers into brand recognition. Keep my hero, fix the CTA, rethink the division row.',
          body: 'My design converted attention into subdivision engagement. Hers converted attention into brand recognition. Neither fully solved the problem — but they failed differently, and that difference was instructive.\n\nWhat this meant for Iteration 2:\nKeep my hero — the attention distribution across headline, body, and divisions was the stronger conversion architecture\nFix the CTA — 1.7% fixation is not acceptable. Needs higher contrast, stronger visual weight, or repositioning\nRethink the division row — logo format compresses five business lines into a passive band that generates zero engagement\n\nThe merged direction was clear: my hero structure, her division content depth, some revisions.',
        },
        {
          eyebrow: 'C-Suite Presentation',
          statement: 'The decision was straightforward: My hero. Her cards. Move forward together.',
          body: "Both directions presented to leadership. The feedback was clear.\n\nMy hero was strongly preferred. The dark immersive treatment, clear hierarchy, and single focused primary CTA read as modern, credible, and on brand for an enterprise B2B company. My co-intern's hero was set aside.\n\nHowever, her subdivision card pattern was preferred. The expanded content depth per division gave stakeholders confidence that visitors would understand what each business line actually does.",
        },
        {
          eyebrow: 'ITERATION 2',
          statement: 'Following C-suite feedback, both interns merged their strongest elements into a single unified direction. I refined the hero. The other intern rebuilt the card section with expanded division content.',
          images: [{ src: iter2, w: 441, alt: 'Iteration 2 merged design' }],
        },
        {
          pair: [
            {
              eyebrow: 'The Refined Hero',
              body: 'Carried forward the dark immersive hero from Iteration 1 with key updates informed by the heatmap data. Headline updated to be sharper, more B2B specific value proposition. Service category pills repositioned horizontally below center. CTA repositioned to the lower right with higher visual contrast.\nPassed the Heatmap test with high marks!',
            },
            {
              eyebrow: 'The Rebuilt Cards',
              body: 'Expanded from passive tiles to full division cards — each with division name, category label, three key service offerings, and a direct URL CTA.\n\nSticky scroll pattern: cards stack vertically, expanding on scroll to reveal content. Significantly more content depth than any previous iteration.',
            },
          ],
        },
        {
          eyebrow: 'The Problem Nobody Anticipated:',
          statement: 'The new hero was modern. The new cards looked like the old website. An inconsistent design reads as an untrustworthy brand.',
          body: "The hero was modern. But the card aesthetic — light backgrounds, blue accent typography, checklist formatting — matched the visual language of the existing legacy site beneath it. The seam between the new hero and the card section was jarring. A visitor scrolling down went from a modern dark immersive header directly into what looked like the old website. It felt lazy.\n\nA visually inconsistent page communicates inconsistency in the brand. For a B2B company trying to establish credibility with enterprise buyers, that mismatch undermined the exact impression the new hero was designed to create.\n\nC-Suite Feedback: Liked the direction. Acknowledged the mismatch. Agreed the card section needed to be brought forward visually to match the hero's treatment.",
        },
        {
          eyebrow: 'ITERATION 3',
          statement: 'The visual mismatch had one clear fix: rebuild the card section in a dark aesthetic that matched the hero.',
          body: "Cards were rebuilt with a dark theme. The visual language now flowed from hero to card section without a jarring seam. The logo bar between the hero and cards added a transitional element that helped bridge the two zones.\n\nTwo variants produced. I produced the one on the left, one that was more consistent with the old website. My co-intern produced the one on the right, one that tied in with the hero.\n\nC-suite approved the first design. Dark aesthetic solved the mismatch problem. We handed off the designs to the developer.",
          images: [
            { src: iter3A, w: 492, alt: 'Iteration 3, variant 1' },
            { src: iter3B, w: 477, alt: 'Iteration 3, variant 2' },
          ],
        },
        {
          eyebrow: 'Then I raised a concern:',
          statement: "Pushed back on the sticky scroll: users bouncing in 7 seconds won't scroll to reach divisions three, four, and five. Content depth is worthless if no one reaches it. The team's call: build both, let live traffic decide.",
          body: "Sticky scroll is a sequential reveal pattern. It rewards patience and assumes investment. On a page where users were already bouncing in 7 seconds, requiring them to scroll through five stacked divisions to find the one they care about introduces friction at the wrong moment.\n\nA user who doesn't scroll past the first or second card never sees divisions three, four, or five. On a page receiving 70,000 monthly visits, that's a compounding conversion loss.\n\nThe co-intern's sticky scroll variant prioritized content depth. My argument was that content depth is worthless if users never reach it.\n\nThe team agreed the concern was valid, but rather than abandoning the sticky scroll direction entirely, they made a more rigorous call. Develop both variants. Launch simultaneously. Let real traffic data decide.",
        },
        {
          eyebrow: 'ITERATION 4',
          statement: 'The new design incorporated five cards displayed simultaneously above the fold. No sticky scroll. No sequential reveal. All five divisions visible, labeled, and clickable the moment a visitor lands.',
          body: 'Both designs (iteration 3 and iteration 4) were developed!',
          images: [
            { src: iter4, w: 656, alt: 'Iteration 4 final design' },
            { src: iter4b, w: 656, alt: 'Iteration 4 detail' },
          ],
        },
      ],
    },
    {
      title: 'The Final Test',
      heading: 'The Final Test',
      intro: 'We put the designs in front of real users. The data that came back was used to inform our final hero decision.',
      rows: [
        {
          eyebrow: 'Preference Testing:',
          body: 'Goal: Validate which variant users found clearer, more trustworthy, and more navigable before either design went live.\n\nProcess: Both developed variants presented to participants side by side. Asked three questions: "Which design makes it clearer what this company does?", "Which would you trust more as a business?", and "Where would you click first?"\n\nResults:\n73% preferred the horizontal card variant for clarity\n79% said the horizontal card layout made the subdivisions feel more distinct and clickable\n83% described the sticky scroll variant as "overwhelming" or "too much to read through"\n\n"The scroll version has a lot of content but if I\'m not interested in the subdivisions, but rather Princeton IT Services, I\'m completely confused, there is so much information I don\'t need. It is distracting."\n\nFinding: Users consistently favored the horizontal card variant on every measured dimension: clarity, trust, navigability, and subdivision recall.',
        },
        {
          eyebrow: 'LIVE A/B TESTING:',
          body: "Both variants developed and deployed for 2 weeks to the live Princeton IT Services homepage against the full 70,000 monthly visitor traffic pool.\n\nMy variant (Horizontal flip cards) went live first.\nSubdivision click through rate: +340%\nAverage session duration: +36 seconds\nBounce rate: down 41%\nRequest FREE Consultation CTA clicks: +127%\n\nAll five subdivision sites saw increased referral traffic within the first week.\n\nThe numbers validated everything the heatmap data and comprehension testing had pointed toward. The design drove huge engagement improvement.\n\nThen the internship ended.\n\nThe co-intern's sticky scroll variant went live for its two week test period after I had left. The plan was to compare both datasets and make a final design decision based on cumulative performance.\n\nThe horizontal card variant's two week numbers set a high bar. Whether the sticky scroll variant matched, exceeded, or fell short of that, was being collected.",
        },
      ],
    },
    {
      title: 'Reflection',
      heading: 'Reflection',
      intro: "What I'd keep, what I'd change, and what I didn't expect to learn.",
      rows: [
        {
          eyebrow: 'What This Project Taught Me:',
          body: "Designing one section of a website is never actually isolated.\n\nEvery decision made throughout this project — card style, background treatment, typography weight, interaction pattern — had to solve two problems simultaneously. The section itself. And its relationship to everything surrounding it that we couldn't touch.\n\nThat constraint was the most valuable thing this project gave me. Not because it was solved cleanly, but because it wasn't. Designing within limits you didn't create, for a system you can't fully control, is closer to real design work than any brief without constraints. I left this project understanding that more deeply.",
        },
        {
          eyebrow: "What I'd Do Differently:",
          body: "I'd make my case earlier — and more completely.\n\nMy direction was grounded in a clear UX rationale from the start: above the fold visibility drives clicks, and any interaction barrier on a high bounce page is a conversion risk. That argument held up across every round of testing. But in early stakeholder sessions, I presented the design without fully articulating the thinking behind it.\n\nBoth directions had merit. The sticky scroll variant wasn't wrong, the live numbers showed it drove real engagement too. But data alone doesn't always capture the full picture.\n\nWhat the numbers couldn't show was the behavioral reality underneath: users who don't scroll past the fold never reach divisions three, four, or five. B2B buyers landing on a homepage for the first time don't arrive patient, they arrive skeptical, scanning, and ready to leave.\n\nThat argument existed in my head from iteration one. I just didn't put it on the table with enough force until the later rounds. The lesson isn't about being more aggressive, it's about being more complete.",
        },
        {
          eyebrow: 'Working Directly With C-Suite:',
          body: "Most design interns present to a manager who presents to leadership. I presented to leadership directly.\nThat changes everything about how you communicate design.\n\nC-suite isn't evaluating craft, they're evaluating confidence and logic. They want to know what problem it solves, why this solution over another, and what it means for the business. A beautiful design with a weak rationale loses in that room every time. A scrappier design with a clear business case wins.\n\nWhat I learned is that design advocacy at the executive level is a different skill than design execution. You have to translate visual decisions into business language in real time, explain why a card layout drives subdivision clicks, why a sticky scroll pattern creates friction at the wrong moment in the user journey.",
        },
      ],
    },
  ],
}
