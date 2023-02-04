import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import cheerio from "cheerio";

const months = new Map([
  ["Januari", 1],
  ["Februari", 2],
  ["Maret", 3],
  ["April", 4],
  ["Mei", 5],
  ["Juni", 6],
  ["Juli", 7],
  ["Agustus", 8],
  ["September", 9],
  ["Oktober", 10],
  ["November", 11],
  ["Desember", 12],
]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const response = await fetch("https://kkn.ugm.ac.id/?s=jadwal+kkn-ppm");
const body = await response.text();
const $ = cheerio.load(body);

const data = JSON.parse(
  await fs.readFile(join(__dirname, "..", "public", "data.json"), {
    encoding: "utf-8",
  })
);

const title = $(".post-title h3").first().text().trim();
const [parsedFirstPeriod, parsedSecondPeriod, parsedYear] = title
  .match(/(\d+)/g)
  .map((v) => parseInt(v));

const isExist =
  data.filter(
    ({ period, year }) =>
      (parsedFirstPeriod === period || parsedSecondPeriod === period) &&
      year === parsedYear
  ).length > 0;

if (!isExist) {
  const content = $(".entry-content .ecae p")
    .map(function () {
      return $(this).text();
    })
    .get()[2];

  const [firstPeriodStart, firstPeriodEnd, secondPeriodStart, secondPeriodEnd] =
    content.match(/(\d{1,2}) (\w+) (\d{4})/g).map((date) => {
      const [day, month, year] = date.split(" ");
      return new Date(year, months.get(month), day);
    });

  const updatedData = [
    ...data,
    {
      period: parsedFirstPeriod,
      year: parsedYear,
      startAt: firstPeriodStart,
      endAt: firstPeriodEnd,
    },
    {
      period: parsedSecondPeriod,
      year: parsedYear,
      startAt: secondPeriodStart,
      endAt: secondPeriodEnd,
    },
  ];

  await fs.writeFile(
    join(__dirname, "..", "public", "data.json"),
    JSON.stringify(updatedData, null, 2),
    { encoding: "utf-8", flag: "w" }
  );
}
