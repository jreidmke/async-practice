function hello() {
    console.log("HELLO");
}

$("#one-btn").on("click", getOneFact);

const numURL = "http://numbersapi.com/";

async function getOneFact() {
    const resp = await axios.get(`${numURL}5?json`);
    console.log(resp.data.text);
}