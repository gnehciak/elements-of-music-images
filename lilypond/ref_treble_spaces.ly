\version "2.24.0"
\paper { indent = 0 tagline = ##f oddHeaderMarkup = ##f evenHeaderMarkup = ##f oddFooterMarkup = ##f evenFooterMarkup = ##f }
\layout { \context { \Score \omit BarNumber } }
\score { << \new Staff \with { \omit TimeSignature } { \clef treble \cadenzaOn f'1 a' c'' e'' \bar "|." } \addlyrics { \override LyricText.font-series = #'bold \override LyricText.font-size = #2 F A C E } >> }
