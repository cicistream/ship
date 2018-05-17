
export default function install(Vue, options) {
  Vue.prototype.toDetail = function (value) {
    this.$router.push({ name: 'detail', params: { id: value}});
  };
  Vue.prototype.toResult = function (value) {
    this.$router.push({ name: 'result', params: { tag: value}});
  };
}