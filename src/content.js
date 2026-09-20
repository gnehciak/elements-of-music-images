/* Mindmap content, from the Notion page "Content". n(title, definition, children, kind) */
function n(t,d,c,k){ if(Array.isArray(d)){k=c;c=d;d=""} return {t:t,d:d||"",c:c||[],k:k||""} }
const ask=(...qs)=>n("Ask yourself","Questions for listening",qs.map(q=>n(q,"",[],"ask")),"ask");
const tip=(t,d)=>n(t,d,[],"tip");

const DATA=n("Elements of Music","Stage 4 · NSW Music 7–10 Syllabus (2024)",[

n("Duration","The length of sounds and silences in music – beat, tempo, note and rest values, metre and rhythmic devices.",[
  n("Beat and tempo",[
    n("Beat","The steady pulse you tap your foot to. Some music has no beat (free rhythm)."),
    n("Tempo","The speed of the beat, measured in BPM (beats per minute). A metronome clicks the beat."),
    n("Italian tempo terms","Slowest to fastest",[
      n("Largo","Very slow and broad"),n("Adagio","Slow"),n("Andante","At a walking pace"),
      n("Moderato","Moderate speed"),n("Allegro","Fast and lively"),n("Presto","Very fast")]),
    n("Changing tempo",[
      n("Accelerando (accel.)","Gradually getting faster"),
      n("Ritardando (rit.) / Rallentando (rall.)","Gradually getting slower")]),
    n("Reading a tempo marking","Sits above the first bar, e.g. Allegro ♩ = 120",[
      n("Allegro","The Italian term – fast and lively"),
      n("♩ = 120","120 crotchet beats per minute (120 BPM) – two beats every second")])
  ]),
  n("Note values",[
    n("Semibreve","4 beats · American name: whole note"),
    n("Minim","2 beats · 2 in a semibreve · half note"),
    n("Crotchet","1 beat · 4 in a semibreve · quarter note"),
    n("Quaver","½ beat · 8 in a semibreve · eighth note. Two beamed quavers = 1 beat altogether."),
    n("Semiquaver","¼ beat · 16 in a semibreve · sixteenth note. Four semiquavers = 1 beat altogether."),
    n("Dotted minim","3 beats"),
    n("Dotted crotchet","1½ beats"),
    tip("The dot rule","A dot adds half of the note's value. Minim (2) + dot (1) = 3 beats. Crotchet (1) + dot (½) = 1½ beats."),
    n("The note-value pyramid","Every row lasts the same time (4 beats). Each note splits into two of the next kind.")
  ]),
  n("Rests (silence)",[
    n("Semibreve rest","4 beats. HANGS below the line."),
    n("Minim rest","2 beats. SITS on the line like a hat."),
    n("Crotchet rest","1 beat"),
    n("Quaver rest","Half a beat")
  ]),
  n("Metre and time signatures",[
    n("Top number","How many beats in each bar"),
    n("Bottom number","What kind of note gets the beat (4 = crotchet, 8 = quaver)"),
    n("Simple time","Each beat divides into two",[
      n("2/4","Two crotchet beats per bar (simple duple), like a march"),
      n("3/4","Three crotchet beats per bar (simple triple)"),
      n("4/4","Four crotchet beats per bar (simple quadruple)")]),
    n("Compound time","Each beat divides into three",[
      n("6/8","Compound duple – two dotted-crotchet beats, quavers beamed in two groups of three")]),
    tip("3/4 or 6/8?","Both hold six quavers. 3/4 groups them in THREE pairs (simple time); 6/8 in TWO groups of three (compound time).")
  ]),
  n("Rhythmic devices",[
    n("Ostinato","A rhythmic (or melodic) pattern that repeats over and over"),
    n("Syncopation","Accents placed on weak beats or off-beats – the notes that fall BETWEEN the beats"),
    n("Backbeat","Emphasis on beats 2 and 4, usually on the snare drum (rock and pop). On a kit: hi-hat quavers on top, bass drum on 1 and 3, accented snare on 2 and 4."),
    n("Free rhythm","No steady beat or regular metre"),
    n("Cycles","Repeating rhythmic cycles, common in many global music cultures")
  ]),
  n("Bar lines",[
    n("Final (double) bar line","The end of the piece"),
    n("Repeat sign","Go back and play the section again"),
    n("Start and end repeat signs","Play the bars between the dots twice, then go on")
  ]),
  ask("Is there a steady beat?","Fast or slow – does the tempo change?","How many beats in a bar?","Are the rhythms long and smooth or short and busy?","Can you hear an ostinato, syncopation or a backbeat?")
]),

n("Pitch","How high or low a sound is – melody, harmony and tonality.",[
  n("Key ideas",[
    n("Definite pitch","A clear note you can sing back (flute, violin, xylophone)"),
    n("Indefinite pitch","No clear note (snare drum, cymbal)"),
    n("Melody","The main tune – pitches one after another"),
    n("Harmony","Two or more different notes sounding together")
  ]),
  n("The staff and clefs",[
    n("Staff (stave)","5 lines and 4 spaces"),
    n("Clef","Tells you which notes the lines and spaces stand for"),
    n("Treble clef (G clef)","Higher notes. It curls around the G line."),
    n("Bass clef (F clef)","Lower notes. The two dots sit either side of the F line."),
    n("Ledger lines","Short extra lines for notes above or below the staff"),
    n("Grand staff","Piano music: treble and bass staves joined by a brace. MIDDLE C sits on a ledger line between them – the same note in both clefs.")
  ]),
  n("Treble clef notes","Middle C (on a ledger line) up to high A",[
    n("Lines: E G B D F","Bottom to top – Every Good Boy Deserves Fruit"),
    n("Spaces: F A C E","Bottom to top – spells FACE")
  ]),
  n("Bass clef notes","Low E up to middle C (on a ledger line)",[
    n("Lines: G B D F A","Bottom to top – Good Boys Do Fine Always"),
    n("Spaces: A C E G","Bottom to top – All Cows Eat Grass")
  ]),
  n("The keyboard",[
    tip("Finding C","C is always the white key to the left of the group of TWO black keys."),
    n("Semitone","The smallest step, from one key to the very next key (E to F, or C to C sharp)"),
    n("Tone","Two semitones (C to D – there is a black key in between)"),
    n("Octave","From one note to the next note with the same letter name (8 letter names apart)"),
    n("Interval","The distance between any two pitches. Count both notes: C to E is C-D-E = a 3rd.")
  ]),
  n("Accidentals",[
    n("Sharp ♯","Raises the note by a semitone (F sharp)"),
    n("Flat ♭","Lowers the note by a semitone (B flat)"),
    n("Natural ♮","Cancels a sharp or flat")
  ]),
  n("How melodies move",[
    n("By step","To the next-door note"),
    n("By leap","Jumping over notes"),
    n("Repeated notes","Staying on the same pitch"),
    n("Contour","The shape of the melody",[
      n("Ascending","Going up"),n("Descending","Going down"),n("Arch","Up, then down"),
      n("Wave-like","Up and down, over and over"),n("Staying the same","")])
  ]),
  n("Tonality",[
    n("Major","Usually sounds bright and happy",[
      n("C major scale","Eight notes moving by step from C to C – no sharps or flats"),
      n("The major pattern","Tone, Tone, Semitone, Tone, Tone, Tone, Semitone – every major scale follows it"),
      n("G major","One sharp (F sharp)"),
      n("D major","Two sharps (F sharp, C sharp)"),
      n("F major","One flat (B flat)"),
      n("B flat major","Two flats (B flat, E flat)")]),
    n("Minor","Usually sounds darker or sadder",[
      n("A minor (natural minor)","Same notes as C major but starting on A")]),
    n("Pentatonic","A five-note scale, common in folk music from many cultures",[
      n("C major pentatonic","C D E G A (no F or B)")]),
    n("Modal","Based on modes such as Dorian or Mixolydian",[
      n("D Dorian","The white notes from D to D")]),
    n("Chromatic scale","Every semitone – all 12 notes")
  ]),
  n("Harmony and chords",[
    n("Chord","Three or more notes sounded together"),
    n("Triad","A three-note chord, e.g. C major: C – E – G"),
    n("Primary chords in C major","Chord symbols above, Roman numerals below",[
      n("I – Tonic","C: C E G"),
      n("IV – Subdominant","F: F A C"),
      n("V – Dominant","G: G B D"),
      n("V7 – Dominant seventh","G7: G B D F")]),
    n("Major vs minor triad","Only the middle note changes (E becomes E flat)"),
    n("Chord diagrams","Dots = where fingers press, O = open string, X = do not play. C on ukulele is one finger on the 3rd fret.")
  ]),
  n("Pitch devices",[
    n("Riff","A short, catchy repeated pattern (rock, pop, jazz – often guitar or bass)"),
    n("Ostinato","A repeated melodic pattern"),
    n("Drone","A long sustained note held underneath the music (bagpipes, didgeridoo)")
  ]),
  n("Ways of notating pitch",[
    n("Staff notation","Treble and bass clef"),
    n("Tablature (TAB)","Lines are the strings, numbers are the frets to press"),
    n("Graphic notation","Shapes, lines and pictures instead of notes – height shows pitch, width shows length, size shows volume")
  ]),
  ask("Is the melody high or low?","Does it move by step, leap or repeated notes?","What is its contour?","Does it sound major or minor?","Can you hear a riff, ostinato or drone?","Do the chords change often?")
]),

n("Texture","The layers of sound and how they combine.",[
  n("Density",[
    n("Thin","Few layers, e.g. a solo flute"),
    n("Thick","Many layers, e.g. full orchestra. Adding instruments makes the texture thicker."),
    n("Texture graph","A layer diagram – count the coloured layers in each section to see the texture get thicker and thinner")
  ]),
  n("Roles of layers",[
    n("Melodic","The tune"),
    n("Harmonic","Chords and accompaniment"),
    n("Rhythmic","Drums and percussion, bass line")
  ]),
  n("Types of texture",[
    n("Unison","Everyone sings or plays exactly the same notes together"),
    n("Monophonic","A single melody line with no accompaniment – one person singing alone; a solo flute"),
    n("Homophonic","A melody supported by chords or accompaniment – a singer with strummed guitar; most pop songs"),
    n("Polyphonic","Two or more independent melodies at the same time – a round such as Row, Row, Row Your Boat or Frère Jacques")
  ]),
  ask("How many layers can you hear?","Is it thick or thin – does that change?","Which instrument has the melody?","What is each other layer doing – harmonic or rhythmic role?")
]),

n("Performing media and timbre","Performing media are the instruments and voices that perform the music. Timbre (tone colour) is the unique quality of a sound – how you tell a trumpet from a violin on the same note.",[
  n("Sound sources",[
    n("Voices",""),n("Instruments",""),
    n("Electronic","Synthesiser, drum machine, samples"),
    n("Natural / environmental","Body percussion, found sounds")
  ]),
  n("Families of the orchestra","Quieter strings sit at the front, louder brass and percussion at the back",[
    n("Strings","Strings vibrate – bowed (arco) or plucked (pizzicato)",[
      n("Violin","Highest string instrument"),n("Viola","Slightly bigger and lower than the violin"),n("Cello","Played sitting down"),
      n("Double bass","Lowest string instrument"),n("Harp","Plucked strings. The guitar is a string instrument too.")]),
    n("Woodwind","Blowing across a hole (flute) or through a reed",[
      n("Flute","Blow across the hole (no reed)"),n("Oboe","Double reed"),n("Clarinet","Single reed"),n("Bassoon","Lowest woodwind, double reed"),
      n("Saxophone","Metal body but a single reed, so it is woodwind")]),
    n("Brass","Buzzing the lips into a mouthpiece",[
      n("Trumpet","Highest brass, three valves"),n("French horn","Coiled tubing, mellow sound"),
      n("Trombone","Uses a slide instead of valves"),n("Tuba","Lowest brass")]),
    n("Percussion","Striking, shaking or scraping",[
      n("Tuned","Play definite pitches",[n("Xylophone","Wooden bars"),n("Glockenspiel","Metal bars"),n("Timpani (kettledrums)","Large drums tuned to a note")]),
      n("Untuned","Indefinite pitch",[n("Snare drum",""),n("Cymbals",""),n("Tambourine","Struck or shaken")]),
      n("Drum kit","Bass drum, snare, toms, hi-hat and cymbals – written on a percussion staff"),
      n("Maracas","Played by SHAKING"),n("Guiro","Played by SCRAPING")]),
    tip("Tricky ones","The saxophone is metal but it is WOODWIND because it uses a reed. Inside a piano, hammers strike strings.")
  ]),
  n("Keyboards, guitars and others",[
    n("Grand piano","Hammers strike strings"),
    n("Synthesiser","ELECTRONIC sound source"),
    n("Acoustic guitar","Strummed or plucked"),
    n("Electric guitar","Needs an amplifier"),
    n("Bass guitar","Four strings – plays the bass line"),
    n("Ukulele","Four strings"),
    n("Didgeridoo (yidaki)","Played with vibrating lips to make a drone")
  ]),
  n("Playing techniques","Written into the music: pizz. = pluck the strings, arco = go back to the bow",[
    n("Blowing",""),n("Bowing",""),n("Plucking",""),n("Strumming",""),n("Striking",""),
    n("Shaking","Maracas"),n("Scraping","Guiro")
  ]),
  n("Voices and ensembles",[
    n("Voice types (SATB)","Highest to lowest: Soprano, Alto, Tenor, Bass"),
    n("A cappella","Singing with no instruments"),
    n("Ensemble sizes","Solo (1) · Duet (2) · Trio (3) · Quartet (4) · band · choir · orchestra (led by a conductor)"),
    n("Typical rock band","Electric guitar, bass guitar, drum kit, vocals (often keyboard)")
  ]),
  n("Words to describe timbre",[
    n("bright · dark · warm · mellow",""),n("harsh · nasal · reedy · metallic",""),
    n("breathy · hollow · rich · thin",""),n("piercing · booming · smooth · raspy","")
  ]),
  ask("Which instruments or voices can you hear?","Which family?","How is each one being played?","Choose two words to describe the timbre.")
]),

n("Dynamics and expression","Dynamics is how loud or soft the music is. Expression is how the notes are played – articulation, expressive techniques and effects.",[
  n("Dynamics","Softest to loudest",[
    n("pp – pianissimo","Very soft"),n("p – piano","Soft"),n("mp – mezzo piano","Moderately soft"),
    n("mf – mezzo forte","Moderately loud"),n("f – forte","Loud"),n("ff – fortissimo","Very loud"),
    n("In a real melody","Start soft (p), crescendo to loud (f), diminuendo, end very soft (pp)")
  ]),
  n("Gradual changes",[
    n("Crescendo (cresc.)","Gradually getting louder – a hairpin opening out, or the word cresc. with a dashed line"),
    n("Diminuendo / decrescendo (dim.)","Gradually getting softer")
  ]),
  n("Articulation",[
    n("Staccato (dots)","Short and detached"),
    n("Accent","Play the note with emphasis"),
    n("Slur","Play legato – smooth and connected"),
    n("Tie","Joins two notes of the SAME pitch into one longer note"),
    n("Tenuto (lines)","Hold each note for its full length, slightly stressed"),
    n("Fermata (pause)","Hold the note longer"),
    tip("Tie or slur?","Same pitch = tie (add the values together). Different pitches = slur (play smoothly).")
  ]),
  n("Expressive techniques and effects",[
    n("Pizzicato","Plucking the strings of a bowed instrument"),
    n("Arco","With the bow"),
    n("Vibrato","A slight, rapid wobble in pitch that warms up the sound"),
    n("Glissando","Sliding from one note to the other"),
    n("Trill (tr)","Rapidly alternate with the note above"),
    n("Distortion","Electronic effect that makes a guitar sound fuzzy and gritty"),
    n("Delay","Electronic effect that repeats the sound like an echo"),
    n("Reverb","Makes it sound like a large space"),
    tip("Why Italian?","Most musical terms are Italian – e.g. Andante (tempo), rit. (slow down).")
  ]),
  ask("Is it loud or soft overall?","Do the dynamics change suddenly or gradually?","Are the notes smooth (legato) or detached (staccato)?","Can you hear accents or any effects?")
]),

n("Structure","How the sections of the music are organised.",[
  n("Macrostructure","The big sections",[
    n("Binary – A B","Two contrasting sections"),
    n("Ternary – A B A","Three sections – the first one returns"),
    n("Rondo – A B A C A","The main section keeps returning between new sections"),
    n("Verse–chorus","Intro, verse, chorus, verse, chorus, bridge, chorus, outro – most pop and rock songs"),
    n("12-bar blues","A 12-bar chord pattern built on chords I, IV and V, repeated for the whole song"),
    n("Cyclic","A pattern or loop that repeats around and around – chord loops, ostinato-based and much global music")
  ]),
  n("Song sections",[
    n("Intro","Opening section"),
    n("Verse","Same melody, DIFFERENT words each time (tells the story)"),
    n("Chorus","Same melody AND same words each time (the hook)"),
    n("Bridge","A contrasting section, usually heard once"),
    n("Outro (coda)","Closing section")
  ]),
  n("Microstructure","The small building blocks",[
    n("Motif","A short musical idea that is used and developed – like the four-note idea from Beethoven's Symphony No. 5, repeated a step lower"),
    n("Phrase","A musical sentence. Ode to Joy: a question phrase that sounds unfinished, then an answer phrase that ends on the home note."),
    n("Riff / ostinato","Short repeated patterns"),
    n("Call and response","A leader sings or plays, the group answers")
  ]),
  n("Signs that change the order",[
    n("Repeat sign","Play the section again"),
    n("1st and 2nd time bars","First time play bracket 1 and repeat; second time skip to bracket 2"),
    n("Da Capo (D.C.)","Go back to the beginning"),
    n("Fine","The end. D.C. al Fine = go back to the beginning and stop at Fine."),
    n("Coda","The ending section")
  ]),
  ask("How many different sections can you hear?","Which ones repeat?","Label them with letters (A, B…).","What tells you a new section has started – a change of instruments, dynamics, melody?")
])
]);
