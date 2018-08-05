class Config {
	constructor(opts) {
		this.apply(opts);
	}
	apply(opts) {
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(opts));
	}
	merge(opts) {
		for (key of opts) this.set(key, opts[key]);
	}
	set(key, value) {
		if (!key || !value || !this.hasOwnProperty(key)) return;
		else this[key] = value;
	}
	get(key) {
		return this[key];
	}
	insert(key, value) {
		if (!key || !value) return;
		else this[key] = value;
	}
	delete(key) {
		if (!key) return;
		else delete this[key];
	}
}

export default Config;