### Bitgame Ultra: bitgame, but ultra

## Preface

Bitgame is an educational puzzle game that teaches binary number manipulation and other important low-level computer science concepts and is also fun. The user is given one byte and five operators - increment, decrement, left shift, right shift, and complement - and must get from one number to another using only those five operators. Subsequent levels will involve more complex challenges, which I will talk about once I've written level one.

## Game Plan

This will be my fourth attempt to build bitgame. This time, a few things will be different:

1. It will be an actual game.
2. Instead of using a weird combination of Bootstrap classes and Reactstrap, I will just write everything using React Bootstrap.
3. I will store some data and methods in the appropriate components instead of putting it all in App. It seems like good practice to keep the state (i.e. the byte and the steps) in the App, but the keypad methods can live in the keypad.
4. Maybe try to get rid of some redundancies.

### Dependencies

bootstrap
react-bootstrap
react-bandcamp


Here's a rough outline of App: 

```javascript
<>
  <GameSpace />
  <GameBoard />
  <Music />
</>
```

And GameSpace:

```javascript
<>
  <Container className="d-flex">
    <Origin />
    <Steps />
    <Goal />
  </Container>
</>
```

And GameBoard: 

```javascript
<>
  <Byte />
  <Keypad />
</>
```