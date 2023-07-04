const { WebClient } = require('@slack/web-api');

const token = 'xoxp-5492487209540-5475511713527-5524517930178-db3a5d1db9b9d77d887a196751f03362';

const web = new WebClient(token);

console.log("aaaaaaaaaaaaaaa");
write().catch(err => console.log(err));
// create().catch(err => console.log(err));
// add().catch(err => console.log(err));
// remove().catch(err => console.log(err));

////write message to a channel


async function write() {
    const conversationId = 'test';
    const result = await web.chat.postMessage({
        text: 'chaya!',
        channel: conversationId,
    });
    console.log(`Successfully send message ${result.ts} in conversation ${conversationId}`);
};


////create a new channel
async function create() {
    try {
        const result = await web.conversations.create({
            name: "try"
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