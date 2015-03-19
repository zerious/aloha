/**
 * Aloha takes a string in the base language and translates it to the target language.
 */
var aloha = module.exports = function (text, lang) {
  return text + ' in ' + lang;
};

/**
 * Expose Aloha globally.
 */
aloha.expose = function (key) {
  global[key || 'aloha'] = aloha;
};

/**
 * The base language is United States English.
 */
aloha.base = 'en-US';

/**
 * Expose the Aloha version via package.json lazy loading.
 */
Object.defineProperty(aloha, 'version', {
  get: function () {
    return require(__dirname + '/package.json').version;
  }
});

/**
 * Expose the location of this module.
 */
aloha.dir = __dirname;
