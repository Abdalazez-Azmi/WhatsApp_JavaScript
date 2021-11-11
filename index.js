let clock1 = document.getElementById("time");
let clock = document.getElementById("clock");
let chat = document.getElementById("chat");
let last_words = document.getElementById("last_words");
let container_of_chat = document.getElementById("container_of_chat");

window.onload = function (i) {
  clock1.innerHTML = i.value = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const chat_ = () => {
  let str = chat.value;
  let f_div = document.createElement("div");
  f_div.setAttribute("class", "text_of_chat");
  f_div.innerHTML = str;
  container_of_chat.append(f_div);
  let p = document.createElement("p");
  p.setAttribute("id", "clock");
  p.setAttribute("class", "clk");
  p.innerHTML = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  f_div.append(p);
  console.log(p.length);
  last_words.innerHTML = str;
};
