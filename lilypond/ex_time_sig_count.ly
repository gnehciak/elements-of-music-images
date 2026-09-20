\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { << \new Staff \relative c'' { \numericTimeSignature \time 4/4 c4 c c c | c4 c c c \bar "|." }
 \addlyrics { \override LyricText.font-series = #'bold "1" "2" "3" "4" "1" "2" "3" "4" } >> }
