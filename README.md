# etch--a-sketch
TOP etch-a-sketch project

started over.

I was just not getting the results I wanted with the stack overflow searches, so I just started over clean and I have managed to re-do the first step in creating a 16x16 grid. The researched asnwers helped me to work out what direction I needed to take in orde to create it. 

I went with a simple fucntion that takes a single arguement to create the amount of div's needed to create a grid at the users desired size. I then proceeded to play around with the CSS to get the desired look and figure out what I need to change specifically to keep the grid the same height and width but change the size of the boxes to fit inside the container. 

This is all very hard coded for now, but I now have an idea of what needs to be changed in order to create a more dynamic page at a later stage, I think I may even make the change more dynamic first before moving on to find out how I make the boxes change colour as you hover over it, as that seems to be the part I am struggling with the most at this point in time. 

24/03/23

Going to implement the grid changer, via a input with a limit of 100, it will only take a number and it will not be allowed to exceed 100.

This input will need to have a regular expression in order to give a limitation, or a statement. 

A regular expression to only allow numbers, then a statement that alerts invalid input if the number is over 100, or below 1. 

I will create a button to prompt this.

button is created and it prompts the user, the nest step is to make it do what I want. 

What I want it to do:

1. take the number 1-100 and input it into the createGrid function. 
2. The createGrid function now works as is, but also changes the grid-template-coloum/row properties to match. 

what I need to implement as well :
1. a reg-ex that only takes numbers
2. a statement that doesnt allow the number to exceed 100 or go below 1.


got it working but not as intended, it is just doubling the divs or adding onto the already exsisting divs. so I need it to now remove any old divs first then add the new ones to create the new grid.

25/03/23

Today I will be implementing the 'hover' chang colour effect to complete this project. so far I know the event is called onmouseover, but wether to use a onmouseout event too is another question. 

neither was the answer, I wanted just plain mouseover. now to implement it with all of them. got it to work yay!

can't figure out the gray scale thing, I will try again another time or just start this whole thing over from scartch later on. I have done everything else that is asked and I am happy with that. I am marking this project done for now.