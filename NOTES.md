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