let assign = document.getElementById('assign');
let progress = document.getElementById('progress');
let accept = document.getElementById('accept');
console.log(assign);
console.log("help");

const delay = ms => new Promise(res => setTimeout(res, ms));

 assign.onclick = async (element) => {
	console.log("clicked");
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#assign-to-me").click();'});
    });
  };
  
  
   progress.onclick = async (element) => {
	console.log("clicked");
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'inProgress.js'});
    });
  }; 

  accept.onclick = async (element) => {
	console.log("clicked");
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'accept.js'});
    });
  };