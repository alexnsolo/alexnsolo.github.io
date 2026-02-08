const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', '7044-12-31 - Nevarra Liberated', 'source.html');
const dest = path.join(__dirname, 'source.html');
let html = fs.readFileSync(src, 'utf8');

const newContent = `<h2><strong>Aurelion Extraction Combine Unexpectedly Shuts Down Operations</strong></h2>
<p><em>By Independent Spiral News Service (ISNS)</em></p>
<p>In a stunning announcement that sent shockwaves through industrial and military markets alike, <strong>Aurelion Extraction Combine (AEC)</strong> confirmed today that it is <strong>ceasing all operations effective immediately</strong>, revoking every outstanding contract and halting all extraction, refinement, and delivery activities across the spiral.</p>
<p>The announcement came via a brief holo-statement from AEC founder and sole owner <strong>Bartholomew K. Aurelion</strong>, who appeared noticeably subdued as he informed partners, clients, and regulators that the corporation would be "entering permanent dormancy."</p>
<blockquote>
<p>"I have decided," Aurelion stated, "that the time has come to conclude my life's work. All AEC operations are hereby terminated. All pending orders are null and void. Our assets will not be transferred or sold."</p>
</blockquote>
<p>No further explanation was offered, and Aurelion declined questions. Moments after the broadcast ended, AEC's external procurement networks went dark, delivery shuttles redirected course, and the company's flagship industrial vessel, <em>Indomitable Yield</em>, dropped from public traffic registries.</p>
<h3><strong>A Sudden End to a Colossus</strong></h3>
<p>Founded nearly two centuries ago, AEC rose to dominance through its unmatched efficiency in asteroid mining and exotic alloy extraction. Entire sectors of Imperial industry—particularly heavy shipbuilding and weapons manufacturing—came to rely on AEC's steady output. Analysts routinely described the company as "too big to fail."</p>
<p>That assumption now lies in ruins.</p>
<p>Market speculation erupted within minutes of the announcement. Commodity prices spiked sharply, and several Imperial Navy logistics offices confirmed emergency rationing of key materials pending reassessment of supply chains.</p>
<p>An anonymous procurement official summarized the situation bluntly:</p>
<blockquote>
<p>"AEC wasn't just a supplier. It was <em>the</em> supplier. This is going to hurt."</p>
</blockquote>
<h3><strong>Why Walk Away?</strong></h3>
<p>With no official reason given, commentators have rushed to fill the vacuum.</p>
<p>Some point to <strong>Aurelion's advanced age</strong>, suggesting a sudden health decline or a desire to avoid a drawn-out succession struggle. Others speculate that the CEO may have foreseen an impending market collapse tied to the ongoing alien incursions at the galactic rim and chosen to exit before losses mounted.</p>
<p>More conspiratorial voices whisper of <strong>regulatory pressure</strong>, secret audits, or undisclosed accidents aboard the <em>Indomitable Yield</em>, though no evidence has surfaced to support these claims. Imperial authorities have stated they were given <strong>no advance notice</strong> of the shutdown.</p>
<p>Notably, AEC was wholly owned by Aurelion himself, meaning no board vote, shareholder revolt, or external approval was required—an arrangement long criticized but never legally challenged.</p>
<h3><strong>Fallout Ahead</strong></h3>
<p>The immediate consequences are already unfolding. Several major shipyards have paused construction, citing material shortfalls. Defense economists warn that prolonged disruption could <strong>slow Imperial Navy fleet replenishment</strong> at a time when readiness is considered critical.</p>
<p>For now, the galaxy is left with more questions than answers.</p>
<p>Aurelion Extraction Combine—once a beating industrial heart of the Empire—has gone silent, not with an explosion or scandal, but with a single, quiet decision from a man who simply declared that he was done.</p>
<p>Whether history will remember that decision as prudent, selfish, or catastrophic remains to be seen.</p>`;

const markerStart = '<h2><strong>Galactic News Network';
const markerEnd = '<p><strong>This has been a special report from the Galactic News Network.</strong></p>';
const i = html.indexOf(markerStart);
const j = html.indexOf(markerEnd);
if (i === -1 || j === -1) throw new Error('Markers not found');
const before = html.slice(0, i);
const after = html.slice(j + markerEnd.length);
fs.writeFileSync(dest, before + newContent + after);
console.log('Written source.html');
