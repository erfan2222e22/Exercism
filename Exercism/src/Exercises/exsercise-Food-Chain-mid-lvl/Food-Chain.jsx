const Food_Chain = () => {
    class Song {
        verse(number, verses) {
            
            const animals = [
                'fly',
                'spider',
                'bird',
                'cat',
                'dog',
                'goat',
                'cow',
                'horse'
            ];

            const descriptions = {
                spider: `${number === 2 ? "It" : "that"} wriggled and jiggled and tickled inside her.`,
                bird: 'How absurd to swallow a bird!',
                cat: 'Imagine that, to swallow a cat!',
                dog: 'What a hog, to swallow a dog!',
                goat: 'Just opened her throat and swallowed a goat!',
                cow: "I don't know how she swallowed a cow!"
            };


            if (number === 1) {
                return `I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.${verses ? "\n" : ""}
`;
            }

            if (number === 8) {
                return `I know an old lady who swallowed a horse.
She's dead, of course!${verses ? "\n" : ""}
`;
            }

            const result = [];

            const animal = animals[number - 1];

            result.push(
                `I know an old lady who swallowed a ${animal}.`
            );

            result.push(descriptions[animal]);

            for (let i = number - 1; i > 0; i--) {
                const currentAnimal = animals[i];
                const nextAnimal = animals[i - 1];
                const ifIsSpeider = nextAnimal === 'spider';
                let line = `She swallowed the ${currentAnimal} to catch the ${nextAnimal}${ifIsSpeider ? "" : "."}`

                if (ifIsSpeider) {
                    line += ` ${descriptions.spider}`;
                }

                result.push(line);
            }

            result.push(
                `I don't know why she swallowed the fly. Perhaps she'll die.${verses ? "\n" : ""}`
            );

            return result.join('\n') + '\n';
        }

        verses(number1, number2) {
            const result = [];
            while (number1 <= number2) {
                result.push(this.verse(number1, true));
                number1++
            }
            return result.join("")
        }
    }
    
    const show = new Song();


  return (
     <div onClick={() => console.log(show.verses(1,8))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
     
            test me if you want
        </div>
  )
}
export default Food_Chain