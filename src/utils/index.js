import helper from "./helper";
import lodash from "./lodash";
import Maska from "maska"

export default app => {
    app.use(helper);
    app.use(lodash);
    app.use(Maska)
};
