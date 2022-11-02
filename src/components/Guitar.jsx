import React from "react";
import Fretboard from "react-fretboard";
/** ======Fretboard=====
 * PROPS
 *  tuning
 *     arrayOf(string)
 *     Array of pitch strings, from which all the fret notes are calculated. You can provide any tuning you want. Additionally the number of notes in the tuning array determine how many strings the fretboard will display. The default is standard tuning for a 6 string guitar.
      Example: tuning={['E2', 'A2', 'D3', 'G3', 'B3', 'E4']}


    nrOfFrets
      number

      This sets the width of the fretboard. The number includes the open position, so 12 frets will need nrOfFrets={13}. 13 is also the default.


    skinType
      oneOf(['boxes', 'strings'])

      Determines the overall look of the fretboard. 'boxes' displays the frets as divs with a border, and 'strings' looks more like a standard fretboard diagram.
      Default is 'boxes'


    noteType
      oneOf(['pc', 'pitch'])

      Sets what type of note is displayed in the frets, f.i.: C (pc, short for pitch class), or C4 (pitch). This is purely a visual setting, you can still select pc's or pitches. (see selectedNotes below)
      Default is 'pitch'


    showNotes
      bool

      Determines whether to show the (unselected) note names in the fretboard, or not. (This is overridden by a label of a selected note if showSelectionLabels is true)
      Default is false


    showSelectionLabels
      bool

      Determines whether to show the selected note label. (This overrides the showNotes prop)
      Default is true


    highlightOctaves
      bool

      Determines whether to show a fret's octave background color. (Is overridden by highlightSelections). You can provide your own octave colors with the theme prop.
      Default is false


    highlightSelections
      bool

      Determines wether to show a selected fret's background color. (This overrides the octave color). (see selectedNotes below for more information)
      Default is true


    showEnharmonics
      bool


      If a note has a (simple) enharmonic, like C#, this prop lets you choose to display just 'C#' or 'C#/Db'. The note name may become too large for the smaller frets, in which case it is clipped. Check the theme's fontSize property for a bit more control of fitting a note name in a fret.
      Default is false


    showPositionLabels
      bool

      Shows the position markers underneath the fretboard (like: I, III, VII, X).
      Default is true

    selectedNotes
      arrayOf(oneOfType([
        string,
        shape({
          note: string.isRequired,
          status: string, // optional, default 'selected'
          label: string, // optional, default note name
        })
      ]))


      selectedLocations
          arrayOf(oneOfType([
            shape({
              str: number.isRequired,
              pos: number.isRequired,
            }),
            shape({
              loc: shape({
                str: number.isRequired,
                pos: number.isRequired,
              }).isRequired,
              status: string,
              label: string,
            })
          ]))


      - Lets you select frets based on their location on the fretboard. 
      - The top (1st) string is str: 0, and bottom string is str: tuning.length - 1. 
      - This prop behaves almost identically to selectedNotes, except that instead of
         the note string, you'd use a loc object.
  
      theme
        Specify a theme to customize the style of the fretboard. (see CSS)

      clickAction
        func
        
        Provide a callback that will be called when a fret is clicked. The arg passed is an object with props: { note, loc }


    */
import { pick, strum } from "../utils/play-note";
export default function Guitar() {
  const tuning = ["E2", "A2", "D3", "G3", "B3", "E4"];

  /**
   * @param {string} [mode="pick" || "strum"]
   * @param {number} [str=6] string: int >= 0
   * @param {number} [pos=0] fret: int >= 0
   * @param {*} [chord=tuning] int[], len()<=5, array of fret numbers for each string in the chord
   */
  const playNote = (mode = "pick", note, str = 6, pos = 0, chord = tuning) => {
    switch (mode) {
      case "pick":
        pick(str, pos);
        console.log(`you just played ${note}`);
        break;
      case "strum":
        strum(chord);
        break;
      default:
        console.log("something went wrong.");
        break;
    }
  };

  return (
    <div>
      <Fretboard
        skinType="strings"
        highlightSelections={false}
        selectedNotes={tuning}
        theme={{
          background: "#443021",
          statusMap: {
            selected: "rgb(255, 252, 127)",
            unselected: "white",
            "1P": "#1a0500",
            "2m": "#4d0f00",
            "2M": "#801a00",
            "3m": "#cc2900",
            "3M": "#e62e00",
            "4P": "#ff3300",
            "4A": "#ff5c33",
            "5P": "#ff704d",
            "6m": "#ff9980",
            "6M": "#ffb199",
            "7m": "#ffd8cc",
            "7M": "#ffebe6",
          },
          octaveMap: {
            2: "rgb(95, 190, 244)",
            3: "rgb(135, 219, 244)",
            4: "rgb(205, 240, 247)",
            5: "rgb(242, 246, 247)",
          },
          fontSize: 12,
          dimensions: {
            openWidth: 10,
            nutWidth: 0.75,
            stringHeight: 30,
          },
          skins: {
            strings: {
              highlightSize: 85,
              highlightBorder: "1px solid gray",
            },
          },
        }}
        clickAction={({ note, loc }) => {
          playNote("pick", note, loc.str, loc.pos);
        }}
      />
    </div>
  );
}
