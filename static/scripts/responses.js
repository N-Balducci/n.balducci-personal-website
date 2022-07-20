function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } 
    if (input == "Hi") {
        return "Hello there!";
    }
    if (input == "Goodmorning") {
        return "Good morning to you!";
    }
    if (input == "Good morning") {
        return "Good morning to you!";
    }
    if (input == "Goodafternoon") {
        return "Good afternoon to you!";
    }
    if (input == "Good afternoon") {
        return "Good afternoon to you!";
    }
    if (input == "Good evening") {
        return "Good evening to you!";
    }
    if (input == "Goodevening") {
        return "Good evening to you!";
    }
    if (input == "hey") {
        return "Hello there!";
    }
    if (input == "Hey") {
        return "Hello there!";
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Sorry I don't understand. Please, try again!";
    }
}

//function generateReply(userMessage) {
    //const message = userMessage.toLowerCase();
    //let reply = [`Sorry, I don't understand you.`, `Please try again`];

//if (/^hi$|^hell?o|^howdy|^hoi|^hey|^ola/.test(message)) reply = [`Hi ${$userName}`, `What can I do for you?`];
//else if (/test/.test(message)) reply = [`Ok`, `Feel free to test as much as you want`];
//else if (/help|sos|emergency|support/.test(message)) reply = [`I am here to help.`, `What seems to be the problem?`];
//else if (/class\=\"fa/.test(message)) reply = [`I see you've found the smileys`, `Cool! <span class="far fa-grin-beam fa-2x"></span>`, `Did you need something?`];
//else if (/how|what|why/.test(message)) reply = userMessage + " what?";
//else if (/^huh+|boring|lame|wtf|pff/.test(message)) reply = [`<span class="far fa-dizzy fa-2x"></span>`, `I'm sorry you feel that way`, `How can I make it better?`];
//else if (/bye|ciao|adieu|salu/.test(message)) reply = [`Ok, bye :)`];

//return reply;
//};


