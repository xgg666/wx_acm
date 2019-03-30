function getString(htmls) {
  let div = document.createElement("div");
  div.innerHTML = htmls;
  const text = div.textContent || div.innerText || "";
  console.log(text);
  return text.substring(0, 50);
}