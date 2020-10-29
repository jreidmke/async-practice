function hello() {
    console.log("HELLO");
}

$("#one-btn").on("click", getOneFact);
$("#four-btn").on("click", getFourFax);
$(document).ready(shuffle);
$("#card-btn").on("click", draw);

const numURL = "http://numbersapi.com/";

async function getOneFact() {
    const resp = await axios.get(`${numURL}5?json`);
    console.log(resp.data.text);
}

async function getFourFax() {
    let counter = 0;
    while(counter < 4) {
        counter++;
        const resp = await axios.get(`${numURL}4?json`);
        console.log(resp.data.text);
    }
}

let id;

async function shuffle() {
    id = (await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
    `)).data.deck_id;
}

async function draw() {
    const card = (await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)).data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
}

