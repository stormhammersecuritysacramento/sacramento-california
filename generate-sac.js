const fs = require('fs');

const sacMatrix = [
    {
        district: "Downtown and Midtown",
        slug: "downtown-midtown",
        zip: "95814",
        corridor: "J Street Commercial Corridor",
        street: "21st Street and K Street intersections",
        pain: "nightlife crowd loitering, commercial vandalism, and after-hours parking lot trespassing",
        solution: "visible foot sweeps, proactive entry point lockdown, and rapid dispatch trespass enforcement",
        govLink: "https://www.cityofsacramento.gov/police",
        caseStudyTitle: "Midtown Commercial Asset Stabilized",
        caseStudyBody: "A high-traffic retail plaza near 21st & K was experiencing recurring property defacement and unauthorized after-hours loitering. By implementing the Stormhammer tactical perimeter lockdown matrix, nighttime trespass incidents dropped to zero within the first 14 days of contract activation."
    },
    {
        district: "Arden-Arcade",
        slug: "arden-arcade",
        zip: "95825",
        corridor: "Fulton Avenue Automotive and Retail District",
        street: "Arden Way and Howe Avenue retail zones",
        pain: "overnight fleet vehicle break-ins, copper wire theft from HVAC units, and perimeter gate tampering",
        solution: "randomized vehicular patrol sweeps, high-visibility strobe presence, and fence-line integrity checks",
        govLink: "https://www.sacsheriff.com",
        caseStudyTitle: "Fulton Ave Fleet Protection Success",
        caseStudyBody: "An automotive facility facing thousands of dollars in recurring copper wire theft and inventory tampering deployed our randomized vehicular patrol sweeps. High-visibility strobe presence successfully deterred perimeter breaches, resulting in zero losses over a 90-day tracking period."
    },
    {
        district: "Natomas",
        slug: "natomas",
        zip: "95834",
        corridor: "I-5 Logistics and Office Park Corridor",
        street: "Truxel Road commercial hubs and Gateway Oaks Drive",
        pain: "distribution center cargo theft, catalytic converter siphoning in corporate lots, and midnight gate breaches",
        solution: "scheduled commercial perimeter sweeps, continuous loading dock verification, and automated vehicle logging",
        govLink: "https://www.cityofsacramento.gov",
        caseStudyTitle: "Logistics Hub Cargo Protection",
        caseStudyBody: "A major logistics distribution facility on Gateway Oaks Drive required rigorous transit security. Stormhammer instituted systematic loading dock verifications and structured perimeter sweeping, completely eliminating cargo tampering and vehicle prowling incidents."
    },
    {
        district: "South Sacramento",
        slug: "south-sacramento",
        zip: "95823",
        corridor: "Stockton Boulevard Business Corridor",
        street: "Florin Road retail centers and Mack Road commercial strips",
        pain: "retail shoplifting spikes, unauthorized property encampments, and persistent aggressive panhandling",
        solution: "dedicated property auditing, uniform presence at main storefront transitions, and immediate dynamic response",
        govLink: "https://www.sacsheriff.com",
        caseStudyTitle: "Retail Corridor Encampment Mitigation",
        caseStudyBody: "A retail center near Florin Road faced significant customer friction due to aggressive panhandling and storefront encampments. Our uniform tactical presence provided peaceful mitigation and property auditing, restoring safe public access and stabilizing merchant revenue."
    },
    {
        district: "East Sacramento and River Park",
        slug: "east-sacramento",
        zip: "95819",
        corridor: "Folsom Boulevard Commercial Strip",
        street: "J Street and H Street medical and retail blocks",
        pain: "unauthorized commercial alcove vagrancy, rear loading dock dumping, and employee safety concerns during late shifts",
        solution: "lockdown monitoring of structural access points, evening safety escorts, and systematic rear-alley clearings",
        govLink: "https://www.cityofsacramento.gov/police",
        caseStudyTitle: "Late-Shift Employee Safety Initiative",
        caseStudyBody: "A medical office block required enhanced safety clearings for employees leaving late-night shifts. Stormhammer executed systematic rear-alley Sweeps and structured facility lockdown monitoring, ensuring 100% safe employee transits and zero structural breaches."
    },
    {
        district: "Del Paso Heights",
        slug: "del-paso-heights",
        zip: "95838",
        corridor: "Marysville Boulevard Enterprise Corridor",
        street: "Grand Avenue and Del Paso Boulevard retail corridors",
        pain: "HVAC scrap metal stripping, opportunistic smash-and-grabs, and storefront property defacement",
        solution: "highly visible standing guard presence, active perimeter tracking, and physical barrier validation loops",
        govLink: "https://www.cityofsacramento.gov",
        caseStudyTitle: "Storefront Vandalism Interception",
        caseStudyBody: "An enterprise corridor strip facility faced severe structural defacement and HVAC component stripping. By placing a standing guard presence paired with rigorous physical barrier validation loops, commercial assets remained completely secure with zero vandalism incidents logged."
    }
];

const keywords = ["Security Guard Services", "Security Patrol Services"];

sacMatrix.forEach(item => {
    keywords.forEach(kw => {
        const kwSlug = kw.toLowerCase().replace(/\s+/g, "-");
        const fileName = `sacramento-${item.slug}-${kwSlug}.html`;
        const title = `Stormhammer Security | Sacramento CA ${item.district} ${kw}`;

        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-zinc-950 text-zinc-100 min-h-screen flex items-center justify-center p-4 antialiased">
    <div class="max-w-xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        
        <!-- Header Text Block -->
        <div class="flex flex-col items-center text-center space-y-2 border-b border-zinc-800 pb-4">
            <h1 class="text-2xl font-black tracking-tight text-white uppercase">STORMHAMMER SECURITY</h1>
            <div class="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full">
                Sacramento Regional Dispatch — Zip ${item.zip}
            </div>
        </div>

        <!-- Target Parameters Block -->
        <div class="space-y-4">
            <h2 class="text-xl font-extrabold tracking-tight text-white text-center">
                Proactive ${kw} Along the ${item.corridor}
            </h2>
            <p class="text-sm text-zinc-400 leading-relaxed">
                Commercial stakeholders, property administrators, and facility directors operating near <span class="text-zinc-200 font-semibold">${item.street}</span> inside the <span class="text-white font-semibold">${item.district} (Zip ${item.zip})</span> sector are combatting persistent operating risks, including <span class="text-red-400 font-medium">${item.pain}</span>. Leaving your physical perimeter exposed invites costly liabilities.
            </p>
            
            <!-- Strategic Solution -->
            <div class="bg-zinc-950 border border-zinc-800 p-4 rounded-xl space-y-2">
                <span class="text-[10px] font-black uppercase text-blue-400 tracking-wider block">The Stormhammer Protocol</span>
                <p class="text-sm text-zinc-300 leading-relaxed">
                    We completely shut down these vulnerabilities through structured property auditing and tactical assets, prioritizing <span class="text-white font-medium">${item.solution}</span> to maintain absolute control.
                </p>
            </div>
        </div>

        <!-- Local Case Study Section -->
        <div class="border-t border-zinc-800/60 pt-4 space-y-2">
            <span class="text-[10px] font-black uppercase text-amber-500 tracking-wider block">Field Deployment Case Study</span>
            <div class="bg-zinc-950/40 border border-zinc-800/80 p-4 rounded-xl space-y-1">
                <h3 class="text-sm font-bold text-white">${item.caseStudyTitle}</h3>
                <p class="text-xs text-zinc-400 leading-relaxed">${item.caseStudyBody}</p>
            </div>
        </div>

        <!-- Bureau of Security and Investigative Services Approval Seal -->
        <div class="bg-zinc-950 border-l-2 border-amber-500 p-4 rounded-r-xl space-y-1">
            <span class="text-[10px] font-black uppercase text-zinc-400 tracking-wider block">BSIS Statutory Compliance Seal</span>
            <p class="text-[11px] text-zinc-300 leading-relaxed font-medium">
                Licensed and regulated by the California Department of Consumer Affairs Bureau of Security and Investigative Services (BSIS). All operations strictly adhere to California Business and Professions Code requirements.
            </p>
        </div>

        <!-- Phone & Contact Call to Actions (CTA) -->
        <div class="space-y-3 pt-2">
            <a href="tel:+15309029390" class="flex items-center justify-center gap-2 bg-white text-zinc-950 py-4 rounded-xl font-black text-xl shadow-lg hover:bg-zinc-200 transition">Call 530-902-9390</a>
            <a href="mailto:sales@stormhammersecurity.com" class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-3 rounded-xl font-bold text-xs tracking-wide transition">Request Dedicated Property Audit & Contract Quote</a>
        </div>

        <!-- Footer Credentials -->
        <div class="border-t border-zinc-800/80 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-zinc-500 gap-2 font-medium">
            <span>PRIVATE PATROL OPERATOR LIC #121830</span>
            <a href="${item.govLink}" target="_blank" rel="noopener noreferrer" class="hover:text-zinc-300 underline flex items-center gap-1">
                Verify Local Directives ↗
            </a>
        </div>
    </div>
</body>
</html>`;

        fs.writeFileSync(fileName, html);
    });
});

console.log("Sacramento local campaigns successfully built with core compliance layouts.");
