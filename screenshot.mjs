import { chromium } from "playwright";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });

console.log("Navigating...");
await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded", timeout: 30000 });
await page.waitForTimeout(3500);

await page.screenshot({ path: "screenshot-01-hero.png" });
console.log("Hero done");

await page.evaluate(() => {
  document.getElementById("features")?.scrollIntoView({ behavior: "instant" });
});
await page.waitForTimeout(1500);
await page.screenshot({ path: "screenshot-02-features.png" });
console.log("Features done");

await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
await page.waitForTimeout(1500);
await page.screenshot({ path: "screenshot-03-socialproof.png" });
console.log("SocialProof done");

await page.evaluate(() => {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "instant" });
});
await page.waitForTimeout(1500);
await page.screenshot({ path: "screenshot-04-pricing.png" });
console.log("Pricing done");

await page.evaluate(() => {
  document.getElementById("faq")?.scrollIntoView({ behavior: "instant" });
});
await page.waitForTimeout(1200);
await page.screenshot({ path: "screenshot-05-faq.png" });
console.log("FAQ done");

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1200);
await page.screenshot({ path: "screenshot-06-footer.png" });
console.log("Footer done");

await browser.close();
console.log("All done!");
