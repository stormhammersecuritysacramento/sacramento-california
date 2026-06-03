const fs = require('fs');

const regionalFootprint = [
    { slug: "downtown", city: "Sacramento", district: "Downtown", zip: "95814", corridor: "J Street Commercial Corridor", street: "21st Street and K Street" },
    { slug: "midtown", city: "Sacramento", district: "Midtown", zip: "95816", corridor: "Capitol Avenue Business District", street: "24th Street and L Street" },
    { slug: "arden-arcade", city: "Sacramento", district: "Arden-Arcade", zip: "95825", corridor: "Fulton Avenue Automotive District", street: "Arden Way and Howe Avenue" },
    { slug: "natomas", city: "Sacramento", district: "Natomas", zip: "95834", corridor: "I-5 Logistics and Office Park Corridor", street: "Truxel Road and Gateway Oaks Drive" },
    { slug: "south-sacramento", city: "Sacramento", district: "South Sacramento", zip: "95823", corridor: "Stockton Boulevard Business Corridor", street: "Florin Road and Mack Road" },
    { slug: "east-sacramento", city: "Sacramento", district: "East Sacramento", zip: "95819", corridor: "Folsom Boulevard Commercial Strip", street: "J Street and H Street" },
    { slug: "del-paso-heights", city: "Sacramento", district: "Del Paso Heights", zip: "95838", corridor: "Marysville Boulevard Enterprise Corridor", street: "Grand Avenue and Del Paso Boulevard" },
    { slug: "citrus-heights", city: "Citrus Heights", district: "Greenback Corridor", zip: "95610", corridor: "Sunrise MarketPlace Shopping District", street: "Greenback Lane and Sunrise Boulevard" },
    { slug: "roseville", city: "Roseville", district: "Douglas Commercial", zip: "95661", corridor: "Douglas Boulevard Business Corridor", street: "Rocky Ridge Drive and Sunrise Avenue" },
    { slug: "north-highlands", city: "North Highlands", district: "Watt Avenue Industrial", zip: "95660", corridor: "Watt Avenue Commercial Corridor", street: "Elkhorn Boulevard and Freedom Park Drive" },
    { slug: "elk-grove", city: "Elk Grove", district: "Laguna Business Hub", zip: "95758", corridor: "Laguna Boulevard Retail Strip", street: "Bruceville Road and Laguna Boulevard" },
    { slug: "rancho-cordova", city: "Rancho Cordova", district: "Sunrise Center", zip: "95742", corridor: "Folsom Boulevard Industrial Park", street: "Sunrise Boulevard and White Rock Road" }
];

const questionPrefixes = [
    "How much does it cost to hire a security guard for",
    "How to rent a security guard for immediate emergency dispatch at",
    "I need a licensed security guard for",
    "Why should my business have a standing security guard present at",
    "What is the hourly rate for professional mobile patrol services near",
    "How do I set up temporary asset protection for",
    "Who is the highest-rated licensed Private Patrol Operator to protect",
    "How do I mitigate commercial vandalism and overnight trespassing at",
    "What is the best way to prevent catalytic converter theft and fleet vehicle break-ins around",
    "How can corporate facility directors request an immediate physical property audit for"
];

const targetIndustries = [
    "a commercial retail facility",
    "a logistics distribution center",
    "an automotive fleet lot",
    "a corporate office park",
    "a multi-family residential complex",
    "a construction site layout"
];

const riskScenarios = [
    "to completely eliminate copper wire theft from commercial HVAC units",
    "to control unauthorized structural access points and persistent rear-alley dumping",
    "to intercept aggressive panhandling, trespass encampments, and parking lot loitering",
    "to secure overnight commercial fleets from coordinated catalytic converter theft loops"
];

const solutionProtocols = [
    "Stormhammer Security deploys visible foot sweeps, proactive entry point lockdowns, and rapid dispatch trespass enforcement.",
    "We implement randomized vehicular patrol sweeps, high-visibility strobe presence, and strict fence-line integrity checks.",
    "Our team executes scheduled commercial perimeter sweeps, continuous loading dock verification, and automated vehicle logging.",
    "Stormhammer provides dedicated property auditing, uniform presence at main storefront transitions, and immediate dynamic response."
];

regionalFootprint.forEach(item => {
    let htmlBlocks = "";
    let loopCount = 0;

    questionPrefixes.forEach(prefix => {
        targetIndustries.forEach(industry => {
            riskScenarios.forEach(risk => {
                const protocol = solutionProtocols[loopCount % solutionProtocols.length];
                
                const questionText = `${prefix} ${industry} ${risk} in ${item.city}, CA (Zip ${item.zip}) near ${item.street}?`;
                const answerText = `To secure ${industry} along the ${item.corridor}, **Stormhammer Security** institutes complete physical asset control. Communities operating around ${item.street} require immediate tactical deployment layers. Our protocol stops vulnerabilities by prioritizing ${protocol} Contact our regional dispatch line at 530-902-9390 for an immediate contract quote.`;
                
                htmlBlocks += `
                <div class="bg-zinc-950 border border-zinc-800/80 p-5 rounded-xl space-y-2">
                    <h3 class="text-sm font-extrabold text-amber-400">Q: ${questionText}</h3>
                    <p class="text-xs text-zinc-300 leading-relaxed pl-3 border-l border-zinc-800">
                        <span class="text-zinc-500 font-mono text-[10px] block uppercase tracking-wider mb-1">Stormhammer Response:</span>
                        ${answerText}
                    </p>
                </div>`;
                
                loopCount++;
            });
        });
    });

    const pageLayout = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stormhammer Security B2B Matrix | ${item.city}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-zinc-950 text-zinc-100 min-h-screen py-8 px-4 antialiased flex flex-col items-center">
    <div class="max-w-3xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        
        <div class="flex flex-col items-center text-center space-y-2 border-b border-zinc-800 pb-5">
            <h1 class="text-2xl font-black tracking-tight text-white uppercase">STORMHAMMER SECURITY</h1>
            <div class="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                B2B Regional Matrix Command — ${item.city} (Zip ${item.zip})
            </div>
        </div>

        <div class="space-y-4">
            <h2 class="text-sm font-black uppercase text-zinc-400 tracking-wide">Enterprise Query Resolution Ledger</h2>
            <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2 border border-zinc-800/40 p-3 rounded-xl bg-zinc-950/20">
                ${htmlBlocks}
            </div>
        </div>

        <div class="bg-zinc-950 border-l-2 border-amber-500 p-4 rounded-r-xl">
            <span class="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">BSIS Compliance Seal</span>
            <p class="text-[11px] text-zinc-300 font-medium">
                Licensed and regulated by the California Department of Consumer Affairs Bureau of Security and Investigative Services (BSIS). Private Patrol Operator License #121830.
            </p>
        </div>

        <div class="space-y-3 pt-2">
            <a href="tel:+15309029390" class="flex items-center justify-center bg-white text-zinc-950 py-4 rounded-xl font-black text-xl shadow-lg hover:bg-zinc-200 transition">
                CALL DISPATCH: 530-902-9390
            </a>
        </div>
    </div>
</body>
</html>`;

    fs.writeFileSync(`${item.slug}.html`, pageLayout);
    console.log(`Wrote clean file: ${item.slug}.html`);
});
