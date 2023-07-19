const { WebClient } = require('@slack/web-api');
const yaml = require('js-yaml');
const fs = require('fs');
require('dotenv').config();



const config = yaml.load(fs.readFileSync('./.github/workflows/github-actions.yml', 'utf8'));
const indentedJson = JSON.stringify(config, null, 4);
    // console.log(indentedJson);
console.log(config.env.TOKEN);
    // for (const a of config.definitions.locations){
    //     console.log(a);
    // }
    
const web = new WebClient(config.env.TOKEN);

console.log("222222222");

// write().catch(err => console.log(err));
// write().then(a=>{
//     console.log(a);
// })
// create().catch(err => console.log(err));
// add().catch(err => console.log(err));
// remove().catch(err => console.log(err));
// readChannels()


// read yml file
// try {
//     const config = yaml.load(fs.readFileSync('catalog.yml', 'utf8'));
//     const indentedJson = JSON.stringify(config, null, 4);
//     console.log(indentedJson);
//     for (const a of config.definitions.locations){
//         console.log(a);
//     }
// } catch (e) {
//     console.log(e);
// }

//read from slack
async function readChannels(){
    const result = await web.conversations.list({})
    console.log(result);
}

////write message to a channel
async function write() {
    const conversationId = 'test';
    const result = await web.chat.postMessage({
        text: '2222222222',
        channel: conversationId,
    });
    console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
};


////create a new channel
async function create() {
    try {
        const result = await web.conversations.create({
            name: "chaya"
        }); 
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }   
}


////add user to channel
async function add() {
    try {   
        const result = await web.conversations.invite({
            token,
            channel:'C05EEEWCSAJ',
            users: 'U05EE2000QJ'
        });        
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }   
}


////remove people from a channel
async function remove() {
    try {    
        const result = await web.conversations.kick({
            token,
            channel:'C05EEEWCSAJ',
            user: 'U05ESLKMJRF'
        }); 
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }   
}



//////////////////testing

// function fizz_buzz(numbers) {
//     let result = []
    
//     for (number of numbers) {
//         if (number % 15 === 0) {
//             result.push('fizzbuzz')
//         } else if (number % 3 === 0) {
//             result.push('fizz')
//         } else if (number % 5 === 0) {
//             result.push('buzz')
//         } else {
//             result.push(number)
//         }
//     }
    
//     return result.join(', ')
// }

// module.exports = fizz_buzz;





// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;