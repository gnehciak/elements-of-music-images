\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { << \new Staff \with { \omit TimeSignature } { \clef bass \cadenzaOn g,1 b, d f a \bar "|." } \addlyrics { \override LyricText.font-series = #'bold \override LyricText.font-size = #2 G B D F A } >> }
