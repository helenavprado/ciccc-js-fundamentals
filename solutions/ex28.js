const facebookProfile = {
    name:"John",
    friends:100,
    messages:["Hello", "How are you?", "I am good too!"],
    postMessage: function(message) {
        this.messages.push(message);
    },
    deleteMessage: function(index) {
        this.messages.splice(index, 1);
    },
    addFriend: function(){
        this.friends++;
    },
    removeFriend: function(){
        this.friends--;
    }
}

facebookProfile.postMessage("Hi");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
