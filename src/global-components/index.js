import Tippy from "./tippy/Main.vue";
import TippyContent from "./tippy-content/Main.vue";
import * as featherIcons from "@zhuowenli/vue-feather-icons";
// import DebugBar from "./debug-bar"

export default app => {
    app.component("Tippy", Tippy);
    app.component("TippyContent", TippyContent);

    for (const [key, icon] of Object.entries(featherIcons)) {
        icon.props.size.default = "24";
        app.component(key, icon);
    }

    app.directive('click-outside', {
        beforeMount(el, binding, vnode) {
            el.clickOutsideEvent = function(event) {
                if (!(el === event.target || el.contains(event.target))) {
                    binding.value(event, el);
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent);
        },
        unmounted(el) {
            document.body.removeEventListener('click', el.clickOutsideEvent);
        }
    });

    String.prototype.toProperCase = function() {
        return this.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
};