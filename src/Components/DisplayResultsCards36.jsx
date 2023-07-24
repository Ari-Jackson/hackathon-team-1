import { useState } from "react";

const DisplayResultsCards36 = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextClicked, setNextClicked] = useState(false)

    const resultsArray30 = [
        {
            card: 1,
            description: `Make a book "about me" for
            your child. Save family pictures,
            leaves, magazine pictures of a
            favorite food, and drawings your
            child makes. Put them in a
            photo album, or glue onto
            sheets of paper and staple together to make a book.`

        },
        {
            card: 2,
            description: `Make a bird feeder using peanut
            butter and bird seed. Help your
            child find a pine cone or a piece of
            wood to spread peanut butter on.
            Roll in or sprinkle with seeds and
            hang in a tree or outside a window.
            While your child watches the birds,
            ask her about the number, size, and
            color of the different birds that visit.`
        },

        {
            card: 3,
            description:`Grow a plant. Choose seeds that
            sprout quickly (beans or peas), and
            together with your child place the
            seeds in a paper cup, filling almost
            to the top with dirt. Place the seeds
            1/2 inch under the soil. Put the cup
            on a sunny windowsill and encourage your child to water and watch
            the plant grow.`
        },
        {
            card: 4,
            description: `Before bedtime, look at a magazine or 
            children's book together.Ask your child to point to pictures as 
            you name them, such as "Where is the truck?" Be silly
            and ask him to point with an
            elbow or foot. Ask him to show
            you something that is round or
            something that goes fast.`
        },
        {
            card: 5,
            description: `Play a matching game. Make
            two sets of 10 or more pictures.
            You can use pictures from two
            copies of the same magazine or
            a deck of playing cards. Lay the
            pictures face up and ask your
            child to find two that are the
            same. Start with two picture sets
            and gradually add more.`
        }, 
        {
            card: 6, 
            description: `While cooking or eating dinner,
            play the "more or less" game
            with your child. Ask who has
            more potatoes and who has
            less. Try this using same-size
            glasses or cups, filled with juice
            or milk.`
        },
        {
            card: 7,
            description: `Cut out some large paper circles
            and show them to your child.
            Talk with your child about things
            in her world that are "round" (a
            ball, the moon). Cut the circle in
            half, and ask her if she can make
            it round again. Next, cut the circle into three pieces, and so
            forth.`
        },
        {
            card: 8,
            description: `During bath time, play Simon Says
            to teach your child names of body
            parts. First, you can be "Simon" and
            help your child wash the part of his
            body that "Simon says." Let your
            child have a turn to be "Simon."
            too. Be sure to name each body part
            as it is washed and give your child a
            chance to wash himself.`
        },
        {
            card: 9,
            description:`Talk about the number 3. Read stories that have 3 in 
            them (The Three Billy Goats Gruff, Three Little Pigs,
            The Three Bears). Encourage your
            child to count to 3 using similar ob-
            jects (rocks, cards, blocks). Talk
            about being 3 years old. After your
            child gets the idea, move up to the
            numbers 4, 5, and so forth as long
            as your child is interested.`
        },
        {
            card: 10,
            description: `Put out several objects that are
            familiar to your child (brush, coat,
            banana, spoon, book). Ask your
            child to show you which one you
            can eat or which one you wear
            outside. Help your child put the
            objects in groups that go to-
            gether, such as "things that we
            eat" and "things that we wear."`
        },
        {
            card: 11,
            description: `When your child is getting
            dressed, encourage her to practice with buttons and zippers.
            Play a game of Peekaboo to
            show her how buttons go
            through the holes. Pretend the
            zipper is a choo-choo train
            going "up and down" the track.`
        },
        {
            card: 12, 
            description: `Practice following directions.
            Play a silly game where you ask
            your child to do two or three fun
            or unusual things in a row. For
            example, ask him to "Touch
            your elbow and then run in a circle" or "Find a book and put it
            on your head."`
        },
        {
            card: 13,
            description: `Encourage your child's "sharing skills"
            by making a play corner in your home.
            Include only two children to start (a
            brother, sister, or friend and have a
            few of the same type of toys available
            so that the children don't have to
            share all of the time. Puppets or blocks
            are good because they encourage
            playing together. If needed, use an
            egg or oven timer with a bell to allow
            the children equal time with the toys.`
        },
        {
            card: 14,
            description: `Listen for sounds. Find a cozy
            spot, and sit with your child. Listen and identify all of the
            sounds that you hear. Ask your
            child if it is a loud or soft sound.
            Try this activity inside and out-
            side your home.`
        },

        {
            card: 15,
            description: `Make an adventure path outside.
            Use a garden hose, rope, or piece
            of chalk and make a "path" that
            goes under the bench, around
            the tree, and along the wall. Walk
            your child through the path first,
            using these words. After she can
            do it, make a new path or have
            your child make a path.`
        },
        {
            card: 16,
            description: `Find large pieces of paper or
            cardboard for your child to draw
            on. Using crayons, pencils, or
            markers, play a drawing game
            where you follow his lead by
            copying exactly what he draws.
            Next, encourage your child to
            copy your drawings, such as circles or straight lines.`
        },
        {
            card: 17,
            description: `When reading or telling a 
            familiar story for bedtime, stop and
            leave out a word. Wait for your
            child to "fill in the blank.`
        }, 
        {
            card: 18,
            description: `Make a necklace you can eat
            by stringing Cheerios or Froot
            Loops on a piece of yarn or
            string. Wrap a short piece of
            tape around the end of the
            string to make a firm tip for
            stringing.`
        },
        {
            card: 19,
            description: `Listen and dance to music with
            your child. You can stop the
            music for a moment and play
            the "freeze" game, where
            evervone "freezes ." or stands
            perfectly still, until you start the
            music again. Try to "freeze" in
            unusual positions for fun.`
        }, 
        {
            card: 20,
            description: `Make long scarves out of fabric
            scraps, old dresses, or old shirts
            by tearing or cutting long
            pieces. Use material that is light-
            weight. Hold on to the edge of
            the scarf, twirl around, run, and
            jump.`
        }
    ]

    

  const displayResults = () => {
    const cardsToDisplay = resultsArray30.slice(currentIndex, currentIndex + 4);

    
    const renderedCards = cardsToDisplay.map((card) => (
      <div key={card.card}>
        <h2>Card {card.card}</h2>
        <p>{card.description}</p>
      </div>
    ));

    return renderedCards;
  };
    
  const handleNextClick = () => {
      setCurrentIndex((prevIndex) => prevIndex + 4)
      setNextClicked(true)
  }
    
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 4);
  }

    
  return (
    <div>
      <h1>Results Cards</h1>
      {displayResults()}
      <button onClick={handlePreviousClick} disabled={!nextClicked || currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={currentIndex + 4 >= resultsArray30.length}>
        Next
      </button>
    </div>
  )
}

export default DisplayResultsCards36