// Admin Management
// const DistributorManagement = () =>
//     import ("@/pages/admin/distributor-management");

// const UpdateDistributorData = () =>
//     import ("@/pages/admin/distributor-management/UpdateForm");

const AdminManagement = () =>
    import ("@/pages/admin/admin-management");

const UpdateAdminData = () =>
    import ("@/pages/admin/admin-management/UpdateForm");

const CreateAdminData = () =>
    import("@/pages/admin/admin-management/CreateForm");

// // Approval Period
// const RegistrationPeriod = () =>
//     import ("@/pages/admin/registration-period/index");

// const CreateRegistrationPeriod = () =>
//     import ("@/pages/admin/registration-period/create");

// const UpdateRegistrationPeriod = () =>
//     import ("@/pages/admin/registration-period/update");

// // Statement letter
// const IndexStatementLetter = () =>
//     import ("@/pages/admin/statement-letter/index");

// const CreateStatementLetter = () =>
//     import ("@/pages/admin/statement-letter/create");

// const UpdateStatementLetter = () =>
//     import ("@/pages/admin/statement-letter/update");

// // Product Management
// const IndexProduct = () =>
//     import ("@/pages/admin/product-management/index");

// const CreateProduct = () =>
//     import ("@/pages/admin/product-management/create");

// const UpdateProduct = () =>
//     import ("@/pages/admin/product-management/update");

// // Distributor Recommendation
// const AllocationPlanning = () =>
//     import ("@/pages/admin/distributor-allocation-planning");

// const DistributorRecommendation = () =>
//     import ("@/pages/admin/distributor-recommendation");

// const DistributorRecommendationApproval = () =>
//     import ("@/pages/admin/distributor-recommendation-approval");

// const DistributorRecommendationFinalApproval = () =>
//     import ("@/pages/admin/distributor-recommendation-final-approval");

// const AdminPIGroupApplicationData = () =>
//     import ("@/pages/admin/pi-group-application");

// // Penilaian Distributor
// // Approval Period
// const EvaluationPeriod = () =>
//     import ("@/pages/admin/evaluation-period/index");

// const CreateEvaluationPeriod = () =>
//     import ("@/pages/admin/evaluation-period/create");

// const UpdateEvaluationPeriod= () =>
//     import ("@/pages/admin/evaluation-period/update");

// const AdminPSOEvaluationDistributor = () =>
//     import ("@/pages/admin/pso-evaluation-distributor");


// const AdminSEVPEvaluationDistributor = () =>
//     import ("@/pages/admin/sevp-evaluation-distributor");


export default [
    // {
    //     path: "/manage/distributor",
    //     name: "manage-user.distributor.index",
    //     component: DistributorManagement
    // },
    // {
    //     path: "/manage/distributor/:user_id",
    //     name: "manage-user.distributor.update",
    //     component: UpdateDistributorData
    // },
    {
        path: "/manage/admin",
        name: "manage-user.admin.index",
        component: AdminManagement
    },
    {
        path: "/manage/admin/:user_id",
        name: "manage-user.admin.update",
        component: UpdateAdminData
    },
    {
        path: "/manage/admin/create",
        name: "manage-user.admin.create",
        component: CreateAdminData
    },
    {
        path: "/manage/admin/:user_id/role",
        name: "manage-user.admin.assign-role",
        component: AdminManagement
    },
    // {
    //     path: "/manage/registration-period",
    //     name: "manage-registration-period.index",
    //     component: RegistrationPeriod
    // },
    // {
    //     path: "/manage/registration-period/create",
    //     name: "manage-registration-period.create",
    //     component: CreateRegistrationPeriod
    // },
    // {
    //     path: "/manage/registration-period/update/:period_id",
    //     name: "manage-registration-period.update",
    //     component: UpdateRegistrationPeriod
    // },
    // {
    //     path: "/manage/statement-letter-template",
    //     name: "manage-template-surat-pernyataan.index",
    //     component: IndexStatementLetter
    // },
    // {
    //     path: "/manage/statement-letter-template/create",
    //     name: "manage-template-surat-pernyataan.create",
    //     component: CreateStatementLetter
    // },
    // {
    //     path: "/manage/statement-letter-template/update/:template_id",
    //     name: "manage-template-surat-pernyataan.update",
    //     component: UpdateStatementLetter
    // },
    // {
    //     path: "/manage/product",
    //     name: "manage-product.index",
    //     component: IndexProduct
    // },
    // {
    //     path: "/manage/product/create",
    //     name: "manage-product.create",
    //     component: CreateProduct
    // },
    // {
    //     path: "/manage/product/update/:product",
    //     name: "manage-product.update",
    //     component: UpdateProduct
    // },
    // {
    //     path: "/rekomendasi",
    //     name: "admin-distributor-recommendation.index",
    //     component: DistributorRecommendation
    // },
    // {
    //     path: "/rencana-alokasi",
    //     name: "admin-distributor-quota-allocation.index",
    //     component: AllocationPlanning
    // },
    // {
    //     path: "/pi-group-application-data",
    //     name: "admin-pi-group-application-data.index",
    //     component: AdminPIGroupApplicationData
    // },
    // {
    //     path: "/approval-sevp-marketing",
    //     name: "admin-distributor-recommendation-approval.index",
    //     component: DistributorRecommendationApproval
    // },
    // {
    //     path: "/final-approval",
    //     name: "admin-distributor-recommendation-final-approval.index",
    //     component: DistributorRecommendationFinalApproval
    // },
    //
    // Penilaian Distributor
    //
    // {
    //   path: "/manage/evaluation-period",
    //   name: "manage-evaluation-period.index",
    //   component: EvaluationPeriod
    // },
    // {
    //     path: "/manage/evaluation-period/create",
    //     name: "manage-evaluation-period.create",
    //     component: CreateEvaluationPeriod
    // },
    // {
    //   path: "/manage/evaluation-period/:id/update",
    //   name: "manage-evaluation-period.update",
    //   component: UpdateEvaluationPeriod
    // },
    // {
    //     path: "/pso-evaluation-distributor",
    //     name: "admin-pso-evaluation-distributor.index",
    //     component: AdminPSOEvaluationDistributor
    // },

    // {
    //     path: "/sevp-evaluation-distributor",
    //     name: "admin-sevp-evaluation-distributor.index",
    //     component: AdminSEVPEvaluationDistributor
    // },
];
