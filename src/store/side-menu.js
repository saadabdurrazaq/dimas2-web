import { helper as $h } from "@/utils/helper";
import { nestedMenu } from "../layouts/side-menu";

// const DISTRIBUTOR_CANDIDATE_FORM = {
//     icon: "FileTextIcon",
//     pageName: "distributor-candidate-form",
//     title: "Form Calon Distributor"
// };

const PROFILE_FORM = {
    icon: "UserIcon",
    pageName: "distributor-profile.corporate-profile",
    title: "Profil"
};

const EVALUATION_FORM = {
    icon: "FileTextIcon",
    pageName: "distributor-evaluation",
    title: "Penilaian Kinerja"
};

const VP_SALES_REGION_NAV = [
    {
        icon: "FileTextIcon",
        pageName: "admin-document-verification.index",
        title: "Verifikasi Data"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-list-approval-distributor.index",
        title: "List Approval Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-list-gudang-distributor.index",
        title: "List Gudang Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-evaluation-verification.index",
        title: "Dokumen PKD"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-master-activities.index",
        title: "Master Data Aktifitas"
    },
];

const PSO_PLANNING_NAV = [{
        icon: "FileTextIcon",
        pageName: "admin-distributor-quota-allocation.index",
        title: "Rencana Alokasi"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-distributor-recommendation.index",
        title: "Rekomendasi Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-list-approval-distributor.index",
        title: "List Approval Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-pi-group-application-data.index",
        title: "Data Aplikasi PI Group"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-pso-evaluation-distributor.index",
        title: "Penilaian Kinerja Distributor"
    },
];

const SVP_WILAYAH = [
    {
        icon: "FileTextIcon",
        pageName: "admin-distributor-approval.index",
        title: "Approval Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-list-approval-distributor.index",
        title: "List Approval Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-distributor-evaluation.index",
        title: "Penilaian Kinerja Distributor"
    },
];

const ANPER_NAV = [
    {
        icon: "FileTextIcon",
        pageName: "admin-list-approval-distributor.index",
        title: "List Approval Distributor"
    },
];

const SEVP_MARKETING_NAV = [
    {
        icon: "FileTextIcon",
        pageName: "admin-distributor-recommendation-approval.index",
        title: "Approval Rekomendasi Distributor"
    },
    {
        icon: "FileTextIcon",
        pageName: "admin-sevp-evaluation-distributor.index",
        title: "Penilaian Kinerja Distributor"
    },
];

const MARKETING_DIRECTOR = [{
    icon: "FileTextIcon",
    pageName: "admin-distributor-recommendation-final-approval.index",
    title: "Hasil keputusan SPJB Distributor"
}];

let KUISIONER_PAGE = [
    {
        icon: "FileTextIcon",
        pageName: "kuisioner.kuisioner",
        title: "Kuisioner"
    },
];

let VERIFIKASI_PAGE = [
    {
        icon: "FileTextIcon",
        pageName: "verifikasi.verifikasi",
        title: "Verifikasi"
    },
];

let VERIFIKASI_DATA = [
    {
        icon: "FileTextIcon",
        pageName: "dn-distributor.data-verification",
        title: "Verifikasi Data"
    },
];

let DATA_INDIVIDU = [
    {
        icon: "FileTextIcon",
        pageName: "dn-individu.profile",
        title: "DN Individu"
    },
];

let DN_DISTRIBUTOR = [
    {
        icon: "FileTextIcon",
        pageName: "dn-distributor.profile",
        title: "DN Distributor"
    },
];

let DN_CABANG = [
    {
        icon: "FileTextIcon",
        pageName: "dn-cabang.profile",
        title: "DN Cabang"
    },
];

let DN_KORPORASI = [
    {
        icon: "FileTextIcon",
        pageName: "dn-korporasi.profile",
        title: "DN Korporasi"
    },
];

let LN_KORPORASI = [
    {
        icon: "FileTextIcon",
        pageName: "ln-korporasi.profile",
        title: "LN Korporasi"
    },
];

let DN_RETAIL_KORPORASI = [
    {
        icon: "FileTextIcon",
        pageName: "dn-retail-korporasi.profile",
        title: "DN Retail Korporasi"
    },
];

let LN_AGEN = [
    {
        icon: "FileTextIcon",
        pageName: "ln-agen.profile",
        title: "LN Agen"
    },
];

let SUPERADMIN_PAGES = [
    {
        icon: "FileTextIcon",
        pageName: "option-app.option",
        title: "Aplikasi"
    },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "kuisioner.kuisioner",
    //     title: "Kuisioner"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "verifikasi.verifikasi",
    //     title: "Verifikasi"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "dn-individu.profile",
    //     title: "DN Individu"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "dn-distributor.profile",
    //     title: "DN Distributor"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "dn-korporasi.profile",
    //     title: "DN Korporasi"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "ln-korporasi.profile",
    //     title: "LN Korporasi"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "ln-agen.profile", 
    //     title: "LN Agen"
    // },
    // {
    //     icon: "FileTextIcon",
    //     pageName: "dn-retail-korporasi.profile", 
    //     title: "DN Retail Korporasi"
    // },
    // {
    //     icon: "FileTextIcon",
    //     title: "User Management",
    //     pageName: "manage-user.user.index",
    //     subMenu: [{
    //             icon: "FileTextIcon",
    //             pageName: "manage-user.distributor.index",
    //             title: "Distributor"
    //         },
    //         {
    //             icon: "FileTextIcon",
    //             pageName: "manage-user.admin.index",
    //             title: "Admin"
    //         }
    //     ]
    // },
];

const state = () => {
    return {
        menu: [],
        formattedMenu: []
    };
};

// getters
const getters = {
    menu: state => state.menu
};

// actions
const actions = {
    async render({ state, commit, rootState }, route) {
        const user = rootState.auth.user;
        const menuItems = []; 

        if (user != null) {
            if (user.role.name == "superadmin") {
                const userState = localStorage.getItem('user-state'); 

                if (userState === null || userState === undefined) { 
                    menuItems.push(...SUPERADMIN_PAGES);
                } 
                else if (userState === 'kuisioner-page') {   
                    menuItems.push(...KUISIONER_PAGE);
                } 
                else if (userState === 'verifikasi-page') {  
                    menuItems.push(...VERIFIKASI_PAGE);
                } 
                else if (userState === 'dn-individu.profile') { 
                    menuItems.push(...DATA_INDIVIDU);
                } 
                else if (userState === 'dn-distributor.profile') {  
                    menuItems.push(...DN_DISTRIBUTOR);
                }

                else if (userState === 'dn-cabang.profile') {  
                    menuItems.push(...DN_CABANG);
                }
                else if (userState === 'dn-korporasi.profile') {  
                    menuItems.push(...DN_KORPORASI);
                }
                else if (userState === 'ln-korporasi.profile') {  
                    menuItems.push(...LN_KORPORASI);
                }
                else if (userState === 'dn-retail-korporasi.profile') {  
                    menuItems.push(...DN_RETAIL_KORPORASI);
                }
                else if (userState === 'ln-agen.profile') {  
                    menuItems.push(...LN_AGEN);
                }
            
            } else if (user.role.name == "distributor") {
                if (user.hasOwnProperty("distributor") && user.distributor != null) {
                    menuItems.push(PROFILE_FORM);

                    if (user.is_allow_evaluation) {
                        menuItems.push(EVALUATION_FORM);
                    }
                } else {
                    //menuItems.push(DISTRIBUTOR_CANDIDATE_FORM);
                }
            } else if (user.role.name == 'svp_region') {
                menuItems.push(...SVP_WILAYAH)
            } else if (user.role.name == 'svp_pso_planning_management' || user.role.name == 'svp_pso_admin') {
                menuItems.push(...PSO_PLANNING_NAV)
            } else if (user.role.name == 'sevp_marketing_ops') {
                menuItems.push(...SEVP_MARKETING_NAV)
            } else if (user.role.name == 'marketing_director') {
                menuItems.push(...MARKETING_DIRECTOR)
            } else if (user.role.name == 'anper') {
                menuItems.push(...ANPER_NAV)
            } else {
                const distributorState = localStorage.getItem('distributor-state'); 

                if (distributorState !== null || distributorState !== undefined) { 
                    menuItems.push(...VERIFIKASI_DATA);
                } 
                // menuItems.push(...VP_SALES_REGION_NAV);
            }

            const sideMenu = nestedMenu(menuItems, route);

            commit("SET_MENU", menuItems);
            commit("SET_FORMATTED_MENU", $h.toRaw(sideMenu));
        }
    }
};

// mutations
const mutations = {
    SET_MENU(state, items) {
        state.menu = items;
    },
    SET_FORMATTED_MENU(state, value) {
        state.formattedMenu = value;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
