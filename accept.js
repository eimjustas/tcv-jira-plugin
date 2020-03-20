let accept = async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const buttons = [
    "#action_id_171 > a > span", "#action_id_181 > a > span", "#action_id_381 > a > span", "#action_id_321 > a > span", "#action_id_191 > a > span"
    ];

     document.querySelector(buttons[0])?.click();
await delay(1500);
     document.querySelector(buttons[1])?.click();
await delay(1500);
     document.querySelector(buttons[2])?.click();
await delay(1500);
     document.querySelector(buttons[3])?.click();
await delay(1500);
     document.querySelector(buttons[4])?.click();
await delay(1500);
}

accept();