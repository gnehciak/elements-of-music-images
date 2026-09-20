\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \with { \omit TimeSignature \omit Clef \remove "Staff_symbol_engraver" } { \cadenzaOn
 \textLengthOn b'2._\markup\pad-x #4 \bold "2 + 1 = 3 beats" b'4._\markup\pad-x #4 \bold "1 + ½ = 1½ beats" } }
