\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \with { \omit TimeSignature } { \cadenzaOn <f' a' c''>1^\markup\bold\fontsize #2 "F"_\markup\fontsize #1 "IV" \bar "|." } }
