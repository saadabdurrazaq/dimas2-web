import { inject } from "vue-demi";

export default function useMessageBox() {
    return {
        $show: inject('$messageBox'),
        $prompt: inject('$prompt'),
        $alert: inject('$alert'),
        $confirm: inject('$confirm'),
    }
}