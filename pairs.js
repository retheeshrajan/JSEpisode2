/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}


/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  let name1='';
  let name2='';
  var myArray = []; var PArray= [];
  if (names!==undefined)
  {
    var ln = names.length;
    while(ln>0)
    {
      if (ln>=2)
      {
        name1=names.getRandom();
        name2=names.getRandom();
      }
      else
      {
        name1=names.getRandom();
        name1=name2;
      }
      
      if (name1!==name2)
      {
        myArray.push(name1,name2);
        ln=ln-2;
      }
      else
      {
        myArray.push(name1);
        ln=ln-1;
      }
      PArray.push(myArray);
      myArray=[];

      
    }
  }
  else
  {
    names=[];
  }

  return PArray;
}



//console.log(pairs(['retheesh','sarah']));

module.exports = pairs;


console.log(pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']));