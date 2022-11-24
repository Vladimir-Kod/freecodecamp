/*
Word Blanks
You are provided sentences with some missing words, like nouns, verbs, adjectives and 
adverbs. You then fill in the missing pieces with words of your choice in a way that 
the completed sentence makes sense.

Consider this sentence - It was really ____, and we ____ ourselves ____. This sentence 
has three missing pieces- an adjective, a verb and an adverb, and we can add words of 
our choice to complete it. We can then assign the completed sentence to a variable as 
follows:

const sentence = "It was really " + "hot" + ", and we "

wordBlanks should be a string.
Waiting:You should not change the values assigned to myNoun, myVerb, myAdjective or 
myAdverb.
Waiting:You should not directly use the values dog, ran, big, or quickly to create 
wordBlanks.
Waiting:wordBlanks should contain all of the words assigned to the variables myNoun, 
myVerb, myAdjective and myAdverb separated by non-word characters (and any additional 
words of your choice).
*/
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; 