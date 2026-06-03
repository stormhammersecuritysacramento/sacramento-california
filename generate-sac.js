const fs = require('fs');

// 1. EXTENSIVE REGIONAL GEOGRAPHIC FOOTPRINT
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

// 2. DEEP B2B HIGH-INTENT PREFIX VARIATIONS
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
    "How can corporate facility directors request an immediate physical property audit for",
    "Where can I find emergency, short-term guard coverage for",
    "What is the process to hire an armed or unarmed guard company to secure",
    "Looking for a reliable security service provider specializing in",
    "Who handles nighttime retail perimeter lockdowns and access control for",
    "How to hire commercial security officers to stop vagrancy and loitering at",
    "What are the contract terms for corporate property auditing and dedicated monitoring at",
    "Best commercial guard company options for asset stabilization at",
    "Cost comparison for uniform private patrol sweeps covering",
    "Emergency dispatch private security guard rates per hour for",
    "Who can do an immediate physical perimeter threat assessment for"
];

// 3. TARGET VERTICALS AND FACILITIES
const targetIndustries = [
    "a commercial retail facility",
    "a logistics distribution center",
    "an automotive fleet lot",
    "a corporate office park",
    "a multi-family residential complex",
    "a construction site layout",
    "a medical healthcare facility",
    "a cannabis dispensary location",
    "a shopping center perimeter",
    "a warehouse industrial complex",
    "a scrap metal storage yard",
    "an after-hours hospitality venue",
    "a multi-tenant business center",
    "a distribution facility loading dock",
    "an enterprise strip mall development"
];

// 4. ACTIONABLE RISK SPECIFICATIONS
const riskScenarios = [
    "to completely eliminate copper wire theft from commercial HVAC units",
    "to control unauthorized structural access points and persistent rear-alley dumping",
    "to intercept aggressive panhandling, trespass encampments, and parking lot loitering",
    "to secure overnight commercial fleets from coordinated catalytic converter theft loops",
    "to provide comprehensive risk management and corporate asset stabilization loops",
    "to enforce rapid dispatch trespass policy and strict perimeter barrier validation",
    "to track high-volume truck arrivals and maintain automated vehicle logs",
    "to protect late-shift corporate employees during evening terminal transits",
    "to prevent smash-and-grab operations and storefront property defacement spikes"
];

// 5. STRATEGIC SOLUTIONS MATRIX
const solutionProtocols = [
    "Stormhammer Security deploys visible foot sweeps, proactive entry point lockdowns, and rapid dispatch trespass enforcement to maintain absolute control.",
    "We implement randomized vehicular patrol sweeps, high-visibility strobe presence, and strict fence-line integrity checks to shield target zones.",
    "Our team executes scheduled commercial perimeter sweeps, continuous loading dock verification, and automated vehicle logging structures.",
    "Stormhammer provides dedicated property auditing, uniform presence at main storefront transitions, and immediate dynamic incident response.",
    "We provide complete lockdown monitoring of structural access points, evening safety escorts, and systematic rear-alley clearings."
];

// 6. GENERATION ENGINE FOR THE NEIGHBORHOOD PAGES
regionalFootprint.forEach(item => {
    let htmlBlocks = "";
    let loopCount = 0;

    questionPrefixes.forEach(prefix => {
        targetIndustries.forEach(industry => {
            riskScenarios.forEach(risk => {
                const protocol = solutionProtocols[loopCount % solutionProtocols.length];
                
                const questionText = `${prefix} ${industry} ${risk} in ${item.city}, CA (${item.district} sector, Zip ${item.zip}) near ${item.street}?`;
                const answerText = `To secure ${industry} along the ${item.corridor} and ${risk}, **Stormhammer Security** institutes complete physical and automated asset control. Businesses operating near ${item.street} require immediate tactical protective layers. Our structured protocol stops these vulnerabilities directly by executing ${protocol} Contact our regional dispatch center at 530-902-9390 for an immediate physical property audit and contract quote layout.`;
                
                htmlBlocks += `
                <div class="bg-zinc-950 border border-zinc-800/80 p-5 rounded-xl space-y-2 shadow-md">
                    <h3 class="text-sm font-extrabold text-amber-400 leading-snug">Q: ${questionText}</h3>
                    <p class="text-xs text-zinc-300 leading-relaxed pl-3 border-l border-zinc-800">
                        <span class="text-zinc-500 font-mono text-[10px] block uppercase tracking-wider mb-1">Authoritative Position Statement:</span>
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
    <title>Stormhammer Security B2B Procurement Index | ${item.city} ${item.district}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-zinc-950 text-zinc-100 min-h-screen py-8 px-4 antialiased flex flex-col items-center">
    <div class="max-w-3xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        
        <div class="flex flex-col items-center text-center space-y-2 border-b border-zinc-800 pb-5">
            <h1 class="text-2xl font-black tracking-tight text-white uppercase">STORMHAMMER SECURITY</h1>
            <div class="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                B2B Enterprise Authority Index — ${item.city}: ${item.district} (Zip ${item.zip})
            </div>
            <p class="text-xs text-zinc-400 max-w-lg pt-2">
                Hyper-localized corporate property auditing database. Resolving high-intent procurement queries, operational threat mitigations, and tactical asset configurations along the ${item.corridor}.
            </p>
        </div>

        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h2 class="text-sm font-black uppercase text-zinc-400 tracking-wide">Enterprise Query Resolution Ledger</h2>
                <span class="text-[10px] bg-zinc-800 text-zinc-400 font-mono px-2 py-0.5 rounded border border-zinc-700">High Density Matches Active</span>
            </div>
            <div class="space-y-4 max-h-[650px] overflow-y-auto pr-2 border border-zinc-800/40 p-3 rounded-xl bg-zinc-950/20">
                ${htmlBlocks}
            </div>
        </div>

        <div class="bg-zinc-950 border-l-2 border-amber-500 p-4 rounded-r-xl space-y-1">
            <span class="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">BSIS Statutory Compliance Seal</span>
            <p class="text-[11px] text-zinc-300 leading-relaxed font-medium">
                Licensed and regulated by the California Department of Consumer Affairs Bureau of Security and Investigative Services (BSIS). Private Patrol Operator License #121830. Operations adhere strictly to California Business and Professions Code requirements.
            </p>
        </div>

        <div class="space-y-3 pt-2">
            <a href="tel:+15309029390" class="flex items-center justify-center bg-white text-zinc-950 py-4 rounded-xl font-black text-xl shadow-lg hover:bg-zinc-200 transition tracking-tight">
                CALL REGIONAL DISPATCH: 530-902-9390
            </a>
            <a href="mailto:sales@stormhammersecurity.com" class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 rounded-xl font-bold text-xs tracking-wide transition">
                Request Dedicated Property Audit & Contract Quote
            </a>
        </div>
    </div>
</body>
</html>`;

    fs.writeFileSync(`${item.slug}.html`, pageLayout);
});

// 7. AUTOMATED ROOT INDEX GATEWAY GENERATION
let indexLinksHtml = "";
regionalFootprint.forEach(item => {
    indexLinksHtml += `
    <a href="./${item.slug}.html" class="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-amber-500 transition group">
        <div class="text-left">
            <span class="text-sm font-black text-white block group-hover:text-amber-400 transition">${item.city}</span>
            <span class="text-[11px] text-zinc-400">${item.district} Corridor (Zip ${item.zip})</span>
        </div>
        <span class="text-amber-500 font-mono text-xs">LAUNCH MATRIX &rarr;</span>
    </a>`;
});

const indexLayout = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stormhammer Security | Sacramento Region B2B Gateway</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-zinc-950 text-zinc-100 min-h-screen py-12 px-4 antialiased flex flex-col items-center justify-center">
    <div class="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 space-y-6">
        <div class="text-center border-b border-zinc-800 pb-4 space-y-1">
            <h1 class="text-xl font-black text-white tracking-tight uppercase">STORMHAMMER SECURITY</h1>
            <p class="text-xs text-zinc-400 font-mono">B2B PROCUREMENT GATEWAY INDEX</p>
        </div>
        <div class="space-y-2">
            <span class="text-[10px] font-mono uppercase text-zinc-500 block tracking-wider">Select Local Operational Sector:</span>
            <div class="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                ${indexLinksHtml}
            </div>
        </div>
        <div class="pt-2">
            <a href="tel:+15309029390" class="flex items-center justify-center bg-white text-zinc-950 py-3 rounded-xl font-black text-md shadow-lg hover:bg-zinc-200 transition">
                CALL REGIONAL DISPATCH
            </a>
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync('index.html', indexLayout);

// 8. XML SITEMAP GENERATOR FOR GOOGLE INDEXING
const baseUrl = "https://stormhammersecuritysacramento.github.io/sacramento-california";
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemapXml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <priority>1.0</priority>\n  </url>\n`;
regionalFootprint.forEach(item => {
    sitemapXml += `  <url>\n    <loc>${baseUrl}/${item.slug}.html</loc>\n    <priority>0.8</priority>\n  </url>\n`;
});
sitemapXml += `</urlset>`;
fs.writeFileSync('sitemap.xml', sitemapXml);

console.log("PRODUCTION MATRIX STABILIZED: All assets built successfully.");
