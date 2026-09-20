\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \relative c'' { \numericTimeSignature \time 4/4 c4^\markup\bold "Melody – one note at a time" d e g | e d c2 \bar "||"
 <c, e g>2^\markup\bold "Harmony – notes together" <c f a> | <b d g> <c e g> \bar "|." } }
