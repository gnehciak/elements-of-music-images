# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
A NSW secondary music teacher (Kevin) and his Stage 4 (Year 7–8) music students. Used both ways, equally: projected at the front of the classroom while the teacher drives it, and opened by students on their own laptops, iPads and phones.

## Product Purpose
An interactive mindmap of the six Elements of Music (Duration, Pitch, Texture, Performing media and timbre, Dynamics and expression, Structure) from the NSW Music 7–10 Syllabus (2024). Two jobs: an in-lesson reference (jump to one concept while teaching or listening, show its notation, move on) and a big-picture overview of how the elements and their vocabulary fit together. Success: a concept is on screen, legible from the back of the room, within a couple of clicks; students can find their way around on their own.

## Positioning
Built from the teacher's own Notion reference page: his definitions, his notation graphics, his "Ask the class" listening questions. It is his course material in map form, not a generic theory site.

## Operating Context
Classroom projector and student devices. Content source of truth is the Notion page "Content" (Kevin's Music Teaching Archive). Element colours are the teacher's Notion tag colours and are used across his materials. Revision happens separately in a Gimkit kit. Published as a Claude artifact (images bundled) and mirrored in the GitHub repo gnehciak/elements-of-music-images.

## Capabilities and Constraints
- Single self-contained HTML page, vanilla JS, no framework; built by `build.py` from `src/`.
- Pan/zoom canvas, expandable branches, pictures inside nodes with a click-to-enlarge viewer, term search, per-element jump chips, "Test me" mode (definitions hidden until clicked), overview minimap, keyboard navigation.
- Two-finger trackpad scroll pans; pinch or ctrl/cmd+scroll zooms.
- Artifact hosting: external scripts only from cdnjs/jsdelivr, fonts only from Google Fonts, images must ship alongside the page. Must work at phone width and in light and dark themes.
- Notation images have white backgrounds.

## Brand Commitments
Element colours must match the Notion tag hues: Duration yellow, Pitch red, Texture purple, Performing media and timbre blue, Dynamics and expression green, Structure orange. Australian/British terminology (crotchet, quaver, semibreve).

## Evidence on Hand
~350 terms and definitions in `src/content.js`; 153 notation graphics and instrument photos in `images/` with captions and credits in `captions.json` (Wikimedia photos carry CC attributions that must stay visible).

## Product Principles
1. Legible from the back of the room comes before everything.
2. The teacher's content is the star; chrome stays out of its way.
3. Always show where you are in the whole map.
4. It should feel like it belongs to music, not to software. (User, verbatim concern: must not look like a tech/SaaS app or "so AI".)

## Accessibility & Inclusion
Projector-safe contrast and type sizes; keyboard operable; respects reduced motion.
