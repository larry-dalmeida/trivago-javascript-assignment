/**
 *
 * @param {*} source
 * @param {*} map
 *
 * If the enableFilter option has been provided then
 * replace all occurrences of `isEnabled('filter')`
 * with boolean true
 */
module.exports = function(source, map) {
  const isFilterEnabled = this.query.enableFilter;
  if (isFilterEnabled) {
    this.callback(null, source.replace("isEnabled('filter')", true), map);
  } else {
    this.callback(null, source, map);
  }
};
