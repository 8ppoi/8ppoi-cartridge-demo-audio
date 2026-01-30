export class Cartridge {
  static onReset({ pads, speakers }) {
    this.pads = pads;
    this.speakers = speakers;
  }

  static onFrame() {
    if (this.pads[0].buttons.b0.justPressed) {
      this.playback?.stop();
      this.playback = this.speakers[0].play([
        [
          { noteNumber: 0, duration: 60 },
          { noteNumber: 12, duration: 60 },
        ],
      ]);
    }
    if (this.pads[0].buttons.b1.justPressed) {
      this.playback?.stop();
    }
  }
}
