export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }
    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage) {
        throw TypeError('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get size() {
    return this._sqft;
  }
}
