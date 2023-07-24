import { useState } from "react";

const DisplayResultsCards30 = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextClicked, setNextClicked] = useState(false)

    const resultsArray30 = [
        {
            card: 1,
            description: `Tell or read a familiar story and
            pause frequently to leave out a
            word, asking your child to "fill it
            in." For example, Little Red Rid-
            ing Hood said, "Grandmother,
            what big
            you have.`

        },
        {
            card: 2,
            description: `Teach somersaults by doing one
            yourself first. Then help your
            child do one. Let her try it alone.
            Make sure furniture is out of the
            way. You may want to put some
            pillows on the floor for safety.`
        },

        {
            card: 3,
            description:`Give a cup to your child. Use
            bits of cereal or fruit and place
            one in your child's cup ("one for
            you") and one in your cup ("one
            for me"). Take turns. Dump out
            your child's cup and help count
            the pieces. This is good practice
            for early math skills.`
        },
        {
            card: 4,
            description: `Put an old blanket over a table
            to make a tent or house. Pack a
            "picnic" sack for your camper.
            Have your child take along a pil-
            low on the "camp out" for a
            nap. Flashlights are especially
            fun.`
        },
        {
            card: 5,
            description: `Get a piece of butcher paper large
            enough for your child to lie on.
            Draw around your child's body to
            make an outline. Don't forget fin-
            gers and toes. Talk about body parts
            and print the words on the paper.
            Let your child color the poster. Hang
            the poster on a wall in your child's
            room.
            Have your`
        }, 
        {
            card: 6, 
            description: `Children at this age may be in-
            terested in creating art in differ-
            ent ways. Try cuttinq a potato in
            half and carving a simple shape
            or design for your child to dip in
            paint and then stamp onto
            paper.`
        },
        {
            card: 7,
            description: `Add water to tempera paint to
            make it runny. Drop some paint
            on a paper and blow through a
            straw to move the paint around
            the paper, or fill an old roll-on
            deodorant bottle with watered-
            down paint. Your child can roll
            color onto the paper.`
        },
        {
            card: 8,
            description: `A good activity to learn location
            words is to build roads and
            bridges with blocks. Use toy
            cars to go on the road, under or
            over a bridge, between the
            houses, and so forth.`
        },
        {
            card: 9,
            description:`Trace around simple objects
            with your child. Use cups of dif-
            ferent sizes, blocks, or your
            child's and your hands. Using
            felt-tip markers or crayons of
            different colors makes it even
            more fun.`
        },
        {
            card: 10,
            description: `Have your child help you set the
            table. First, have your child
            place the plates, then cups, and
            then napkins. By placing one at
            each place, he will learn one-to-
            one correspondence. Show your
            child where the utensils should
            be placed.`
        },
        {
            card: 11,
            description: `Collect empty boxes (cereal, TV
                dinners, egg cartons) and help
                your child set up her own grocery store.`
        },
        {
            card: 12, 
            description: `Help your child learn new words
            to describe objects in everyday
            conversations. Describe by
            color, size, and shape (the blue
            cup, the big ball). Also, describe
            how things move (a car goes
            fast, a turtle moves slowly) and
            how they feel (ice cream is cold.
            soup is hot).`
        },
        {
            card: 13,
            description: `Make our own puzzles by cut-
            ting out magazine pictures of
            whole people. Have your child
            help glue pictures onto card-
            board. Cut pictures into three
            pieces by cutting curvy lines.
            Head, trunk, and legs make
            good pieces for your child to
            put together.`
        },
        {
            card: 14,
            description: `Dribble different colors of paint
            in the middle or on one side of a
            paper. Fold the paper in half.
            Let your child open the paper to
            see the design it makes.`
        },

        {
            card: 15,
            description: `A good game for trips in the car
            is to play a matching game with
            a set of Old Maid cards. Place a
            few different cards in front of
            your child. Give him a card that
            matches one displayed and ask
            him to find the card like the one
            you gave him.`
        },
        {
            card: 16,
            description: `Cut pictures out of magazines to
            make two groups such as dogs,
            food, toys, or clothes. Have two
            boxes ready and put a picture
            of a dog in one and of food in
            the other. Have your child put
            additional pictures in the right
            box, helping her learn about
            categories.`
        },
        {
            card: 17,
            description: `Cut a stiff paper plate to make a
            hand paddle and show your child
            how to use it to hit a balloon. See
            how long your child can keep the
            balloon in the air or how many times
            he can hit it back to you. This activ-
            ity helps develop large body and
            eye-hand coordination. Always care
            fully supervise when playing with
            balloons.`
        }, 
        {
            card: 18,
            description: `To improve coordination and
            balance, show your child the
            "bear walk" by walking on
            hands and feet, keeping the
            legs and arms straight. Try the
            "rabbit hop" by crouching down
            and then jumping forward.`
        },
        {
            card: 19,
            description: `Encourage your child to try the
            "elephant walk," bending for-
            ward at the waist and letting
            your arms (hands clasped together) swing freely while taking
            slow and heavy steps. This is
            great to do with music.`
        }, 
        {
            card: 20,
            description: `Make a poster of your child's favorite things 
            using pictures from old magazines. Use safety 
            scissors and paste or a glue stick to
            allow your child to do it independently, yet safely.`
        }
    ]

    

  const displayResults = () => {
    const cardsToDisplay = resultsArray30.slice(currentIndex, currentIndex + 4);

    
    const renderedCards = cardsToDisplay.map((card) => (
      <div className="bg-white hover:bg-yellow-100 rounded-lg shadow-md" key={card.card}>
        <div >
          <h2 className="pl-3 bold">{card.card}</h2>
          <p className="p-12 hover:text-lg">{card.description}</p>
        </div>
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
        <p className="text-center py-12 text-4xl font-extrabold tracking-tight text-[#0065ff]">
        These activities are designed to provide families with fun ways to foster growth<br/> and support their child in various domains of development.
        <br/>🎨 🧸 📖
        </p>
      <div className="grid grid-cols-4 gap-3 mx-12 ">{displayResults()}</div>
      <div className="mx-24 mt-[10%] grid grid-cols-2 gap-[80%]">
      <button
       className="inline-block rounded border-2 border-[#0065ff] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-[#0065ff]"
        onClick={handlePreviousClick}
        disabled={!nextClicked || currentIndex === 0}
      >
       &lt;&lt; Previous
      </button>
      <button
      className="justify-end inline-block rounded border-2 border-[#0065ff] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-purple-600 hover:text-purple-600 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-[#0065ff]"
        onClick={handleNextClick}
        disabled={currentIndex + 4 >= resultsArray30.length}
      >
        Next &gt;&gt;
      </button>
      </div>
      
    </div>
  );
}

export default DisplayResultsCards30 