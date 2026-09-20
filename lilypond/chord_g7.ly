\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \with { \omit TimeSignature } { \cadenzaOn <g' b' d'' f''>1^\markup\bold\fontsize #2 "G7"_\markup\fontsize #1 "V7" \bar "|." } }
