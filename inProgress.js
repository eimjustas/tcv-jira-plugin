{
const fn = async () => {
		const delay = ms => new Promise(res => setTimeout(res, ms));
document.querySelector('[data-test-id="issue.views.issue-base.foundation.status.status-field-wrapper"]').querySelector('button').click();
await delay(200);
document.querySelector("[id$='-option-5']")?.click();
await delay(1000);
document.querySelector('[data-test-id="issue.views.issue-base.foundation.status.status-field-wrapper"]').querySelector('button').click();
await delay(200);
document.querySelector("[id$='-option-3']")?.click();
await delay(1000);
document.querySelector('[data-test-id="issue.views.issue-base.foundation.status.status-field-wrapper"]').querySelector('button').click();
await delay(200);
document.querySelector("[id$='-option-3']")?.click();
await delay(1000);
}

fn();
}