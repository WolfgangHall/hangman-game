function Letter(charac, appear) {
    this.charac = let;
    this.appear = false;
    this.letterRender = function () {
        if (this.charac === false) {
            return "_";
        } else {
            return charac;
        }
    }
}

module.exports = Letter;