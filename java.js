'use strict';
var counter = 0
var name = prompt('What is your name?');
alert (' Nice name ' + name + '...you\'re welcom');
var me = [
   ['Am I a crazy driver',
       'of course I\'m',
       'I\'m a crazy driver actually',
   ],
   ['Do I love wake up early?',
   'correct',
   'wrong!',
   ],
   ['Do I hate living in the capital?',
   'correct',
   'wrong',
],
   ['Is Manasaf the best meal for me ?',
   'who is the one does\'nt love Mansaf!',
   'wrong awnser,'
],
   ['Do I love playing video games?',
   'unfortuntly I do',
   'wrong',],
]; function questions (){
for (var i = 0; i < me.length; i++) {
   var currentme = me[i]; // array of 3 items [prompt, positive, negative]
   var promptx = 0;
   var currentPrompt = currentme[0];
   var r = prompt(currentPrompt);
   r = r.toLowerCase();
   var current = currentme[1];
   var currentn = currentme[2];
   switch (r) {
       case 'yes':
       case 'y':
           alert(current);
           counter++
           break;
       case 'no':
       case 'n':
           alert(currentn);
           break;
       default:
           alert(' Wrong Answer!');
   }
}
} questions();


function age () {
for (let j = 0; j < 4; j++) {
   var num = prompt('gusse my age?');
   if (num == 24) {
       alert('that\'s right');
       counter++;
       break;
   } else if (num >= 30) {
       alert('too high');
   }
   else if (num > 24) {
       alert('high');
   }
   else if (num < 24) {
       alert('low');
   } else if (num <= 18) {
       alert('too low');
   }else {alert('insert anumber just')}
   } }
   age();



   function color(){
   for (let i = 0; i < 6; i++) {
       var color = prompt('what is my lovely color?');
       if (color == 'brown' || color == 'white' || color == 'black' || color == 'red' || color == 'green') {
           alert('correct');
           break;
           counter++;
       } else {
           alert('wrong !');
       }
   }
   alert('My lovely color is: \"brownnnnnnn\", \"whaite\", \"black\", \"red\", \"green\"')
   alert('You got ' + counter + '/7')
} color();