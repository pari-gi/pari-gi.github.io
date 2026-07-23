import aiWireframes from '../assets/photos/image_138__33fa163f.jpg'
import brandRefs from '../assets/photos/image_142__ecf64794.jpg'
import iterationScreens1 from '../assets/photos/image_143__70444b1d.jpg'
import iterationScreens2 from '../assets/photos/image_144__9b65e085.jpg'
import directionWellness from '../assets/photos/image_139__248965a8.jpg'
import directionGame from '../assets/photos/image_140__651b541c.jpg'

export default {
  slug: 'hungie',
  name: 'Hungie',
  role: 'freelance Product designer',
  heroImage: iterationScreens1,
  heroHighlights: [
    'New brand identity.',
    'New business model.',
    'New AI experience.',
    '',
    'Full app design.',
    'Human-AI research.',
    'Gamified community.',
  ],
  sections: [
    {
      title: 'Overview',
      layout: 'overview',
      heading: 'A working idea.\nLets make it a product.',
      rows: [
        {
          eyebrow: 'Scope',
          items: [
            ['Freelance Product Designer', 'Solo designer'],
            ['6 Week Timeline', 'Start to finish'],
            ['Full app', 'Mobile'],
          ],
        },
        {
          eyebrow: 'Problem',
          body: 'An AI recipe app in a saturated market — no differentiator, no reason to return, and AI-generated wireframes that would have cost the founders credibility.',
        },
        {
          eyebrow: 'Solution',
          body: 'A new business direction built around a gamified community, a brand with personality that carries the game without the pressure, and an AI experience redesigned from published human-AI interaction research.',
        },
        {
          eyebrow: 'Result',
          body: 'A complete, founder-approved app design — onboarding, pantry, meal builder, recommendations, and community — with the AI made visible, plain-spoken, and trustworthy.',
        },
      ],
    },
    {
      title: 'Initial',
      heading: 'Initial',
      intro: 'A working idea that needed to be turned into a successful product. I needed to rework the business strategy, design psychology, and AI presentation with the founding team.',
      rows: [
        {
          eyebrow: 'The product they brought',
          statement: 'They needed me to bring their product idea to life.',
          body: "Hungie's founders brought me an AI product. Scan a grocery receipt and the mobile app populates a digital pantry with your groceries. A model then recommends meals using what you actually own, filtered by what you're craving that day and the longer-term goals you've set — gym targets, cheaper groceries, cooking more often. Their target user was 18 to 28. Their bet was that the friction in home cooking isn't the cooking, it's the deciding.",
        },
        {
          eyebrow: 'What existed',
          statement: 'They had the code. And AI generated wireframes, which we wiped entirely.',
          body: "The founders had a direction, most of the code already written, and a set of wireframes they had generated with AI and wanted me to build from. I pushed back. The wireframes carried structural decisions nobody had deliberately made, and inheriting them meant inheriting reasoning that didn't exist. We rebuilt the interface from the ground up.",
          images: [{ src: aiWireframes, w: 988, alt: 'The original AI-generated wireframes' }],
        },
        {
          eyebrow: 'My initial diagnosis',
          statement: 'Their design idea would cost them credibility. And they had no business differentiator.',
          body: "Two things were obvious before I designed anything. The front end needed to be designed by a designer. Their current AI generated UI was poorly designed and wasn't going to bring anyone back on its own — the founders needed something that set Hungie apart. I took both into the research phase.",
        },
        {
          eyebrow: 'Goals',
          statement: 'Turn the idea into a successful product — across business, design psychology, and AI presentation.',
          body: 'Design a brand identity that hooks a user.\nBuild a reason to return after the first use — a retention mechanism that turns a one-time download into a daily habit, not just another app that gets opened once and forgotten.\nPresent the AI in an intelligent, trustworthy light.',
        },
        {
          pair: [
            {
              eyebrow: 'Challenges & Constraints',
              body: 'Solo designer\n6 Week Timeline',
            },
            {},
          ],
        },
      ],
    },
    {
      title: 'Selecting Business Direction',
      heading: 'Selecting the Business Direction',
      intro: 'How do we turn this idea into a product that works? Hungie needed a stronger business model — so I guided the founders through fixing it.',
      rows: [
        {
          eyebrow: 'Competitive analysis:',
          statement: "I mapped the market and found it saturated — Hungie's premise had no differentiator.",
          body: "I started with a competitive teardown of the pantry-to-recipe category, exploring Yummly, SideChef, Whisk, and the wave of AI recipe generators that had launched that year.\n\nThe pattern was clear: everyone was competing on the same axis, recipe quantity and recommendation accuracy, and Hungie's original concept sat right in the middle of that pack, with nothing to pull users toward it over the apps they already had.\n\nWorse, the whole category had the same problem: these are apps people download, try once or twice, and forget. Competing on better recommendations was a dead end — the real gap was giving people a reason to come back.",
        },
        {
          eyebrow: 'The strategic reframe:',
          statement: 'The question was no longer "what should I cook?" but "what makes someone open Hungie on an ordinary Tuesday?"',
          body: 'A recommendation engine answers "what should I cook?" — but that\'s a question users only ask when they\'ve already opened the app.\n\nThe harder, more valuable question was "what makes someone open Hungie on an ordinary Tuesday?" That shifted the design mandate from a utility to a habit product, and it\'s a different discipline: you\'re no longer optimizing a single interaction, you\'re engineering a loop that pays the user back enough to return.',
        },
        {
          eyebrow: 'Exploring retention options:',
          statement: 'My research narrowed down four motivational models: utility, wellness, gamification, social.',
          body: "If the real problem was retention, the question became: what actually makes someone come back? I looked at four different motivational models, each a legitimate way to build a habit, before narrowing to the two most defensible for this audience.\n\nUtility-first — be the most useful tool. Win on pure convenience: faster recommendations, smarter pantry tracking, less friction than anyone else. The problem is that utility is easy to copy and easy to out-fund, and it was the exact game the other competitors were already winning.\n\nWellness — motivate from the inside. Frame cooking around how it makes you feel: less stress around eating well, less body-image pressure, consistency built through personal goals rather than external pressure. This leans on intrinsic motivation, which tends to produce more durable habits, but it asks more of the user up front and rewards them more slowly.\n\nGamification — motivate from the outside. Streaks, XP, and progress mechanics drawn from the behavioral-design playbook behind most sticky habit apps. This leans on extrinsic motivation — fast, proven, and immediately engaging, but with a known failure mode: for an audience already drowning in gamified apps, another streak to maintain can read as a chore instead of a hook.\n\nSocial — motivate through other people. Make cooking something you do alongside a community: sharing meals, reacting, building status through people rather than points. Strong long-term retention and hard for a competitor to clone, but it has a cold-start problem — a social feature is only as good as the community around it, and at launch there isn't one yet.",
        },
        {
          eyebrow: 'Narrowing to two directions:',
          statement: 'I cut utility and community — unwinnable against better funded apps.',
          body: "Two routes fell away quickly. Utility meant competing head-on with better-funded apps on the one axis they already owned — a fight Hungie couldn't win. Social was the most defensible long-term, but it couldn't stand on its own at launch with no users to populate it (worth holding that thought — it comes back).\n\nThat left the two routes built on real motivational models we could ship on day one: wellness and gamification. I built both far enough to be felt, so the founders were choosing between two experiences, not two slide decks.",
        },
        {
          eyebrow: 'Building both directions:',
          statement: 'I built mid-fi drafts of both so the founders could decide by experiencing both.',
          body: "The founders couldn't decide. They were investing a lot into this product and they wanted to get it right.\n\nTo help them confidently select a path, I suggested we build both. Then they could just open each version and see how it felt, the same way a user would. That's what they needed to decide, and they decided quickly.\n\nI created the same three screens for both directions, the only difference between them was the direction. I kept them at mid-fidelity: real enough to react to, cheap enough to throw one away.",
          images: [
            { src: directionWellness, w: 502, alt: 'Wellness direction screens' },
            { src: directionGame, w: 464, alt: 'Gamification direction screens' },
          ],
        },
        {
          eyebrow: 'My recommendation:',
          statement: 'I recommended wellness, based on researched needs and behaviors of the target audience.',
          body: "I made my recommendation. Hungie's target user was 18 to 28, a group already carrying a full load of streaks, badges, and daily-goal notifications from every other app on their phone. For that user, a game layer isn't a novelty. It's one more thing to keep up with.\n\nThat risk is what pointed me toward wellness: slower to reward, but working with the audience's motivation instead of against their fatigue.",
        },
        {
          eyebrow: 'The override:',
          statement: 'They chose gamification over wellness. So I had to design around the risks.',
          body: "I recommended wellness but the founders chose gamification. They had doubt about the energy a game layer could create, and the business model call was theirs to make.\n\nSo the job changed: execute their direction, without losing what the research had turned up. The risk with gamification didn't go away just because we selected that path, it became a challenge I had to design around.",
        },
        {
          eyebrow: 'Closing the gap:',
          statement: 'I brought social back as a community layer to enhance the gamification direction.',
          body: 'Streaks on their own were the exact fatigue our audience was already carrying. The missing piece was the idea we set aside earlier: social. I proposed building the game around a community — sharing meals, reacting to what other people cooked, earning status through people instead of a points counter.\n\nThat solved two problems at once. It gave the game direction something the audience might actually want, and it gave the social route a way in, since the game mechanics themselves could seed the community that social needed to work.\n\nThe founders bought in, and that became the business model we committed to.',
        },
      ],
    },
    {
      title: 'Creating the Brand',
      heading: 'Creating the Brand',
      intro: "How do you make a game that doesn't feel like a chore? The branding and aesthetics create the personality that does that work.",
      rows: [
        {
          eyebrow: 'The brand problem:',
          statement: 'The branding was the place to solve this potential risk that might arise with a gamified product.',
          body: "The founders had chosen the game. My research showed the line is thin between a game that's addictive and a game that's just one more thing to keep up with — and our audience was already carrying plenty of those.\n\nThe branding was the place to solve this problem.\n\nStreaks and points are just mechanics. What decides whether they feel fun or feel like a chore is the personality wrapped around them. A scoreboard nags you. A friend cheering you on doesn't, even when it's tracking the exact same thing. So the brand had one job: carry the game without the pressure.",
        },
        {
          eyebrow: 'Exploration:',
          statement: 'Pulled references that solved the nagging effect of gamification.',
          body: 'I pulled references from apps that gamify without nagging, and from brands that feel playful without feeling childish.\n\nA pattern showed up fast. The apps that made streaks feel heavy all looked like productivity tools — thin type, clean grids, progress bars that read as a report card. The ones that felt light led with character. Not more features. More personality.',
          images: [{ src: brandRefs, w: 1012, alt: 'Brand reference exploration' }],
        },
        {
          eyebrow: 'Design System',
          statement: 'Selected a color scheme and typography set that created the high energy, inviting personality for the product.',
          body: "Color. Orange runs through the whole product. Most food and health apps go green — calm, healthy, safe — and green was the wrong energy for a product built around play. Orange is warmer and louder, it's appetite-forward, and it put Hungie somewhere the category wasn't.\n\nType. Rounded display type for headers, plain sans for body. The display face is playful without being a kids' font — it reads fun, not cartoonish, and it never tips into arcade. The headers carry the personality and the body text stays out of the way.\n\nThe rule underneath both: loud where it's fun, quiet where you're working.",
        },
        {
          eyebrow: 'The mascot',
          statement: 'The mascot turns the game from something tracking you into someone rooting for you.',
          body: "The mascot holds the design together.\n\nA points counter is just a number going up. A character can react. It can be excited when you cook, and it can be quiet when you don't. That turns the game layer from something tracking you into someone rooting for you — which is exactly the difference between the audience risk I'd flagged and a version of the game they might actually like.\n\nWe created alternative emotes for the mascot.",
        },
      ],
    },
    {
      title: 'The First Iteration',
      heading: 'The First Iteration',
      intro: 'Built the whole app, start to finish. I was approved.',
      rows: [
        {
          eyebrow: 'What I built:',
          statement: 'I built every screen: onboarding, pantry, meal builder, recommendations, community.',
          body: "Onboarding to learn dietary needs, allergies, and what you wanted out of the app. A pantry that holds what you own and when it expires. Add Groceries to fill it. A meal builder to pick what you're in the mood for. Recommendations on the home page. Saved meals. A community tab.",
        },
        {
          eyebrow: 'It landed:',
          statement: 'The founders loved the flow and personality of the designs.',
          body: "The founders were happy with it. The brand had personality, the flows made sense, and the app they'd been describing for months was finally something you could open. From their side, this was the version that worked.",
        },
        {
          eyebrow: 'The question:',
          statement: "The founders were happy. Now it needed to be double checked against the criteria I'd set.",
          body: "It looked right. But I'd left the research phase with criteria the product was supposed to meet, and I hadn't held these screens up against them yet.",
          images: [
            { src: iterationScreens1, w: 1020, alt: 'First iteration screens' },
            { src: iterationScreens2, w: 1024, alt: 'More first iteration screens' },
          ],
        },
      ],
    },
    {
      title: 'Rethinking the AI',
      heading: 'Rethinking the AI with Human-AI Interaction Research',
      intro: "Something about the AI felt off and I couldn't name it. There's no handbook for AI design yet, so I went deep into the research — found four reasons why it was underperforming, and fixed all four.",
      rows: [
        {
          eyebrow: 'Something was missing:',
          statement: "The founders signed off. I wasn't sure the AI was doing its job.",
          body: "The screens were good. The AI part of them was the thing I kept circling back to — it worked, but it didn't feel amazing.\n\nDesigning for AI is a new discipline with no set playbook, so I went into the research to find out if my work could be improved.",
        },
        {
          eyebrow: 'Research Finding 1 — Algorithm Aversion:',
          statement: 'Food is subjective. The exact place people trust algorithms least.',
          body: 'The research (part 1). Algorithms are trusted and relied on less for tasks that seem subjective rather than objective, because consumers believe algorithms lack the abilities to tackle subjective tasks. This has been tested across four lab studies with 1,400+ participants and two field studies with 56,000+ (Castelo, Bos & Lehmann).\n\nThe research (part 2). Simple, transparent justifications are more persuasive and trustworthy than abstract ones (Herlocker).\n\nWhat it meant. "What should I eat tonight" is the most subjective question there is. Hungie was sitting at the worst point on the curve. But perceived objectivity is changeable.\n\nWhat I changed. Every recommendation provides plain reasoning, in an orange pill. This makes a task feel more objective and trust in the algorithm goes up.',
        },
        {
          eyebrow: 'Research Finding 2 — Control:',
          statement: "Let users correct it. That's what keeps people using a system.",
          body: "The research. Giving people even a slight amount of control over an algorithm's output made them more satisfied, more likely to believe the algorithm was intelligent and reliable, and more likely to use it again (Dietvorst et al.). Scrutability is a distinct design aim alongside transparency and trust (Tintarev & Masthoff).\n\nWhat it meant. Letting users tell the system it's wrong builds confidence in its intelligence and creates a feeling of transparency and trust. No model gets it right every time. The question isn't whether it messes up, but how you handle it. This change also helps fine tune models.\n\nWhat I changed. Created open feedback loop. Recommendations can be corrected if inaccurate. Created a feature so Hungie asks what worked after every meal cooked. It asks about specifics like time, technique, ingredients, taste then visibly retunes.",
        },
        {
          eyebrow: 'Research Finding 3 — Uniqueness Neglect:',
          statement: 'Hungie already knew personal preferences but all of it stayed in the back end — so on screen, the recommendations all looked random.',
          body: 'The research. People resist AI because they perceive that algorithms fail to consider their individual circumstances (Longoni et al.). Thus, if you are able to frame an algorithm as considering personal customizations, you remove the resistance.\n\nWhat it meant. When a system visibly uses someone\'s specific details, people stop assuming it can\'t understand them. Hungie already knew the allergies, the restrictions, the goals, the expiry dates. All of it stayed in the back end — so on screen, the recommendations looked random.\n\nWhat I changed. Two moves. Reason pills now name personal details, not just pantry math ("fast cooking time, like you asked"). And onboarding asks more personalized questions, then shows you what it learned from them.',
        },
        {
          eyebrow: 'Research Finding 4 — It Felt Like a Machine:',
          statement: 'The mascot was on the welcome screen. Nowhere the AI actually worked.',
          body: "The research. People are more willing to take a machine's judgment on subjective things when the machine feels warm and expressive rather than cold (Castelo et al.).\n\nWhat it meant. But also, warmth is exactly what people are sick of right now — the assistant that gushes, the chatbot with a first name and a stock headshot. Following the finding too literally builds the thing users are running from, the same AI everywhere.\n\nWhat I changed. The mascot is the way through. It's warm and expressive, and it's obviously a cartoon, so it never trips the fake-friend reflex. I moved it to where the AI does something: narrating or reacting with emotes while it thinks instead of a loading spinner.",
        },
        {
          eyebrow: 'The Principle:',
          statement: 'Make the intelligence visible. But make it speak plainly.',
          body: "Four findings, one rule.\n\nVisible — because a system that reasons silently looks exactly like a system that doesn't reason at all. Hungie was already smart. It just never showed its work.\n\nPlainly — because the explanations that land are the concrete ones, and because a product that announces its AI is the thing people are already running from.\n\nEverything I rebuilt came out of those two lines.",
        },
      ],
    },
    {
      title: 'Testing & Validation',
      heading: 'Testing & Validation',
      intro: 'Usability testing',
      rows: [
        {
          statement: 'unfortunately, this section is locked.\nplease contact me for more info!',
        },
      ],
    },
    {
      title: 'Reflection',
      heading: 'Reflection',
      intro: "What I'd keep, what I'd change, and what I didn't expect to learn.",
      rows: [],
    },
  ],
}
