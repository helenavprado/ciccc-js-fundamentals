/*
A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. 
Here's what we know! In this murder mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

ballroom,
gallery,
billiards room,
dining room.

And we know that each suspect was located in a specific room at the time of the murder:
- Mr. Parkes
- Ms. Van Cleve 
- Mrs. Sparr
- Mr. Kalehoff

To help solve this mystery, write a combination of conditional statements that:

- sets the value of weapon based on the room and
- sets the value of solved to true if the value of room matches the suspect's room 

Afterwards, use this template to print a message to the console if the mystery was solved:

__________ did it in the __________ with the __________!

What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:

Mr. Parkes did it in the dining room with the knife!
*/


let room = "dining room";
let murder = "Mr. Parkes"
let weapon = "knife"
let solved = false;

if (room === "ballroom" && murder === "Mr. Kalehoff" && weapon === "poison") {
    console.log(murder + " did it in the " + room + " with the " + weapon);
    solved = true;
} else if (room === "gallery" && murder === "Ms. Van Cleve" && weapon === "trophy") {
    console.log(murder + " did it in the " + room + " with the " + weapon);
    solved = true; 
} else if (room === "billiards room" && murder === "Mrs. Sparr" && weapon === "pool stick") {
    console.log(murder + " did it in the " + room + " with the " + weapon);
    solved = true; 
} else if (room === "dining room" && murder === "Mr. Parkes" && weapon === "knife") {
    console.log(murder + " did it in the " + room + " with the " + weapon);
    solved = true;
} else {
    console.log("mistery remains unsolved");
}