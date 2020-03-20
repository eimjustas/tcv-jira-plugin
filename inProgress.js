const delay = ms => new Promise(res => setTimeout(res, ms));
const fn = async () => {
document.querySelector("#assign-to-me")?.click();
await delay(1500)
document.querySelector("#action_id_131 > a > span")?.click();
await delay(1500)
document.querySelector("#action_id_151 > a > span")?.click();
await delay(1500)
document.querySelector("#action_id_161 > a > span")?.click();
await delay(1500)
}

fn();