\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \with { \omit TimeSignature \omit Clef \remove "Staff_symbol_engraver" } { \cadenzaOn \stemUp g'16 } }
