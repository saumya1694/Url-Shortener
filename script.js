async function shortenURL(){

const url = document.getElementById("urlInput").value;

if(url === ""){
alert("Please enter a URL");
return;
}

try{

const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
const shortLink = await response.text();

addLink(url,shortLink);

}catch(error){

alert("Unable to shorten the URL");

}

}

function addLink(original,short){

const container = document.getElementById("links");

const div = document.createElement("div");
div.className="link-item";

div.innerHTML = `
<span>${short}</span>
<button class="copy-btn" onclick="copyLink('${short}')">Copy</button>
`;

container.appendChild(div);

}

function copyLink(link){

navigator.clipboard.writeText(link);
alert("Copied to clipboard");

}