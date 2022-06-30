import Velocity from "velocity-animate";
import router from "../../router"

// Setup side menu
const findActiveMenu = (subMenu, route) => {
    let match = false;
    subMenu.forEach(item => {
        // distributor-profile | item.pageName
        // distributor-profile.corporate-profile -> current route | route.name

        if (route.name) {
            if (route.name.includes(item.pageName.split(".")[0]) && !item.ignore) {
                match = true;
            } else if (!match && item.subMenu) {
                match = findActiveMenu(item.subMenu, route);
            }
        }
    });
    return match;
};

const nestedMenu = (menu, route) => {
    menu.forEach((item, key) => {
        if (typeof item !== "string") {
            let menuItem = menu[key];
            if (route.name) {
                menuItem.active =
                    (route.name.includes(item.pageName.split(".")[0]) ||
                        (item.subMenu && findActiveMenu(item.subMenu, route))) &&
                    !item.ignore;
            }

            if (item.subMenu) {
                menuItem.activeDropdown = findActiveMenu(item.subMenu, route);
                menuItem = {
                    ...item,
                    ...nestedMenu(item.subMenu, route)
                };
            }
        }
    });

    return menu;
};

const linkTo = (menu, router) => {
    if (menu.subMenu) {
        menu.activeDropdown = !menu.activeDropdown;
    } else {
        // router.push({
        //     name: menu.pageName
        // });
    }
}; 

const enter = (el, done) => {
    Velocity(el, "slideDown", { duration: 300 }, { complete: done });
};

const leave = (el, done) => {
    Velocity(el, "slideUp", { duration: 300 }, { complete: done });
};

export { nestedMenu, linkTo, enter, leave };