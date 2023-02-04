import fetch from "node-fetch";
import cheerio from "cheerio";

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

//TODO: Fix Invalid Date
const dates = content
  .match(/(\d{1,2}) (\w+) (\d{4})/g)
  .map((date) => new Date(date));

//TODO: Insert to DB
console.log(dates);
