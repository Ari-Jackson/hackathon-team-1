import { useState } from "react";

const DisplayResultsCards48 = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextClicked, setNextClicked] = useState(false)

    const resultsArray30 = [
        {
            card: 1,
            description: `Play the "who, what, and
            where" game. Ask your child
            who works in a school, what is in
            a school, and where is the
            school. Expand on your child's
            answers by asking more questions. Ask about other topics,
            like the library, bus stop, or post
            office.`

        },
        {
            card: 2,
            description: `When you are setting the table for a
            meal, play the "what doesn't belong" game. Add a small toy or
            other object next to the plate and
            eating utensils. Ask your child if she
            can tell you what doesn't belong
            here. You can try this game any time
            of the day. For example, while
            brushing your child's hair, set out a
            brush, barrette, comb, and a ball.`
        },

        {
            card: 3,
            description:`Let your child help prepare a
            picnic. Show him what he can
            use for the picnic (bread, peanut
            butter, and apples). Lay out
            sandwich bags and a lunch box,
            basket, or large paper bag.
            Then go have fun on the picnic.`
        },
        {
            card: 4,
            description: `On a rainy day, pretend to open
            a shoe store. Use old shoes,
            paper, pencils, and a chair to sit
            down and try on shoes. You can
            be the customer. Encourage
            your child to "write" your order
            down. Then she can take a turn
            being the customer and practice
            trying on and buying shoes.`
        },
        {
            card: 5,
            description: `Play the "guess what will happen"
            game to encourage your child's
            problem-solving and thinking skills
            For example, during bath time, ask
            your child, "What do you think will
            happen if I turn on the hot and cold
            water at the same time?" or "What
            would happen if I stacked the blocks
            to the top of the ceiling?"`
        }, 
        {
            card: 6, 
            description: `Play "bucket hoops." Have your
            child stand about 6 feet away
            and throw a medium-size ball at
            a large bucket or trash can. For
            fun outdoors on a summer day,
            fill the bucket with water.`
        },
        {
            card: 7,
            description: `Write your child's name often. When
            your child finishes drawing a picture,
            be sure to put his name on it and say
            the letters as you write them. If your
            child is interested, encourage him to
            name and/or to copy the letters.
            Point out the letters in your child's
            name throughout the day on cereal
            boxes, sign boards, and books.`
        },
        {
            card: 8,
            description: `Invite your child to play a counting
            game. Using a large piece of paper,
            make a simple game board with a
            straight path. Use dice to determine
            the count. Count with your child,
            and encourage her to hop the game
            piece to each square, counting each
            time the piece touches down.`
        },
        {
            card: 9,
            description:`Make a person with playdough
            or clay using sticks, buttons,
            toothpicks, beads, and any
            other small items. Start with a
            playdough (or clay) head and
            body and use the objects for
            arms, legs, and eyes. Ask your
            child questions about his person.`
        },
        {
            card: 10,
            description: `Encourage your child to learn
            her full name, address, and telephone number. Make it into a
            singing or rhyming game for
            fun. Ask your child to repeat it
            back to you when you are riding
            in the car or on the bus.`
        },
        {
            card: 11,
            description: `Cut out three small, three medium,
            and three large circles. Color each
            set of circles a different color (or use
            colored paper for each). Your child
            can sort the circles by color or by
            size. You can also ask your child
            about the different sizes. For example, ask your child, "Which one is
            smallest?" Try this game using buttons removed from an old shirt.`
        },
        {
            card: 12, 
            description: `Go on a walk and pick up things
            you find. Bring the items home
            and help your child sort them
            into groups. For example, groups
            can include rocks, paper, or
            leaves. Encourage your child to
            start a collection of special things.
            Find a box or special place where
            he can display the collection.`
        },
        {
            card: 13,
            description: `Play a picture guessing game.
            Cover a picture in a familiar
            book with a sheet of paper and
            uncover a little at a time until
            your child has guessed the
            picture.`
        },
        {
            card: 14,
            description: `Let your child help you prepare
            a meal. She can spread peanut
            butter and illy, peel a banana,
            cut with a butter knife, pour cereal, and add milk (using a small
            container). Never give her a task
            involving the stove or oven without careful supervision.`
        },

        {
            card: 15,
            description: `"Write" and mail a letter to a friend or
            relative. Provide your child with paper,
            crayons or pencil, and an envelope. Let
            your child draw, scribble, or write; or he
            can tell you what to write down. When
            your child is finished, let him fold the
            letter to fit in the envelope, lick, and seal.
            You can write the address on the front. Be
            sure to let him decorate the envelope as
            well. After he has put the stamp on, help
            mail the letter.`
        },
        {
            card: 16,
            description: `Play "circus." Find old, colorful
            clothes and help your child put on a
            circus show. Provide a rope on the
            ground for the high wire act, a
            sturdy box to stand on to announce
            the acts, fun objects for a magic act,
            and stuffed animals for the show.
            Encourage your child's imagination
            and creativity in planning the show.
            Don't forget to clap.`
        },
        {
            card: 17,
            description: `Take a pack of playing cards and
            choose four or five matching
            sets. Lay the cards out face up,
            and help your child to find the
            pairs. Talk about what makes the
            pairs of cards the "same" and
            " different."`
        }, 
        {
            card: 18,
            description: `Make bubbles. Use ¼ cup dishwashing
            liquid (Dawn or Joy works best) and 2⅔
            cups water. Use straws to blow bubbles
            on a cookie sheet. Or make a wand by
            stringing two pieces of a drinking straw
            onto a string or piece of yarn. Tie the
            ends of the string together to make a
            circle. Holding onto the straw pieces, dip
            the string in the bubble mixture. Pull it out
            and gently move forward or backward.
            You should see lovely, big bubbles.`
        },
        {
            card: 19,
            description: `Make a bean bag to catch and
            throw. Fill the toe of an old sock
            or pantyhose with 3/4 cup drv
            beans. Sew the remaining side
            or tie off with a rubber band.
            Play "hot potato" or simply play
            catch. Encourage your child to
            throw the ball overhand and
            underhand.`
        }, 
        {
            card: 20,
            description: `Pretend to be an animal. En-
            courage your child to use her
            imagination and become a kitty.
            You can ask. "What do kitties
            like to eat?" or "Where do kit-
            ties live?" Play along, and see
            how far the game can go.`
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

export default DisplayResultsCards48