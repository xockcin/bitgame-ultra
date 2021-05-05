### 3/10/21

This was way easier than I thought it was going to be! Maybe Facebook is good for something after all.

There are a few things I still need to do:
1. Write the functionality for the mode-selector switch.
2. Make something happen when you tap the question mark.
3. Make the winning screen look nicer.
4. Figure out an algorithm for finding the "pars".

Upshot:
-Mode-selector works
-Question mark doesn't work yet - modals are tricky
-Winning screen looks the same - w/e
-Pars is well underway

### 3/12/21

I've been thinking it would be a good idea to be able to show the binary pattern for the goal number. I was thinking of making a tiny component and putting it in a tooltip or popover, but now I'm thinking it would be better to just have the byte button array change when you mouse over the goal button. Let's get to it!

Actually I'm not going to do that right now. As a matter of fact, I think I'd better give this project a rest for a little while. I might just deploy it as is.

A few changes I would like to make at some point:
-Implement keypad buttons as a map function.
-Add the above-mentioned mouseover effect
-Just clean up and organize everything
-Make the win screen look nicer.

### 4/1/21

I'm pretty happy with it. The one big thing it still needs is better documentation. So let me begin by just explaining one more time what the game is and how it works.

Actually, I think the best way to do it would be with a sequence of popovers pointing to various places on the screen like this:

1. This is the byte. It is made up of eight bits. Each bit can be either one or zero, either on or off.
2. This is the complement button. It reverses the value of each bit, so every zero becomes a one and every one becomes a zero.
3. This is the left shift button. It shifts the bit values one position to the left. Every bit takes on the value of the bit to its right. The value of the rightmost bit becomes zero, and the value of the leftmost bit is lost.
4. This is the right shift button. It is just a right version of the left shift button.
5. This is the increment button. It increments by one the number that the byte represents.
6. This is the decrement button. You get the idea.
7. The green number is your origin. It is selected randomly at the beginning of the game.
8. The red number is your goal. It is also selected randomly.
9. The object of the game is to transform the byte from the green number to the red number, using the five operators, in as few steps as possible.
10. There are two ways to approach this game:
  - The first is mathematically, treating the numbers as quantities, left shift and right shift as doubling and halving and complement as distance from 255. In this case, it will be easier to use decimal mode.
  - The second is treating the numbers as *patterns*, in which case it will be easier to use hex mode. If you are shaky on hex, I recommend a few rounds of [flippy bit]{flippybitandtheattackofthehexadecimalsfrombase16.com/}
11. Hover over the goal number to take peek at the bit configuration of the goal number.
12. If you want to be really hardcore, try a few rounds in ASCII mode.
13. While you play, enjoy a curated selection of my favorite albums to listen to while coding.

NOTE: The increment algorithm looks like this: 
1. Start at bit 0.
2. If this bit is off, turn it on and quit.
3. If this bit is on, turn it off and look at the next bit.
4. Go to step 2.

### 4/3/21

For some reason, all of a sudden the tokens aren't displaying in the step list, if you know what I mean by that. I'm not sure what could be causing this. Time to investigate!

I fixed it. I think it would be a good exercise to explain what the problem was, but I don't feel like it! Maybe later.

I spent most of yesterday working on a Python script to figure out the best solutions for all possible origin-goal combinations. Once I figure out the logic, I will probably port it over to Javascript, mainly just for the practice.

Addendum: My Python script has produced a solution for every combination of two eight-bit numbers! It is all in a json file that I can access using fetch().

### 4/4/21

There is now a "cheat" function that fetches the solution from GitHub and displays it discreetly in a popover if you click on the step counter. Next step is to structure the game around it.

Here are some next steps:
1. Force the user to solve the puzzle in the minimum number of steps. Change the step counter so that it counts down instead of up. If you fail, there are two buttons: try this pair again or try a different pair.
2. Put the documentation in popovers instead of a modal.
3. Just generally refactor and clean up everything. The code is very messy. The app component is way overloaded. I should consider putting it in Redux. Would be good practice, anyway.

Brainstorms: 
1. Create a huge grid in which the player can view all 65536 combinations. At first it just looks like a huge grid of tiny, different-colored squares, with colors representing how many steps the solution is. Eventually it will keep track of each individual player's solving history.
2. It will be possible to earn the use of special buttons that could perform other operations on the bits, for instance:
- flipping the byte back-to-front
- flipping the four high bits and the four low bits
- save a number in a register, and then combining it with the current number using a binary (as in two-parameter) operator like & or ^.
- "pac-man mode" - make left and right shift wrap around.
These powers would be associated with the ASCII values of certain numbers, which you would need to "grab."
3. It might be a good idea to have the game start with just one and two bytes. In stage one there is just one bit, and you practice turning it on and off. In stage two there are two bits, and you learn about shifting. In stage three there are four bits, and you learn about addition and subtraction, and also about hexadecimal notation. Then in stage four there are eight bits and the game is underway.

### 4/5/21

I am very excited about this project. For a while I kept trying to work on other things instead, but I kept coming back to this one. I should make it my main project. Here are the next steps:

1. Implement counting down instead of up. Make a lose frame that shows up if you lose.
2. Create an introductory version that explains the concept with one, two and four bits.
3. Separate out the compoments.

Okay, I have now changed the game so that the game counts down instead of up, and you lose if you don't solve the puzzle in the required number of steps. You can also cheat by clicking on the step counter.

### 4/13/21

I have been messing around with this project without documenting my messings very well. Today is a cleanup day. I am starting by moving the pure (i.e non-state-updating) functions into a separate file. I am also turning the five bitmove functions into one function that takes three arguments - a number, a "token" and a size - and returns the resulting number.

The next step in the cleanup process, which may take a little while, will be to change the program so that the number is represented as a number rather than an array in the state, and is only converted into an array to create the byte that displays it.

Note: I have succeeded in changing the program so that the Byte is a number. Difficulty also works.

Here are the next things I need to do:
1. Deal with the edge case of a user continuing to press the buttons after the game is over.
2. Add to the lose screen the option to play the same pair of numbers again.
3. Turn the Info Button modal into a menu with, for now, About and Tutorial options. The Tutorial will eventually be what is now bitgame-legends.

I need to find a cleaner way of implementing the display mode in GameSpace.

### 4/15/21

Just spent some time playing the game, and I must say that, with the difficulty level feature in place, it's actually starting to get kind of fun in an r/oddlysatisfying sort of way.

I still have not implemented 1 and 2 of the list above. 3 was easy, although the buttons don't actually do anything.

The next feature I need to start thinking about is making it so that you are actually achieving something when you solve the puzzles. I like the idea that the object of the game is to solve all 65,536 pairs of numbers, which sounds crazy except that achievements unlock powers, and eventually the power to solve the pairs of numbers in batches instead of one at a time.

To get to Level 3, you should have to solve at least one of each of the 25 combinations of two tokens in Level 2. That seems like not too much to ask.

### 4/21/21

It has come to my attention that bitgame-ultra does not look good on mobile. And it's true: It only works horizontally, and even horizontally on very small screens the difficulty button spills out of the div. These don't seem like urgent problems, but I suppose they are. Here are three things I should do: 
1. Add padding to the button divs so they don't get squished on small screens.
2. Make the difficulty button responsive.
3. Somehow force the user to hold the device vertically.

Just set out to do it and realized I have no idea how to do it. In fact, I think it would be smarter to spend some time refactoring and cleaning up the code I have. Ultimately, here are the things I ought to do:
1. Implement Redux.
2. Implement styles as CSS instead of Bootstrap classes.
3. Just generally clean up.

And now here is a list of things I am actually doing, as I do them:
1. Create component called "Main." Copy entire text of App.js into Main, and then turn App.js into a simple App.js type component.
2. Read over the main component and think about it.

OK, let's think about this. What all is the state, and what all are the actions?

The state is:
-The origin number and goal number
-The steps array
-The current number
-The step count, which is a function of the origin and goal and the length of the steps array.
-The difficulty
-The display mode (i.e. dec, hex or ascii)
-Whether or not the modal is displayed.
-Whether the win, lose, or in-game screen is to be displayed

The actions are:
-do one of the five tokens
-change the display mode
-show or hide the modal
-change the difficulty level
-start a new game after winning or losing

### 4/24/21

Today I will put in redux.

### 5/4/21

I still haven't quite done redux. What I would like is to implement it in a smaller project before I put it into this one. But I also need to get this project ready to submit for NuCamp honors graduation. 

I just made a few changes to the spacing, so it fits more comfortably in the browser window.

I think before I put redux into this project, I will fill out the help modal.

Ok, the help modal works.

Let me take another stab at writing some concise documentation. This time I'll try aiming it at programmers rather than the layperson.

BITGAME ULTRA is a casual game that teaches the fundamentals of bit manipulation, which is an important and fascinating topic in low-level programming.

In the center of the window are two panels. The top panel, with the light blue background, displays the current number, represented in binary. The bottom panel, with the green background, has five buttons. The outer buttons, with the plus and minus signs, simply increment or decrement the current number. The buttons with the less-than and greater-than signs perform a left or right shift. So, in a left shift, every bit takes on the value of the bit immediately to its right. The rightmost bit is set to off; the value of the leftmost bit is lost. The middle button, with a tilde, performs a complement, which means simply that the value of every bit is reversed.

Anyone who has used the C programming language should be familiar with these bitwise operations. Some might note that the increment and decrement symbols should actually be "++" and "--", and the shift symbols should be "<<" and ">>". That's how I had it originally, but I changed it for the sake of visual consistency.

The two numbers above the panels are the origin and the goal. The origin is the number you start at; the goal is the number you are trying to get to. Every click of one of the five buttons counts as a move. The object of the game is to get from the origin to the goal in the minimum number of moves. The number to the right of the panels is the number of moves you have. To see a binary representation of the goal number, simply mouse over it.

You may adjust the difficulty using the pulldown menu in the top righthand corner. The difficulty corresponds to the number of moves required to get from the origin to the goal. By default, the difficulty is set to 3, which means that every pair of numbers you are given will be solvable in a minimum of three moves.

You may also adjust the display mode using the blue switch at the top. You may view the origin, goal, and intermediate values as decimal numbers, hexadecimal numbers, or ASCII characters.