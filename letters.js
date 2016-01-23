function Letter(charac, appear) {
    this.charac = let;
    this.appear = false;
    this.letterRender = function () {
        if (this.charac === false) {
            return "_";
        } else {
            return this.charac;
        }
    }
}

module.exports = Letter;