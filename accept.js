{
	let accept = async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
	const openid= '[data-test-id="issue.views.issue-base.foundation.status.status-field-wrapper"]';
    const buttons = [
    "[id$='-option-3']","[id$='-option-3']", "[id$='-option-2']", "[id$='-option-4']", "[id$='-option-3']"
    ];
document.querySelector(openid).querySelector('button').click();
await delay(400);
     document.querySelector(buttons[0])?.click();
await delay(1500);
document.querySelector(openid).querySelector('button').click();
await delay(200);
     document.querySelector(buttons[1])?.click();
await delay(1500);
document.querySelector(openid).querySelector('button').click();
await delay(200);
     document.querySelector(buttons[2])?.click();
await delay(1500);
document.querySelector(openid).querySelector('button').click();
await delay(200);
     document.querySelector(buttons[3])?.click();
await delay(1500);
document.querySelector(openid).querySelector('button').click();
await delay(200);
     document.querySelector(buttons[4])?.click();
}

accept();

}