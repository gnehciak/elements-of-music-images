# Elements of Music – images and mindmap

Live: https://elements-of-music.vercel.app (Stage 4 and Stage 5, switch with the toggle in the header; `#stage5` in the link opens Stage 5 directly).

Images for the Stage 4 *Elements of Music* reference (NSW Music 7–10 Syllabus, 2024), plus the interactive mindmap that uses them.

- `index.html` – the interactive mindmap (open it in a browser; it loads pictures from `images/`)
- `src/` + `build.py` – mindmap source: `content.js` (the text), `image-map.json` (which picture goes on which node), `template.html` (design and behaviour). Run `python3 build.py` to rebuild `index.html`
- `lilypond/` – LilyPond sources for the notation graphics added later
- `images/` – 218 notation graphics and instrument photos, exported from the Notion page
- `captions.json` – file name, caption, credit and pixel size for every image

## Linking an image

Every image has a permanent direct link:

```
https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/<file name>
```

For example https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_crotchet.png – the full list of links is in the table below and in `captions.json` (`url` field).

## Images and credits

Instrument photos come from Wikimedia Commons under the licences listed; keep the credit with the photo when you reuse it.

| File (direct link) | Caption | Credit / licence |
|---|---|---|
| [`ex_tempo_mark.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_tempo_mark.png) | A tempo marking sits above the first bar | Own notation graphic |
| [`nv_semibreve.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_semibreve.png) | Semibreve – 4 beats | Own notation graphic |
| [`nv_minim.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_minim.png) | Minim – 2 beats | Own notation graphic |
| [`nv_crotchet.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_crotchet.png) | Crotchet – 1 beat | Own notation graphic |
| [`nv_quaver.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_quaver.png) | Quaver – half a beat | Own notation graphic |
| [`nv_quaverpair.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_quaverpair.png) | Two beamed quavers – 1 beat altogether | Own notation graphic |
| [`nv_semiquavers.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_semiquavers.png) | Four semiquavers – 1 beat altogether | Own notation graphic |
| [`nv_dotted_minim.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_dotted_minim.png) | Dotted minim – 3 beats | Own notation graphic |
| [`nv_dotted_crotchet.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_dotted_crotchet.png) | Dotted crotchet – 1½ beats | Own notation graphic |
| [`ex_note_tree.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_note_tree.png) | The note-value pyramid: every row lasts the same time (4 beats). Each note splits into two of the next kind | Own notation graphic |
| [`rest_semibreve.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/rest_semibreve.png) | Semibreve rest – 4 beats. HANGS below the line | Own notation graphic |
| [`rest_minim.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/rest_minim.png) | Minim rest – 2 beats. SITS on the line like a hat | Own notation graphic |
| [`rest_crotchet.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/rest_crotchet.png) | Crotchet rest – 1 beat | Own notation graphic |
| [`rest_quaver.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/rest_quaver.png) | Quaver rest – half a beat | Own notation graphic |
| [`ts_44.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ts_44.png) | 4/4 – four crotchet beats per bar (simple quadruple) | Own notation graphic |
| [`ts_34.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ts_34.png) | 3/4 – three crotchet beats per bar (simple triple) | Own notation graphic |
| [`ts_68.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ts_68.png) | 6/8 – compound duple | Own notation graphic |
| [`bar_68_group.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/bar_68_group.png) | 6/8: quavers are beamed in two groups of three | Own notation graphic |
| [`ts_24.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ts_24.png) | 2/4 – two crotchet beats per bar (simple duple), like a march | Own notation graphic |
| [`ex_34_quavers.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_34_quavers.png) | 3/4 also holds six quavers – but grouped in THREE pairs (simple time). Compare with 6/8 above: TWO groups of three (compound time) | Own notation graphic |
| [`ex_ostinato.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_ostinato.png) | Ostinato – the same one-bar rhythm repeated over and over | Own notation graphic |
| [`ex_syncopation.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_syncopation.png) | Syncopation – bar 2 accents the notes that fall BETWEEN the beats | Own notation graphic |
| [`ex_backbeat.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_backbeat.png) | Backbeat on a drum kit – hi-hat quavers on top, bass drum on beats 1 and 3, accented snare on beats 2 and 4 | Own notation graphic |
| [`ex_repeat_both.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_repeat_both.png) | Start and end repeat signs – play the two bars between the dots twice, then go on | Own notation graphic |
| [`final_barline.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/final_barline.png) | Final (double) bar line – the end of the piece | Own notation graphic |
| [`repeat_sign.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/repeat_sign.png) | Repeat sign – go back and play the section again | Own notation graphic |
| [`clef_treble.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/clef_treble.png) | Treble clef (G clef) – higher notes. It curls around the G line | Own notation graphic |
| [`clef_bass.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/clef_bass.png) | Bass clef (F clef) – lower notes. The two dots sit either side of the F line | Own notation graphic |
| [`ref_grand_staff.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_grand_staff.png) | The grand staff (piano music): treble and bass staves joined by a brace. MIDDLE C sits on a ledger line between them – it is the same note in both clefs | Own notation graphic |
| [`ex_ledger.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_ledger.png) | Ledger lines extend the staff below and above | Own notation graphic |
| [`ref_treble_notes.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_treble_notes.png) | Treble clef: middle C (on a ledger line) up to high A | Own notation graphic |
| [`ref_bass_notes.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_bass_notes.png) | Bass clef: low E up to middle C (on a ledger line) | Own notation graphic |
| [`ref_keyboard.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_keyboard.png) | C is always the white key to the left of the group of TWO black keys (middle C highlighted) | Own notation graphic |
| [`kb_semitone_tone.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/kb_semitone_tone.png) | C to D is a TONE (there is a black key in between). E to F is a SEMITONE (no key in between) | Own notation graphic |
| [`kb_octave.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/kb_octave.png) | An octave on the keyboard | Own notation graphic |
| [`ex_octave.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_octave.png) | An octave on the staff: middle C up to the next C | Own notation graphic |
| [`ex_intervals.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_intervals.png) | Intervals above C – count both notes: C to E is C-D-E = a 3rd | Own notation graphic |
| [`acc_sharp.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/acc_sharp.png) | Sharp – raises the note by a semitone (F sharp) | Own notation graphic |
| [`acc_flat.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/acc_flat.png) | Flat – lowers the note by a semitone (B flat) | Own notation graphic |
| [`acc_natural.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/acc_natural.png) | Natural – cancels a sharp or flat | Own notation graphic |
| [`mel_steps.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_steps.png) | By STEP – to the next-door note | Own notation graphic |
| [`mel_leaps.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_leaps.png) | By LEAP – jumping over notes | Own notation graphic |
| [`mel_repeat.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_repeat.png) | REPEATED notes | Own notation graphic |
| [`mel_ascending.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_ascending.png) | Ascending contour | Own notation graphic |
| [`mel_arch.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_arch.png) | Arch contour – up, then down | Own notation graphic |
| [`mel_descending.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_descending.png) | Descending contour | Own notation graphic |
| [`mel_wave.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/mel_wave.png) | Wave-like contour – up and down, over and over | Own notation graphic |
| [`scale_cmaj.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/scale_cmaj.png) | C major scale – eight notes moving by step from C to C | Own notation graphic |
| [`key_g.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/key_g.png) | G major – one sharp (F sharp) | Own notation graphic |
| [`key_f.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/key_f.png) | F major – one flat (B flat) | Own notation graphic |
| [`scale_cmaj_tts.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/scale_cmaj_tts.png) | Every major scale follows the same pattern of steps: Tone, Tone, Semitone, Tone, Tone, Tone, Semitone | Own notation graphic |
| [`scale_amin.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/scale_amin.png) | A minor scale (natural minor) – same notes as C major but starting on A. Sounds darker | Own notation graphic |
| [`scale_cpent.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/scale_cpent.png) | C major pentatonic – only five different notes: C D E G A (no F or B) | Own notation graphic |
| [`scale_ddorian.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/scale_ddorian.png) | D Dorian mode (modal) – the white notes from D to D | Own notation graphic |
| [`scale_chromatic.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/scale_chromatic.png) | Chromatic scale – every semitone, all 12 notes | Own notation graphic |
| [`key_d.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/key_d.png) | D major – two sharps (F sharp, C sharp) | Own notation graphic |
| [`key_bb.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/key_bb.png) | B flat major – two flats (B flat, E flat) | Own notation graphic |
| [`triad_c.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/triad_c.png) | C major triad: C – E – G | Own notation graphic |
| [`ex_chords_c.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_chords_c.png) | The primary chords in C major, with chord symbols above and Roman numerals below | Own notation graphic |
| [`ex_major_minor.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_major_minor.png) | Major vs minor triad – only the middle note changes (E becomes E flat) | Own notation graphic |
| [`ex_guitar_chord_c.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_guitar_chord_c.png) | Chord diagram: C on guitar. Dots = where fingers press, O = open string, X = do not play | Own notation graphic |
| [`ex_uke_chord_c.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_uke_chord_c.png) | Chord diagram: C on ukulele – one finger on the 3rd fret | Own notation graphic |
| [`ex_riff.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_riff.png) | A bass riff – a short, catchy pattern that keeps repeating (note the repeat sign) | Own notation graphic |
| [`ex_drone.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_drone.png) | A drone – the bottom staff holds the same two notes (D and A) while the melody moves above | Own notation graphic |
| [`ex_tab_staff.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_tab_staff.png) | The same notes written in staff notation (top) and guitar TAB (bottom) | Own notation graphic |
| [`ex_graphic_notation.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_graphic_notation.png) | A graphic score – shapes show pitch (height), length (width) and volume (size) | Own notation graphic |
| [`tab.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tab.png) | Guitar tablature (TAB) | Own notation graphic |
| [`ex_texture_graph.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_texture_graph.png) | A texture graph (layer diagram) of a pop song – count the coloured layers in each section to see the texture get thicker and thinner | Own notation graphic |
| [`tex_roles.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tex_roles.png) | Roles of layers: melodic (top), harmonic (middle), bass line (bottom) | Own notation graphic |
| [`tex_unison.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tex_unison.png) | Unison – both voices have exactly the same notes | Own notation graphic |
| [`tex_poly.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tex_poly.png) | Polyphonic – a round (Frère Jacques): Voice 2 starts the tune two bars later, so two independent melodies overlap | Own notation graphic |
| [`tex_mono.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tex_mono.png) | Monophonic – one melody line only | Own notation graphic |
| [`tex_homo.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tex_homo.png) | Homophonic – melody (top) supported by chords (bottom) | Own notation graphic |
| [`ex_orchestra_layout.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_orchestra_layout.png) | Where the families sit in a symphony orchestra – quieter strings at the front, louder brass and percussion at the back | Own notation graphic |
| [`violin.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/violin.jpg) | Violin – highest string instrument | Just plain Bill, public domain, via Wikimedia Commons |
| [`cello.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/cello.png) | Cello – played sitting down | Georg Feitscher, CC BY 3.0, via Wikimedia Commons |
| [`double_bass.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/double_bass.jpg) | Double bass – lowest string instrument | AndrewKepert, CC BY-SA 3.0, via Wikimedia Commons |
| [`flute.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/flute.jpg) | Flute – blow across the hole (no reed) | Thea Paraskevaides, CC BY-SA 4.0, via Wikimedia Commons |
| [`clarinet.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/clarinet.jpg) | Clarinet – single reed | Yamaha Corporation, CC BY-SA 4.0, via Wikimedia Commons |
| [`saxophone.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/saxophone.jpg) | Alto saxophone – metal body but a single reed, so it is woodwind | muzyczny.pl, CC BY-SA 4.0, via Wikimedia Commons |
| [`trumpet.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/trumpet.jpg) | Trumpet – highest brass, three valves | Yamaha Corporation, CC BY-SA 4.0, via Wikimedia Commons |
| [`french_horn.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/french_horn.png) | French horn – coiled tubing, mellow sound | BenP, CC BY 2.5, via Wikimedia Commons |
| [`trombone.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/trombone.jpg) | Trombone – uses a slide instead of valves | Yamaha Corporation, CC BY-SA 4.0, via Wikimedia Commons |
| [`tuba.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tuba.png) | Tuba – lowest brass | Buffet Crampon, CC BY-SA 4.0, via Wikimedia Commons |
| [`timpani.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/timpani.jpg) | Timpani (kettledrums) – TUNED percussion | Reinhold Möller, CC BY-SA 4.0, via Wikimedia Commons |
| [`snare_drum.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/snare_drum.png) | Snare drum – UNTUNED percussion | Edrocked, CC BY-SA 4.0, via Wikimedia Commons |
| [`drum_kit.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/drum_kit.jpg) | Drum kit – bass drum, snare, toms, hi-hat and cymbals | Mostafameraji, CC BY 4.0, via Wikimedia Commons |
| [`maracas.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/maracas.jpg) | Maracas – played by SHAKING | Axel Heymann, CC BY-SA 3.0, via Wikimedia Commons |
| [`guiro.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/guiro.jpg) | Guiro – played by SCRAPING | Miguel Andrade, public domain, via Wikimedia Commons |
| [`ex_drum_key.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_drum_key.png) | How the drum kit is written on a percussion staff | Own notation graphic |
| [`piano.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/piano.png) | Grand piano – hammers strike strings | Steinway and Sons, CC BY-SA 3.0, via Wikimedia Commons |
| [`synthesizer.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/synthesizer.jpg) | Synthesiser – ELECTRONIC sound source | PerfectCircuit, CC0, via Wikimedia Commons |
| [`acoustic_guitar.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/acoustic_guitar.jpg) | Acoustic guitar – strummed or plucked | Tony 1212, CC BY-SA 4.0, via Wikimedia Commons |
| [`electric_guitar.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/electric_guitar.png) | Electric guitar – needs an amplifier | Spike78, CC BY-SA 4.0, via Wikimedia Commons |
| [`ukulele.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ukulele.jpg) | Ukulele – four strings | Zapyon, CC BY-SA 4.0, via Wikimedia Commons |
| [`didgeridoo.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/didgeridoo.jpg) | Didgeridoo (yidaki) – played with vibrating lips to make a drone | CC BY-SA 3.0, via Wikimedia Commons |
| [`ex_pizz_arco.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_pizz_arco.png) | Playing techniques are written into the music: pizz. = pluck the strings, arco = go back to the bow | Own notation graphic |
| [`ex_voice_ranges.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_voice_ranges.png) | Approximate ranges of the four voice types, lowest note to highest note | Own notation graphic |
| [`dyn_pp.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_pp.png) | pianissimo – very soft | Own notation graphic |
| [`dyn_mp.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_mp.png) | mezzo piano – moderately soft | Own notation graphic |
| [`dyn_mf.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_mf.png) | mezzo forte – moderately loud | Own notation graphic |
| [`dyn_ff.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_ff.png) | fortissimo – very loud | Own notation graphic |
| [`dyn_p.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_p.png) | piano – soft | Own notation graphic |
| [`dyn_f.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_f.png) | forte – loud | Own notation graphic |
| [`ex_dynamics_passage.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_dynamics_passage.png) | Dynamics in a real melody: start soft (p), crescendo to loud (f), diminuendo, end very soft (pp) | Own notation graphic |
| [`hairpin_cresc.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/hairpin_cresc.png) | Crescendo (cresc.) – gradually getting louder | Own notation graphic |
| [`hairpin_dim.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/hairpin_dim.png) | Diminuendo / decrescendo (dim.) – gradually getting softer | Own notation graphic |
| [`ex_cresc_text.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_cresc_text.png) | A crescendo can also be written as a word (cresc.) with a dashed line instead of a hairpin | Own notation graphic |
| [`art_staccato.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/art_staccato.png) | Staccato (dots) – short and detached | Own notation graphic |
| [`art_accent.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/art_accent.png) | Accent – play the note with emphasis | Own notation graphic |
| [`art_slur.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/art_slur.png) | Slur – play legato (smooth and connected) | Own notation graphic |
| [`art_tie.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/art_tie.png) | Tie – joins two notes of the SAME pitch into one longer note | Own notation graphic |
| [`art_fermata.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/art_fermata.png) | Fermata (pause) – hold the note longer | Own notation graphic |
| [`art_tenuto.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/art_tenuto.png) | Tenuto (lines) – hold each note for its full length, slightly stressed | Own notation graphic |
| [`ex_gliss.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_gliss.png) | Glissando – slide from one note to the other | Own notation graphic |
| [`ex_trill.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_trill.png) | Trill (tr) – rapidly alternate with the note above | Own notation graphic |
| [`ex_expression_text.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_expression_text.png) | Expressive directions in a score: Andante (tempo), rit. (slow down) and a fermata on the last note | Own notation graphic |
| [`form_binary.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/form_binary.png) | Binary – two contrasting sections | Own notation graphic |
| [`form_ternary.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/form_ternary.png) | Ternary – the A section comes back | Own notation graphic |
| [`form_rondo.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/form_rondo.png) | Rondo – A keeps returning between new sections | Own notation graphic |
| [`form_verse_chorus.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/form_verse_chorus.png) | A typical verse–chorus song map | Own notation graphic |
| [`form_12bar_blues.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/form_12bar_blues.png) | The 12-bar blues chord pattern (shown in C) – this 12-bar cycle repeats for the whole song | Own notation graphic |
| [`ex_motif.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_motif.png) | Motif – the famous four-note idea from Beethoven's Symphony No. 5, then repeated a step lower | Own notation graphic |
| [`ex_phrases.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_phrases.png) | Phrases – Beethoven's Ode to Joy: a 'question' phrase that sounds unfinished, then an 'answer' phrase that ends on the home note | Own notation graphic |
| [`ex_call_response.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_call_response.png) | Call and response | Own notation graphic |
| [`ex_volta.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_volta.png) | 1st and 2nd time bars – first time play bracket 1 and repeat; second time skip to bracket 2 | Own notation graphic |
| [`ex_dc_fine.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_dc_fine.png) | D.C. al Fine – go back to the beginning and stop at Fine | Own notation graphic |
| [`metronome.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/metronome.jpg) | Metronome – clicks a steady beat at the BPM you set | Vincent Quach (Invincible), CC BY-SA 3.0, via Wikimedia Commons |
| [`ex_accel_rit.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_accel_rit.png) | Tempo changes written into the music: accel. = gradually faster, rit. = gradually slower | Own notation graphic |
| [`nv_semiquaver.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/nv_semiquaver.png) | Semiquaver – quarter of a beat | Own notation graphic |
| [`ex_dot_rule.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_dot_rule.png) | The dot rule: a dot adds half of the note's value | Own notation graphic |
| [`ex_time_sig_count.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_time_sig_count.png) | 4/4 – the top 4 means four beats in every bar (count 1 2 3 4); the bottom 4 means crotchet beats | Own notation graphic |
| [`ref_staff_lines_spaces.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_staff_lines_spaces.png) | The staff: 5 lines and 4 spaces, always counted from the bottom up | Own notation graphic |
| [`ref_treble_lines.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_treble_lines.png) | Treble clef lines: E G B D F | Own notation graphic |
| [`ref_treble_spaces.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_treble_spaces.png) | Treble clef spaces: F A C E | Own notation graphic |
| [`ref_bass_lines.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_bass_lines.png) | Bass clef lines: G B D F A | Own notation graphic |
| [`ref_bass_spaces.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ref_bass_spaces.png) | Bass clef spaces: A C E G | Own notation graphic |
| [`ex_melody_harmony.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_melody_harmony.png) | Melody is one note at a time; harmony is notes sounding together | Own notation graphic |
| [`triad_f.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/triad_f.png) | Chord IV in C major – F: F A C | Own notation graphic |
| [`triad_g.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/triad_g.png) | Chord V in C major – G: G B D | Own notation graphic |
| [`chord_g7.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/chord_g7.png) | Chord V7 in C major – G7: G B D F | Own notation graphic |
| [`ex_melodic_ostinato.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/ex_melodic_ostinato.png) | A melodic ostinato – the same one-bar pattern repeated over and over | Own notation graphic |
| [`sign_coda.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/sign_coda.png) | The coda sign – marks the jump to the ending section | Own notation graphic |
| [`form_cyclic.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/form_cyclic.png) | Cyclic – a pattern or loop that repeats around and around | Own notation graphic |
| [`viola.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/viola.jpg) | Viola – slightly bigger and lower than the violin | Museum für Kunst und Gewerbe Hamburg, CC0, via Wikimedia Commons |
| [`oboe.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/oboe.jpg) | Oboe – double reed | Gebrüder Mönnig, Markneukirchen, CC BY-SA 4.0, via Wikimedia Commons |
| [`bassoon.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/bassoon.jpg) | Bassoon – lowest woodwind, double reed | Yamaha Corporation, CC BY-SA 4.0, via Wikimedia Commons |
| [`harp.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/harp.jpg) | Harp – plucked strings | N.S.M. s.p.a., CC BY-SA 4.0, via Wikimedia Commons |
| [`xylophone.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/xylophone.jpg) | Xylophones – wooden bars, TUNED percussion | Ferbr1, CC BY-SA 3.0, via Wikimedia Commons |
| [`glockenspiel.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/glockenspiel.jpg) | Glockenspiel – metal bars, TUNED percussion | flamurai, Public domain, via Wikimedia Commons |
| [`cymbals.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/cymbals.jpg) | Cymbals – UNTUNED percussion | Kovac9478, CC BY 3.0, via Wikimedia Commons |
| [`tambourine.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tambourine.jpg) | Tambourine – UNTUNED percussion, struck or shaken | Unknown photographer, CC0, via Wikimedia Commons |
| [`bass_guitar.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/bass_guitar.jpg) | Bass guitar – four strings, plays the bass line | Niranjan Arminius, CC BY-SA 4.0, via Wikimedia Commons |
| [`s5_triplets.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_triplets.png) | Triplets – the small 3 and bracket show three notes in the time of two | Own notation graphic |
| [`s5_duplet.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_duplet.png) | Duplet in 6/8 – two quavers take the time of three | Own notation graphic |
| [`s5_dotted.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_dotted.png) | Dotted rhythms – dotted quaver + semiquaver (long-short), then dotted crotchet + quaver | Own notation graphic |
| [`s5_mixed_metre.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_mixed_metre.png) | Mixed metre – 4/4, then 3/4, then 2/4, then back to 4/4 | Own notation graphic |
| [`s5_54.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_54.png) | 5/4 – five crotchet beats, usually felt as 3 + 2 (or 2 + 3) | Own notation graphic |
| [`s5_78.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_78.png) | 7/8 – seven quavers grouped 2 + 2 + 3. The beams show the grouping | Own notation graphic |
| [`s5_anacrusis.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_anacrusis.png) | Anacrusis – the piece starts on beat 4; the final bar has only 3 beats | Own notation graphic |
| [`s5_polyrhythm.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_polyrhythm.png) | Polyrhythm – 3 against 2. Clap the top line with one hand and the bottom with the other | Own notation graphic |
| [`s5_cross_rhythm.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_cross_rhythm.png) | Cross-rhythm – accents every 3 + 3 + 2 quavers pull against the steady crotchet beat underneath | Own notation graphic |
| [`s5_swing.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_swing.png) | Swing – written as even quavers, but played long-short | Own notation graphic |
| [`s5_dim_aug.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_dim_aug.png) | The same four-note idea in its original values, in diminution (halved) and in augmentation (doubled) | Own notation graphic |
| [`s5_sequence.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_sequence.png) | Sequence – the same four-note shape, each time one step higher | Own notation graphic |
| [`s5_melisma.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_melisma.png) | Syllabic (one note per syllable) then melismatic (the syllable 'A' is stretched over eight notes – the slur shows it) | Own notation graphic |
| [`s5_chromaticism.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_chromaticism.png) | Chromaticism – the melody creeps up and down by semitones, using notes outside C major | Own notation graphic |
| [`s5_ornaments.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_ornaments.png) | Common ornaments and their symbols | Own notation graphic |
| [`s5_scale_blues.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_scale_blues.png) | C blues scale | Own notation graphic |
| [`s5_scale_wholetone.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_scale_wholetone.png) | Whole-tone scale on C | Own notation graphic |
| [`s5_scale_harm_minor.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_scale_harm_minor.png) | A harmonic minor – note the raised 7th (G sharp) | Own notation graphic |
| [`s5_scale_raga.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_scale_raga.png) | The notes of Raga Bhairav (a morning raga) written on C | Own notation graphic |
| [`s5_scale_maqam.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_scale_maqam.png) | Maqam Hijaz on D, shown in the nearest Western notes | Own notation graphic |
| [`s5_sargam.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_sargam.png) | Sargam – the Indian note names Sa Re Ga Ma Pa Dha Ni Sa, like do re mi | Own notation graphic |
| [`sitar.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/sitar.jpg) | Sitar – plays the raga | Sathyadeep, public domain, via Wikimedia Commons |
| [`tabla.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/tabla.jpg) | Tabla – the drums that accompany it | muzyczny.pl, CC BY-SA 4.0, via Wikimedia Commons |
| [`oud.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/oud.jpg) | Oud – the fretless lute of Arabic music | Frank Kovalchek, CC BY 2.0, via Wikimedia Commons |
| [`s5_cons_diss.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_cons_diss.png) | Consonant chord (C major) and a dissonant cluster | Own notation graphic |
| [`s5_cadences.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_cadences.png) | The four cadences in C major | Own notation graphic |
| [`s5_extended.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_extended.png) | Extended chords on C: triad, dominant 7th, major 7th, minor 7th, 9th | Own notation graphic |
| [`s5_modulation.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_modulation.png) | Modulation – the music moves from C major to G major; the new key signature (F sharp) confirms it | Own notation graphic |
| [`s5_pedal.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_pedal.png) | Pedal point – the bass holds C while the chords above change | Own notation graphic |
| [`s5_lead_sheet.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_lead_sheet.png) | Lead sheet – melody, lyrics and chord symbols only. The players work out the rest. Used in jazz and pop | Own notation graphic |
| [`s5_chord_chart.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_chord_chart.png) | Chord chart – chords and beats only (slashes), no melody. Used by rhythm sections | Own notation graphic |
| [`s5_piano_roll.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_piano_roll.png) | Piano roll – how a digital audio workstation (DAW) shows MIDI notes | Own notation graphic |
| [`s5_cipher.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_cipher.png) | Gamelan cipher notation – numbers instead of notes (an illustrative line) | Own notation graphic |
| [`gamelan.jpg`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/gamelan.jpg) | A model of a Javanese gamelan – gongs, metallophones and drums | CC BY-SA 4.0, via Wikimedia Commons |
| [`s5_tex_doubling.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_tex_doubling.png) | Doubling – flute and bassoon play the same melody two octaves apart | Own notation graphic |
| [`s5_tex_imitation.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_tex_imitation.png) | Imitation – Voice 2 copies the opening shape a bar later and a 5th higher, then goes its own way | Own notation graphic |
| [`s5_tex_canon.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_tex_canon.png) | Canon – Voice 2 copies Voice 1 exactly, two bars later (Frère Jacques) | Own notation graphic |
| [`s5_tex_countermelody.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_tex_countermelody.png) | Counter-melody – a busier second tune weaves under the slow main melody | Own notation graphic |
| [`s5_tex_contrary.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_tex_contrary.png) | Contrary motion – the right hand climbs while the left hand descends | Own notation graphic |
| [`s5_string_quartet.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_string_quartet.png) | A string quartet score – four staves, one player each. The viola reads the alto clef (middle C is the middle line) | Own notation graphic |
| [`s5_ranges.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_ranges.png) | Approximate sounding ranges of common instruments and voices, against the piano keyboard | Own notation graphic |
| [`s5_register.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_register.png) | The same figure in a low register and a high register | Own notation graphic |
| [`s5_dir_8va.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_dir_8va.png) | 8va – sounds an octave higher | Own notation graphic |
| [`s5_dir_flutter.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_dir_flutter.png) | Flutter-tonguing (flz.) | Own notation graphic |
| [`s5_dir_harmonic.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_dir_harmonic.png) | Harmonics – the small circle | Own notation graphic |
| [`s5_dir_consord.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_dir_consord.png) | con sord. (mute on) and senza sord. (mute off) | Own notation graphic |
| [`s5_palm_mute.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_palm_mute.png) | Palm muting (P.M.) on guitar, in staff notation and TAB | Own notation graphic |
| [`dyn_sfz.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_sfz.png) | sforzando | Own notation graphic |
| [`dyn_fp.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/dyn_fp.png) | fortepiano | Own notation graphic |
| [`s5_sfz.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_sfz.png) | sfz in context – sudden accents in a soft passage | Own notation graphic |
| [`s5_niente.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_niente.png) | dim. al niente – the hairpin ends in a small circle: fade to nothing | Own notation graphic |
| [`s5_tenuto.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_tenuto.png) | Tenuto (line) – hold for the full value, slightly stressed | Own notation graphic |
| [`s5_marcato.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_marcato.png) | Marcato (wedge) – marked: a strong accent, stronger than a normal accent | Own notation graphic |
| [`s5_portato.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_portato.png) | Portato (dots and lines under a slur) – gently separated, halfway between legato and staccato | Own notation graphic |
| [`s5_daw_loop.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_daw_loop.png) | Looping – the 2-bar drum and bass regions are copied end to end; other tracks are layered on top | Own notation graphic |
| [`s5_compression.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_compression.png) | Compression – peaks above the threshold are squashed | Own notation graphic |
| [`s5_adsr.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_adsr.png) | The ADSR envelope of a synth sound – sustain is the level the note holds at | Own notation graphic |
| [`s5_expression_directions.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_expression_directions.png) | Expressive directions in a score – a tempo and mood marking, dolce, poco a poco cresc., rit. and a tempo | Own notation graphic |
| [`s5_form_strophic.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_form_strophic.png) | Strophic – hymns, folk songs, many ballads | Own notation graphic |
| [`s5_form_through.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_form_through.png) | Through-composed – no section returns; follows a story (art songs, some film music) | Own notation graphic |
| [`s5_form_variations.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_form_variations.png) | Theme and variations – the theme returns each time changed (melody decorated, new rhythm, minor key, new texture...) | Own notation graphic |
| [`s5_form_sonata.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_form_sonata.png) | Sonata form – two contrasting themes are presented, developed, then brought back. In the recapitulation both themes are in the home key | Own notation graphic |
| [`s5_form_movements.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_form_movements.png) | Multi-movement works – symphonies, concertos (usually 3 movements: fast, slow, fast), sonatas and suites are made of several complete, contrasting movements | Own notation graphic |
| [`s5_form_head.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_form_head.png) | Head arrangement – the standard shape of a small-group jazz performance | Own notation graphic |
| [`s5_colotomic.png`](https://raw.githubusercontent.com/gnehciak/elements-of-music-images/main/images/s5_colotomic.png) | Colotomic structure – the punctuating gongs of a 16-beat lancaran cycle in Javanese gamelan | Own notation graphic |
