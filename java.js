

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
 

    

];
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
    }}


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
    alert('My lovely color is: \"brown\", \"whaite\", \"black\", \"red\", \"green\"')
    alert('You got ' + counter + '/7')




/*var car = prompt('Am I a crazy driver?');
car = car.toLowerCase();
switch(car) {
    case 'yes':
       alert ('of course I\'m');
       break;
       case 'y':
          alert ('of courseI\'m');
          break;
          case 'no':
                alert ('I\'m a crazy driver actually');
                break
              case 'n':
                  alert ('I\'m a crazy driver actually');
                  break;
          default:
             alert ('wrong !');
}

var love = prompt('Do I love wake up early?');
love = love.toLowerCase();
if (love == 'yes') {
 alert('Actually i don\'t');
} else if (love == 'y') {
    alert('Actually i don\'t');
} else if (love == 'no'|| love == 'NO'|| love == 'No' ) {
     alert('right.. you\'re my friend')
}
else {
    alert('wrong');
}


var live = prompt('Do I love living in the capital?');
live = live.toLowerCase();
if (live == 'yes') {
 alert('No I don\'t');
} else if (live == 'y') {
    alert('No I don\'t');
} else if (live == 'no') {
     alert('you\'re right')
}
else {
    alert('wrong');
}

var meal = prompt('Is Manasaf the best meal for me ?');
meal = meal.toLowerCase();
if (meal == 'yes') {
 alert('who is the one does\'nt love Mansaf!');
} else if (meal == 'y') {
    alert('who is the one does\'nt love mansaf!');
} else if (meal == 'no') {
     alert('wrong awnser') ;
}
else {
    alert('wrong');
}



var love = prompt('Do I love playing games?');
love = love.toLowerCase();
if (love == 'yes') {
 alert('unfortuntly I don\'t');
} else if (love == 'y') {
    alert('unfortuntly I don\'t');
} else if (love == 'no') {
     alert ('tha\'s true');
}
else {
    alert('wrong');
}
*/