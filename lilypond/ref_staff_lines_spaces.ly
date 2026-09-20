\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \with { \omit Clef \omit TimeSignature } { \cadenzaOn \textLengthOn e'1_\markup\pad-x #1.2 "Line 1" g'1_\markup\pad-x #1.2 "Line 2" b'1_\markup\pad-x #1.2 "Line 3" d''1_\markup\pad-x #1.2 "Line 4" f''1_\markup\pad-x #1.2 "Line 5" \bar "||" f'1_\markup\pad-x #1.2 "Space 1" a'1_\markup\pad-x #1.2 "Space 2" c''1_\markup\pad-x #1.2 "Space 3" e''1_\markup\pad-x #1.2 "Space 4" \bar "|." } }
