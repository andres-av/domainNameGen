/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let domain = [];

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let e = 0; e < ext.length; e++) {
          domain.push(pronoun[i] + adj[j] + noun[x] + ext[e]);
        }
      }
    }
  }
  console.log(domain);
};
