\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { \new Staff \relative c'' { \numericTimeSignature \time 4/4 \tempo "Moderato"
 c4 d e c | c8^\markup\italic\bold "accel." d e f g a b c | c4 g e c | g'2^\markup\italic\bold "rit." e | c1 \bar "|." } }
