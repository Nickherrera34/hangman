function Words() {
		this.words = ["dog", "pig", "horse", "cat", "cow", "bat", "bird", "snake", "rabbit", "moose", "deer", "fish", "shark", "whale", "falcon"];
		this.pickWord = function() {
			var randomNum = Math.floor(Math.random() * this.words.length);
			return this.words[randomNum];
		}
	}

module.exports = Words;