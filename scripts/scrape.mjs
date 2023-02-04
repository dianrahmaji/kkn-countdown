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

const response = await fetch("https://kkn.ugm.ac.id/?s=jadwal+kkn-ppm");
const body = await response.text();
const $ = cheerio.load(body);

const title = $(".post-title h3").first().text().trim();
const periods = title.match(/(\d+)/g).map((v) => parseInt(v));

//TODO: Check periods in DB
console.log(periods);

const content = $(".entry-content .ecae p")
  .map(function () {
    return $(this).text();
  })
  .get()[2];

const dates = content.match(/(\d{1,2}) (\w+) (\d{4})/g).map((date) => {
  const [day, month, year] = date.split(" ");
  return new Date(year, months.get(month), day);
});

//TODO: Insert to DB
console.log(dates);
