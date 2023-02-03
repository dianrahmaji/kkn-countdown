import fetch from "node-fetch";
import cheerio from "cheerio";

const response = await fetch("https://kkn.ugm.ac.id/?s=jadwal+kkn-ppm");
const body = await response.text();

const $ = cheerio.load(body);

const content = $(".entry-content .ecae p")
  .map(function () {
    return $(this).text();
  })
  .get()[2];

console.log(content);
