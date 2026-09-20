/* Stage 5 mindmap content, from the Notion page "Stage 5 Music Content". Uses n(), ask(), tip() from content.js */
const DATA5=n("Elements of Music","Stage 5 · NSW Music 7–10 Syllabus (2024)",[

n("Duration","The length of sounds and silences. Stage 5 adds more complex note values, changing and irregular metres, and rhythmic devices.",[
  n("Complex note and rest values",[
    n("Triplet","Three notes squeezed into the time of two. A quaver triplet fills one crotchet beat; a crotchet triplet fills two beats. The small 3 and bracket show it."),
    n("Duplet","The opposite: two notes in the time of three (found in compound time such as 6/8)"),
    n("Dotted rhythms","A long-short pattern such as dotted quaver + semiquaver. Gives a skipping or march-like feel.")
  ]),
  n("Mixed and irregular metre",[
    n("Mixed metre (changing metre)","The time signature changes during the piece, e.g. 4/4, then 3/4, then 2/4, then back to 4/4"),
    n("Irregular (asymmetric) metre","Bars that cannot be split into equal beats. The beats fall into uneven groupings of 2s and 3s.",[
      n("5/4","Five crotchet beats, usually felt as 3 + 2 (or 2 + 3)"),
      n("7/8","Seven quavers grouped 2 + 2 + 3. The beams show the grouping.")])
  ]),
  n("Rhythmic devices",[
    n("Up-beat / anacrusis","One or more notes before the first full bar. The last bar is shortened to make up the difference."),
    n("Polyrhythm","Two different divisions of the beat at the same time, e.g. 3 against 2. Clap the top line with one hand and the bottom with the other."),
    n("Cross-rhythm","An accent pattern that cuts across the metre, e.g. 3 + 3 + 2 quavers over a steady 4/4 beat"),
    n("Swung (swing)","Pairs of quavers played long-short, like a triplet with the first two notes tied. Written as even quavers. Typical of jazz and blues."),
    n("Diminution","A rhythm repeated in shorter note values (usually half) – it sounds faster"),
    n("Augmentation","A rhythm repeated in longer note values (usually double) – it sounds slower")
  ]),
  ask("Does the metre stay the same?","Can you conduct it in 2, 3 or 4 – or is it irregular?","Are the quavers straight or swung?","Does the piece start with an up-beat?","Can you hear two rhythms pulling against each other?")
]),

n("Pitch","How high or low sounds are – melody, harmony and tonality. Stage 5 adds melodic and harmonic devices, scales from around the world, and other ways of notating music.",[
  n("Melodic devices",[
    n("Sequence","A melodic pattern repeated straight away at a higher or lower pitch"),
    n("Melisma","One syllable sung over many notes (melismatic). The opposite is syllabic: one note per syllable."),
    n("Chromaticism","Using notes from outside the key (extra sharps, flats and naturals), often moving by semitone"),
    n("Motif","A short idea that is developed through a piece (see Stage 4)"),
    n("Ornamentation","Decorating a note",[
      n("Trill",""),n("Mordent",""),n("Turn",""),
      n("Grace notes","Acciaccatura = crushed, appoggiatura = leaning")])
  ]),
  n("Scales",[
    n("By number of notes",[
      n("Pentatonic","5 notes. Open, folk-like – see Stage 4."),
      n("Hexatonic","6 notes. Blues and whole-tone scales are both six-note scales."),
      n("Heptatonic","7 notes. Major, minor and the modes are all seven-note scales.")]),
    n("Blues","C, E flat, F, F sharp, G, B flat. Minor pentatonic plus the blue note. Blues, rock, jazz."),
    n("Whole-tone","Every step is a tone. Dreamy, floating, no home note. Debussy, film music."),
    n("Chromatic","All 12 semitones. Tense, sliding – see Stage 4."),
    n("Harmonic minor","Natural minor with a raised 7th. The big gap between notes 6 and 7 gives an exotic sound."),
    n("Raga (India)","A scale plus rules. Each raga has set notes going up and down, special phrases, a mood and a time of day.",[
      n("Sargam","The Indian note names Sa Re Ga Ma Pa Dha Ni Sa, like do re mi"),
      n("Sitar","Plays the raga"),
      n("Tabla","The drums that accompany it")]),
    n("Maqam (Arabic music)","A scale plus rules. Many maqamat use quarter-tones that fall between the keys of a piano.",[
      n("Oud","The fretless lute of Arabic music")])
  ]),
  n("Harmonic devices",[
    n("Consonance","Notes that sound stable and at rest together"),
    n("Dissonance","Notes that clash and want to move on (resolve)"),
    n("Cadence","The two chords that end a phrase; musical punctuation",[
      n("Perfect: V – I","Finished. A full stop."),
      n("Plagal: IV – I","Finished, but softer – the Amen cadence"),
      n("Imperfect: ends on V","Unfinished. A comma."),
      n("Interrupted: V – vi","A surprise – you expect I but get a minor chord")]),
    n("Extended chords","A triad with more thirds stacked on top: 7ths, 9ths and beyond. Common in jazz, funk and R&B."),
    n("Modulation","Changing key during a piece. A new key signature confirms it."),
    n("Pedal point","A note held (or repeated) in the bass while the chords change above it")
  ]),
  n("Other ways of notating music",[
    n("Lead sheet","Melody, lyrics and chord symbols only. The players work out the rest. Used in jazz and pop."),
    n("Chord chart","Chords and beats only (slashes), no melody. Used by rhythm sections."),
    n("Piano roll","How a digital audio workstation (DAW) shows MIDI notes"),
    n("Gamelan cipher notation","Numbers instead of notes. A Javanese gamelan is made of gongs, metallophones and drums.")
  ]),
  ask("Which scale is this built on – can you hear blue notes or a whole-tone wash?","Does the phrase end finished (perfect or plagal) or unfinished (imperfect)?","Does the key change?","Is there a sequence or a pedal point?","Is the singing syllabic or melismatic?")
]),

n("Texture","The layers of sound and how they relate to each other.",[
  tip("Beyond thick or thin","Name each layer, its role (melodic, harmonic, rhythmic, bass) and how the layers interact."),
  n("Textural devices","How the layers interact",[
    n("Unison","Everyone plays or sings exactly the same notes"),
    n("Doubling","The same line played by two instruments, often an octave apart – it strengthens and colours the line"),
    n("Imitation","One part copies another shortly afterwards, often at a different pitch. It does not have to be exact."),
    n("Canon","Strict imitation – the second part copies the first exactly, all the way through (a round is a canon)"),
    n("Call and response","One part makes a statement, another answers"),
    n("Counter-melody","A second, less important melody played against the main tune"),
    n("Contrary motion","Two lines move in opposite directions – one up, one down")
  ]),
  ask("How many layers are there and what is each one's role?","Do any instruments double each other?","Does one part imitate another – exactly (canon) or loosely?","Is there a counter-melody?","How does the texture change between sections?")
]),

n("Performing media and timbre","Performing media are the voices, instruments and technologies used. Timbre is the quality of the sound they make. Stage 5: combinations, range and register, and technique directions.",[
  n("Combinations",[
    n("Small ensembles","One player per part – every line is exposed. Duo, trio, piano trio, jazz combo, rock band, vocal group.",[
      n("String quartet","2 violins, viola, cello – four staves, one player each. The viola reads the alto clef (middle C is the middle line).")]),
    n("Large ensembles","Many players per part – richer, thicker, louder; usually needs a conductor. Symphony orchestra, chamber orchestra, concert band, big band, choir, gamelan, musical theatre pit band.")
  ]),
  n("Range and register",[
    n("Range","The distance from the lowest to the highest note an instrument or voice can produce"),
    n("Register","Which part of that range is being used: low, middle or high. A clarinet is dark and woody down low, bright and piercing up high.")
  ]),
  n("Directions for techniques",[
    n("pizz. / arco","Strings: pluck / return to the bow"),
    n("con sord. / senza sord.","With mute / without mute (strings and brass)"),
    n("8va","Play an octave higher than written"),
    n("flz. (flutter-tongue)","Wind players roll an rrr while blowing – a growling, buzzing sound"),
    n("Harmonic (small circle)","Lightly touch the string for a pure, glassy, flute-like note"),
    n("P.M. (palm mute)","Guitar: rest the picking hand on the strings for a chunky, muffled sound"),
    n("sul pont. / sul tasto","Bow near the bridge (thin, glassy) / over the fingerboard (soft, airy)"),
    n("Vocal techniques","Falsetto (high light voice), belt (powerful chest voice), scat (improvised nonsense syllables), vibrato (wavering pitch)")
  ]),
  ask("Is this a small or large ensemble – how can you tell?","Which register is the melody in, and how does that affect the timbre?","What techniques can you hear (mutes, pizzicato, harmonics, palm muting, falsetto)?","Has the sound been changed electronically?")
]),

n("Dynamics and expression","Dynamics is the volume of the music; expression is how the notes are shaped. Stage 5 adds extreme and sudden dynamics, finer articulation, instrument-specific techniques and electronic manipulation.",[
  n("Gradations of dynamics",[
    n("niente (n)","Nothing. dim. al niente = fade away to complete silence. A small circle on the hairpin shows it."),
    n("sforzando (sfz)","A sudden, forced accent on one note or chord"),
    n("fortepiano (fp)","Loud, then immediately soft"),
    n("ppp and fff","Extremely soft / extremely loud"),
    n("subito","Suddenly, e.g. subito piano"),
    n("poco a poco","Little by little"),
    n("molto","Very")
  ]),
  n("Articulation",[
    n("Tenuto (line)","Hold for the full value, slightly stressed"),
    n("Marcato (wedge)","Marked: a strong accent, stronger than a normal accent"),
    n("Portato","Dots and lines under a slur – gently separated, halfway between legato and staccato")
  ]),
  n("Techniques for specific media",[
    n("Guitar / bass","Palm muting, bends, slides, hammer-ons and pull-offs, harmonics, slap bass"),
    n("Wind and brass","Flutter-tonguing, mutes, glissando, growl, vibrato"),
    n("Strings","Pizzicato, tremolo, harmonics, sul ponticello, col legno (with the wood of the bow), double stops"),
    n("Voice","Falsetto, belt, scat, vibrato, melisma, vocal fry, beatboxing"),
    n("Piano / keys","Sustain pedal, una corda (soft pedal), glissando, prepared piano")
  ]),
  n("Electronic manipulation",[
    n("Looping","Recording a short phrase and repeating it over and over, often layering new loops on top (loop pedals, DAWs, hip hop and EDM)"),
    n("Compression","Automatically turning down the loudest moments so the overall level is more even (and can then be made louder)"),
    n("Sustain","How long a sound keeps ringing. On a synth it is the S in the ADSR envelope; on guitar it can be extended with a compressor or sustain pedal."),
    n("From Stage 4","Distortion, delay, reverb"),
    n("Others","Chorus, autotune, EQ, panning, sampling")
  ]),
  n("Expressive directions","Tempo and mood markings written into the score",[
    n("dolce","Sweetly"),n("cantabile","In a singing style"),n("espressivo (espress.)","Expressively"),
    n("con brio / con fuoco","With vigour / with fire"),n("agitato / tranquillo","Agitated / calm"),
    n("maestoso / grazioso","Majestic / graceful"),
    n("rubato","Flexible tempo – push and pull the beat for expression"),
    n("a tempo","Return to the original speed")
  ]),
  ask("Are there sudden changes (sfz, fp, subito) or gradual ones?","How are the notes articulated – tenuto, marcato, portato, staccato, legato?","Which techniques belong to this instrument?","What has been done electronically – loops, compression, effects?")
]),

n("Structure","How music is organised – the big sections, the small building blocks, and how musical material is developed.",[
  tip("Link structure to style","A blues, a symphony and a gamelan piece are each built in a typical way."),
  n("Macrostructures",[
    n("Strophic","Hymns, folk songs, many ballads"),
    n("Through-composed","No section returns; follows a story (art songs, some film music)"),
    n("Theme and variations","The theme returns each time changed – melody decorated, new rhythm, minor key, new texture"),
    n("Sonata form","Two contrasting themes are presented, developed, then brought back. In the recapitulation both themes are in the home key."),
    n("Multi-movement works","Symphonies, concertos (usually 3 movements: fast, slow, fast), sonatas and suites are made of several complete, contrasting movements")
  ]),
  n("Microstructures",[
    n("Sequence","A pattern repeated at a new pitch (see Pitch)"),
    n("Head","In jazz, the main tune. The band plays the head, takes turns improvising solos over the same chords, then plays the head again."),
    n("Colotomic structure","In gamelan music, time is organised by a cycle in which different gongs mark different points; the largest gong marks the end of each cycle."),
    n("From Stage 4","Motif, phrase, riff, ostinato, call and response")
  ]),
  n("Developing musical material","What happens to the idea",[
    n("Repetition","Heard again unchanged – creates unity"),
    n("Variation","Heard again with something changed – ornamented, reharmonised, new rhythm or instrument"),
    n("Contrast","Something new – creates variety and marks a new section"),
    n("Sequence","Repeated higher or lower"),
    n("Augmentation / diminution","Same idea in longer / shorter note values"),
    n("Fragmentation","Only part of the idea is used and repeated"),
    n("Inversion","The shape is turned upside down"),
    n("Modulation","The idea returns in a new key")
  ]),
  n("What signals a new section",[
    n("A cadence",""),n("A modulation",""),n("A drum fill",""),n("A change of texture or instrumentation",""),
    n("A change of dynamics or tempo",""),n("A pause or silence",""),n("The return of a familiar theme or riff","")
  ]),
  ask("Map the sections with letters. Which form is it closest to?","How does the structure suit the style?","When material returns, is it repeated, varied or developed – and how?","What signals each new section?")
])
]);
