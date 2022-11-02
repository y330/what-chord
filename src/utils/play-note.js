import { Guitar } from "ks-guitar-synth"

const guitar = new Guitar()

export function pick(string = 6, fret = 0) {
    guitar.pluck(string, fret)
}
export function strum(chord = [6, 7, 8]) {
    guitar.strum(chord = [], strumDuration = 0.05)
}
