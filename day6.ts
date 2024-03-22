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
let places: string[] = ["Makka", "Madina", "palestine", "iran", "Turkey"];
console.log("Original order:", places);
console.log("Aphalbetical order:", [...places].sort());
console.log("reverse alphabetical order:",[...places].sort().reverse());
