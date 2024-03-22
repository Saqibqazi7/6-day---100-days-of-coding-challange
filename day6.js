//Question no 16
/*let guests: string[] = ['fahad','ehan', 'usman'];
console.log('Great new! I found a bigger dinner table!');
console.log(guests);

//Adding more guests
guests.unshift('Ammad');
guests.splice(guests.length / 2,0, 'adil');
guests.push("Hammad");

guests.forEach(guests => {
    console.log('Dear', {guests}, " would you like to join me for dinner?")
});*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question no 17
/*console.log("unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log("Sorry", {removedguest}, "I can't invite you to dinner");
}

guests.forEach(guests => {
    console.log("Dear", {guests}, "you're not invited to dinner");
});

guests.splice(0, guests.length);
console.log(guests);*/ //show the empty list
//Question no 18
var places = ["Makka", "Madina", "palestine", "iran", "Turkey"];
console.log("Original order:", places);
console.log("Aphalbetical order:", __spreadArray([], places, true).sort());
console.log("reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
