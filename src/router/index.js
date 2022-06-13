import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../layouts/side-menu/Main.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import ForgotPassword from '../pages/auth/ForgotPassword.vue'
import ResetPassword from '../pages/auth/ResetPassword.vue'
import ErrorPage from '../views/error-page/Main.vue'

// import NProgress from 'nprogress'

// Profile Pages
// import ProfileSection from '../pages/profile/index.vue'
// import EvaluationSection from '../pages/evaluation/index.vue'

// const CandidateRegistration = () =>
//   import(
//     /* webpackChunkName: "corporate-profile" */
//     '../pages/candidate-registration/index.vue'
//   )

import { getCookie } from '../utils/helpers'
import axios from 'axios'

import { getXSRFToken } from '../utils/api/auth.api'
import { useStore } from '@/store'
import adminRoutes from './adminRoutes'

const store = useStore()

const Account = () => import('../pages/account/Account.vue')
const OptionApp = () => import('../pages/option-app/Option.vue')
const Kuisioner = () => import('../pages/kuisioner/Kuisioner.vue')
const Verifikasi = () => import('../pages/verifikasi/Verifikasi.vue')

// DN Individu
const DNIndividuProfile = () => import('../pages/dn-individu/profile/create/CreateProfile.vue')
const DNIndividuLegalitas = () => import('../pages/dn-individu/legalitas/create/CreateLegalitas.vue')
const DNIndividuOperasional = () => import('../pages/dn-individu/operasional/create/struktur-usaha/CreateStrukturUsaha.vue')
const DNIndividuPasar = () => import('../pages/dn-individu/pasar/create/jaringan-distribusi/CreateJaringanDistribusi.vue')
const DNIndividuStatusVerifikasiDokumen = () => import('../pages/dn-individu/StatusVerifikasiDokumen.vue')
const DNIndividuKeuangan = () => import('../pages/dn-individu/keuangan/create/tipe-pembayaran/CreateTipePembayaran.vue') 

// DN Distributor
const DNDistributorProfile = () => import('../pages/dn-distributor/profile/create/CreateProfile.vue')
const DNDistributorLegalitas = () => import('../pages/dn-distributor/legalitas/create/npwp/CreateNpwp.vue')
const DNDistributorPasar = () => import('../pages/dn-distributor/pasar/create/jaringan-distribusi/CreateJaringanDistribusi.vue')
const DNDistributorOperasional = () => import('../pages/dn-distributor/operasional/create/struktur-organisasi/CreateStrukturOrganisasi.vue')
const DNDistributorKeuangan = () => import('../pages/dn-distributor/keuangan/create/tipe-pembayaran/CreateTipePembayaran.vue') 
const DNDistributorInformasiCabang = () => import('../pages/dn-distributor/informasi-cabang/create/CreateInformasiCabang.vue') 

// DN Korporasi 
const DNKorporasiProfile = () => import('../pages/dn-korporasi/profile/create/CreateProfile.vue')
const DNKorporasiLegalitas = () => import('../pages/dn-korporasi/legalitas/create/npwp/CreateNpwp.vue')
const DNKorporasiPasar = () => import('../pages/dn-korporasi/pasar/create/jaringan-distribusi/CreateJaringanDistribusi.vue')
const DNKorporasiOperasional = () => import('../pages/dn-korporasi/operasional/create/struktur-organisasi/CreateStrukturOrganisasi.vue')
const DNKorporasiKeuangan = () => import('../pages/dn-korporasi/keuangan/create/tipe-pembayaran/CreateTipePembayaran.vue') 
const DNKorporasiInformasiCabang = () => import('../pages/dn-korporasi/informasi-cabang/create/CreateInformasiCabang.vue') 

// LN Korporasi 
const LNKorporasiProfile = () => import('../pages/ln-korporasi/profile/create/CreateProfile.vue')
const LNKorporasiLegalitas = () => import('../pages/ln-korporasi/legalitas/create/tin/CreateTIN.vue')
const LNKorporasiPasar = () => import('../pages/ln-korporasi/pasar/create/jaringan-distribusi/CreateMarket.vue')
const LNKorporasiOperasional = () => import('../pages/ln-korporasi/operasional/create/struktur-organisasi/CreateStrukturOrganisasi.vue')
const LNKorporasiKeuangan = () => import('../pages/ln-korporasi/keuangan/create/tipe-pembayaran/CreateTipePembayaran.vue') 

// LN Agen 
const LNAgenProfile = () => import('../pages/ln-agen/profile/create/profile/CreateProfile.vue')
const LNAgenLegalitas = () => import('../pages/ln-agen/legalitas/create/npwp/CreateNpwp.vue')
const LNAgenOperasional = () => import('../pages/ln-agen/operasional/create/struktur-organisasi/CreateStrukturOrganisasi.vue')
const LNAgenKeuangan = () => import('../pages/ln-agen/keuangan/create/tipe-pembayaran/CreateTipePembayaran.vue') 

// DN Retail Korporasi 
const DNRetailKorporasiProfile = () => import('../pages/dn-retail-korporasi/profile/create/CreateProfile.vue')
const DNRetailKorporasiLegalitas = () => import('../pages/dn-retail-korporasi/legalitas/create/npwp/CreateNpwp.vue')
const DNRetailKorporasiPasar = () => import('../pages/dn-retail-korporasi/pasar/create/jaringan-distribusi/CreateJaringanDistribusi.vue')
const DNRetailKorporasiOperasional = () => import('../pages/dn-retail-korporasi/operasional/create/struktur-organisasi/CreateStrukturOrganisasi.vue')
const DNRetailKorporasiKeuangan = () => import('../pages/dn-retail-korporasi/keuangan/create/tipe-pembayaran/CreateTipePembayaran.vue') 
const DNRetailKorporasiInformasiCabang = () => import('../pages/dn-retail-korporasi/informasi-cabang/create/CreateInformasiCabang.vue') 

/**
 * Administration Data
 */
// const CorporateProfile = () =>
//   import('../pages/profile/sections/administration-data/CorporateProfile.vue')
// const LegalInformation = () =>
//   import('../pages/profile/sections/administration-data/LegalInformation.vue')
// const BusinessLicense = () =>
//   import('../pages/profile/sections/administration-data/BusinessLicense.vue')
// const DistributionNetwork = () =>
//   import(
//     '../pages/profile/sections/administration-data/DistributionNetwork.vue'
//   )
// const Shareholder = () =>
//   import(
//     '../pages/profile/sections/administration-data/shareholder/Shareholder.vue'
//   )
// const CompanyManagement = () =>
//   import(
//     '../pages/profile/sections/administration-data/company-management/CompanyManagement.vue'
//   )
// const Marketing = () =>
//   import(
//     '../pages/profile/sections/administration-data/marketing/Marketing.vue'
//   )
// const PersonInCharge = () =>
//   import(
//     '../pages/profile/sections/administration-data/person-in-charge/PersonInCharge.vue'
//   )

// const SuratPernyataan = () =>
//   import('@/pages/profile/sections/administration-data/SuratPernyataan.vue')

// const RekomendasiDinas = () =>
//   import(
//     '@/pages/profile/sections/administration-data/RekomendasiDinasWrapper.vue'
//   )

/**
 * Facilities
 */
// const Transportation = () =>
//   import(
//     '../pages/profile/sections/facilities/Transportation/Transportation.vue'
//   )

// const Warehouse = () =>
//   import('../pages/profile/sections/facilities/Warehouse/index.vue')

/**
 * Financial Data
 */
// const BankAccount = () =>
//   import('../pages/profile/sections/financial-data/bank-account')
// const FinancialStatements = () =>
//   import('../pages/profile/sections/financial-data/FinancialStatements.vue')
// const TaxDocuments = () =>
//   import('../pages/profile/sections/financial-data/TaxDocuments.vue')

/**
 * Dokumen Penilaian
 */
// const DemplotSocialization = () =>
//   import('../pages/evaluation/demplot-and-socialization/index.vue')
// const CollectionAndDistribution = () =>
//   import('../pages/evaluation/collection-and-distribution/index.vue')
// const SubsidyReport = () =>
//   import('../pages/evaluation/subsidy-report/index.vue')
// const PIGroupApplication = () =>
//   import('../pages/evaluation/pi-group-application/index.vue')
// const MediaReportation = () =>
//   import('../pages/evaluation/media-reportation/index.vue')
// const ERDKK = () => import('../pages/evaluation/e-rdkk/index.vue')
// const KioskPerformanceReport = () =>
//   import('../pages/evaluation/kiosk-performance-reports/index.vue')
// const DistributorCompliance = () =>
//   import('@/pages/admin/distributor-compliance/index.vue')
// const F5F6Correction = () =>
//   import('@/pages/admin/distributor-report-correction/index.vue')
// const EvaluationDocumentVerification = () =>
//   import('@/pages/evaluation/document-verification/index.vue')
// const EvaluationRaportDistribution = () =>
//   import('@/pages/evaluation/raport-distribution')

/**
 * Experience
 */
// const Experience = () =>
//   import('../pages/profile/sections/experience/FertilizerTraderExperience.vue')

// const DocumentVerification = () =>
//   import('@/pages/profile/sections/document-verification/index.vue')

// const DocumentRevision = () =>
//   import('@/pages/profile/sections/document-revision/index.vue')

/**
 * Admin
 */
// const AdminVerificationData = () =>
//   import('@/pages/admin/distributor-data-verification')

// const AdminListApprovalDistributor = () =>
//   import('@/pages/admin/list-distributor-approval')

// const AdminDistributorEvaluation = () =>
//   import('@/pages/admin/distributor-evaluation')

// const AdminListGudangDistributor = () =>
//   import('@/pages/admin/list-gudang-distributor')

// const AdminDistributorApproval = () =>
//   import('@/pages/admin/distributor-approval')

// const AdminEvaluationVerificationData = () =>
//   import('@/pages/admin/evaluation-data-verification')

// const AdminMasterActivities = () => import('@/pages/admin/master-activities')

// const AdminMasterCreateActivities = () =>
//   import('@/pages/admin/master-activities/create')

// const AdminMasterUpdateActivities = () =>
//   import('@/pages/admin/master-activities/update')

const routes = [
  {
    path: '/',
    name: 'index',
    component: Login, 
  },
  {
    path: '/dashboard', 
    component: SideMenu,
    name: 'dashboard',
    meta: {
      requiresAuth: true,
    },
    children: [
    //   {
    //     path: '/form-calon-distributor',
    //     name: 'distributor-candidate-form',
    //     component: CandidateRegistration,
    //   },
    //   {
    //     path: '/dashboard/profil',
    //     name: 'distributor-profile',
    //     component: ProfileSection,
    //     meta: {
    //       role: 'distributor',
    //     },
    //     children: [
    //       {
    //         path: '/dashboard/profil/profil-perusahaan',
    //         name: 'distributor-profile.corporate-profile',
    //         component: CorporateProfile,
    //       },
    //       {
    //         path: '/dashboard/profil/informasi-legal',
    //         name: 'distributor-profile.legal-information',
    //         component: LegalInformation,
    //       },
    //       {
    //         path: '/dashboard/profil/surat-pernyataan',
    //         name: 'distributor-profile.statement-letter',
    //         component: SuratPernyataan,
    //       },
    //       {
    //         path: '/dashboard/profil/surat-ijin-usaha',
    //         name: 'distributor-profile.business-license',
    //         component: BusinessLicense,
    //       },
    //       {
    //         path: '/dashboard/profil/pemegang-saham',
    //         name: 'distributor-profile.shareholders',
    //         component: Shareholder,
    //       },
    //       {
    //         path: '/dashboard/profil/pengurus-perusahaan',
    //         name: 'distributor-profile.company-management',
    //         component: CompanyManagement,
    //       },
    //       {
    //         path: '/dashboard/profil/tenaga-pemasaran',
    //         name: 'distributor-profile.marketing-resource',
    //         component: Marketing,
    //       },
    //       {
    //         path: '/dashboard/profil/person-in-charge',
    //         name: 'distributor-profile.person-in-charge',
    //         component: PersonInCharge,
    //       },
    //       {
    //         path: '/dashboard/profil/distribution-network',
    //         name: 'distributor-profile.distribution-network',
    //         component: DistributionNetwork,
    //       },
    //       {
    //         path: '/dashboard/profil/alat-transportasi',
    //         name: 'distributor-profile.transportation',
    //         component: Transportation,
    //       },
          // {
          //   path: '/dashboard/profil/gudang',
          //   name: 'distributor-profile.warehouse',
          //   component: Warehouse,
          // },
    //       {
    //         path: '/dashboard/profil/rekening-bank',
    //         name: 'distributor-profile.bank-account',
    //         component: BankAccount,
    //       },
    //       {
    //         path: '/dashboard/profil/laporan-keuangan',
    //         name: 'distributor-profile.financial-statement',
    //         component: FinancialStatements,
    //       },
    //       {
    //         path: '/dashboard/profil/dokumen-pajak',
    //         name: 'distributor-profile.tax-document',
    //         component: TaxDocuments,
    //       },
    //       {
    //         path: '/dashboard/profil/pengalaman-pedagang-pupuk',
    //         name: 'distributor-profile.experience',
    //         component: Experience,
    //       },
    //       {
    //         path: '/dashboard/profil/rekomendasi-dinas-perdagangan',
    //         name: 'distributor-profile.rekomendasi-dinas',
    //         component: RekomendasiDinas,
    //       },
    //       {
    //         path: '/dashboard/profil/verifikasi-dokumen',
    //         name: 'distributor-profile.document-verification',
    //         component: DocumentVerification,
    //       },
    //       {
    //         path: '/dashboard/profil/status-revisi-dokumen',
    //         name: 'distributor-profile.document-revision',
    //         component: DocumentRevision,
    //       },
    //     ],
    //   },
    //   {
    //     path: '/dashboard/evaluation',
    //     name: 'distributor-evaluation',
    //     component: EvaluationSection,
    //     meta: {
    //       role: 'distributor',
    //     },
    //     children: [
    //       {
    //         path: '/dashboard/evaluation/demplot-and-socialization',
    //         name: 'distributor-evaluation.demplot-and-socialization',
    //         component: DemplotSocialization,
    //       },
    //       {
    //         path: '/dashboard/evaluation/collection-and-distribution',
    //         name: 'distributor-evaluation.collection-and-distribution',
    //         component: CollectionAndDistribution,
    //       },
    //       {
    //         path: '/dashboard/evaluation/subsidy-report',
    //         name: 'distributor-evaluation.subsidy-report',
    //         component: SubsidyReport,
    //       },
    //       {
    //         path: '/dashboard/evaluation/pi-group-application',
    //         name: 'distributor-evaluation.pi-group-application',
    //         component: PIGroupApplication,
    //       },
    //       {
    //         path: '/dashboard/evaluation/media-reportation',
    //         name: 'distributor-evaluation.media-reportation',
    //         component: MediaReportation,
    //       },
    //       {
    //         path: '/dashboard/evaluation/e-rdkk',
    //         name: 'distributor-evaluation.e-rdkk',
    //         component: ERDKK,
    //       },
    //       {
    //         path: '/dashboard/evaluation/kiosk-performance-reports',
    //         name: 'distributor-evaluation.kiosk-performance-reports',
    //         component: KioskPerformanceReport,
    //       },
    //       {
    //         path: '/dashboard/evaluation/verifikasi-dokumen',
    //         name: 'distributor-evaluation.document-verification',
    //         component: EvaluationDocumentVerification,
    //       },
    //       {
    //         path: '/dashboard/profil/status-revisi-dokumen',
    //         name: 'distributor-evaluation.document-revision',
    //         component: DocumentRevision,
    //       },
    //       {
    //         path: '/dashboard/evaluation/hasil-penilaian-kinerja',
    //         name: 'distributor-evaluation.raport-distribution',
    //         component: EvaluationRaportDistribution,
    //       },
    //     ],
    //   },
    //   {
    //     path: '/verifikasi-data/index',
    //     name: 'admin-document-verification.index',
    //     component: AdminVerificationData,
    //   },
    //   {
    //     path: '/list-approval-distributor',
    //     name: 'admin-list-approval-distributor.index',
    //     component: AdminListApprovalDistributor,
    //   },
    //   {
    //     path: '/list-distributor-evaluation',
    //     name: 'admin-distributor-evaluation.index',
    //     component: AdminDistributorEvaluation,
    //   },
    //   {
    //     path: '/list-gudang-distributor',
    //     name: 'admin-list-gudang-distributor.index',
    //     component: AdminListGudangDistributor,
    //   },
    //   {
    //     path: '/master-activities',
    //     name: 'admin-master-activities.index',
    //     component: AdminMasterActivities,
    //   },
    //   {
    //     path: '/master-activities/create',
    //     name: 'admin-master-activities.create',
    //     component: AdminMasterCreateActivities,
    //   },
    //   {
    //     path: '/master-activities/update/:activity',
    //     name: 'admin-master-activities.update',
    //     component: AdminMasterUpdateActivities,
    //   },
    //   {
    //     path: '/verifikasi-dokumen-penilaian/index',
    //     name: 'admin-evaluation-verification.index',
    //     component: AdminEvaluationVerificationData,
    //   },
    //   {
    //     path: '/calon-distributor',
    //     name: 'admin-distributor-candidate.index',
    //     component: AdminVerificationData,
    //   },
    //   {
    //     path: '/distributor-resmi',
    //     name: 'admin-authorized-distributor.index',
    //     component: AdminVerificationData,
    //   },
    //   {
    //     path: '/approval-distributor',
    //     name: 'admin-distributor-approval.index',
    //     component: AdminDistributorApproval,
    //   },
    //   {
    //     path: '/approval/distributor-resmi',
    //     name: 'admin-approval-authorized-distributor.index',
    //     component: AdminVerificationData,
    //   },
    //   {
    //     path: '/verifikasi-data/:distributor_id?',
    //     name: 'admin-document-verification.bundle',
    //     component: ProfileSection,
    //     meta: {
    //       role: 'admin',
    //     },
    //     children: [
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil-perusahaan',
    //         name:
    //           'admin-document-verification.distributor-profile.corporate-profile',
    //         component: CorporateProfile,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/informasi-legal',
    //         name:
    //           'admin-document-verification.distributor-profile.legal-information',
    //         component: LegalInformation,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/surat-ijin-usaha',
    //         name:
    //           'admin-document-verification.distributor-profile.business-license',
    //         component: BusinessLicense,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/pemegang-saham',
    //         name:
    //           'admin-document-verification.distributor-profile.shareholders',
    //         component: Shareholder,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data/:distributor_id?/profil/pengurus-perusahaan',
    //         name:
    //           'admin-document-verification.distributor-profile.company-management',
    //         component: CompanyManagement,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/tenaga-pemasaran',
    //         name:
    //           'admin-document-verification.distributor-profile.marketing-resource',
    //         component: Marketing,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/person-in-charge',
    //         name:
    //           'admin-document-verification.distributor-profile.person-in-charge',
    //         component: PersonInCharge,
    //       },
          // {
          //   path: '/verifikasi-data/:distributor_id?/profil/gudang',
          //   name: 'admin-document-verification.distributor-profile.warehouse',
          //   component: Warehouse,
          // },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/alat-transportasi',
    //         name:
    //           'admin-document-verification.distributor-profile.transportation',
    //         component: Transportation,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/rekening-bank',
    //         name:
    //           'admin-document-verification.distributor-profile.bank-account',
    //         component: BankAccount,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/laporan-keuangan',
    //         name:
    //           'admin-document-verification.distributor-profile.financial-statement',
    //         component: FinancialStatements,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/dokumen-pajak',
    //         name:
    //           'admin-document-verification.distributor-profile.tax-document',
    //         component: TaxDocuments,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data/:distributor_id?/profil/pengalaman-pedagang-pajak',
    //         name: 'admin-document-verification.distributor-profile.experience',
    //         component: Experience,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data/:distributor_id?/profil/distribution-network',
    //         name:
    //           'admin-document-verification.distributor-profile.distribution-network',
    //         component: DistributionNetwork,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/surat-pernyataan',
    //         name:
    //           'admin-document-verification.distributor-profile.statement-letter',
    //         component: SuratPernyataan,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data/:distributor_id?/profil/rekomendasi-dinas-perdagangan',
    //         name:
    //           'admin-document-verification.distributor-profile.rekomendasi-dinas',
    //         component: RekomendasiDinas,
    //       },
    //       {
    //         path: '/verifikasi-data/:distributor_id?/profil/verifikasi-dokumen',
    //         name:
    //           'admin-document-verification.distributor-profile.document-verification',
    //         component: DocumentVerification,
    //       },
    //     ],
    //   },
    //   {
    //     path: '/verifikasi-dokumen-penilaian/:distributor_id?',
    //     name: 'admin-evaluation-verification.bundle',
    //     component: EvaluationSection,
    //     meta: {
    //       role: 'admin',
    //     },
    //     children: [
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/demplot-and-socialization',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.demplot-and-socialization',
    //         component: DemplotSocialization,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/collection-and-distribution',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.collection-and-distribution',
    //         component: CollectionAndDistribution,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/subsidy-report',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.subsidy-report',
    //         component: SubsidyReport,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/pi-group-application',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.pi-group-application',
    //         component: PIGroupApplication,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/media-reportation',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.media-reportation',
    //         component: MediaReportation,
    //       },
    //       {
    //         path: '/verifikasi-data-pkd/:distributor_id?/evaluation/e-rdkk',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.e-rdkk',
    //         component: ERDKK,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/kiosk-performance-reports',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.kiosk-performance-reports',
    //         component: KioskPerformanceReport,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/distributor-compliance',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.distributor-compliance',
    //         component: DistributorCompliance,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/f5-f6-correction',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.f5-f6-correction',
    //         component: F5F6Correction,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/verifikasi-dokumen',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.document-verification',
    //         component: EvaluationDocumentVerification,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/evaluation/rapor-distributor',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.raport-distribution',
    //         component: EvaluationRaportDistribution,
    //       },
    //       {
    //         path:
    //           '/verifikasi-data-pkd/:distributor_id?/profil/status-revisi-dokumen',
    //         name:
    //           'admin-evaluation-document-verification.distributor-evaluation.document-revision',
    //         component: DocumentRevision,
    //       },
    //     ],
    //   },
      ...adminRoutes,
    ],
  },
  {
    path: '/user-account',
    component: SideMenu,
    name: 'user-account',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/user-account/update',
        name: 'user-account.update',
        component: Account,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword,
  },
  {
    path: '/option-app',
    name: 'option-app',
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/option-app/option',
        name: 'option-app.option',
        component: OptionApp,
      },
    ],
  },
  {
    path: '/kuisioner',
    name: 'kuisioner',
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/kuisioner/kuisioner',
        name: 'kuisioner.kuisioner',
        component: Kuisioner,
      }
    ],
  },
  {
    path: '/verifikasi',
    name: 'verifikasi',
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/verifikasi/verifikasi',
        name: 'verifikasi.verifikasi',
        component: Verifikasi,  
      },
    ],
  },
  { 
    path: '/dn-individu', 
    name: 'dn-individu',
    component: SideMenu,
    meta: {
      requiresAuth: true,    
    },
    children: [
      {
        path: '/dn-individu/profile',
        name: 'dn-individu.profile',
        component: DNIndividuProfile,
      },
      {
        path: '/dn-individu/keuangan',
        name: 'dn-individu.keuangan',
        component: DNIndividuKeuangan, 
      },
      {
        path: '/dn-individu/legalitas',
        name: 'dn-individu.legalitas',
        component: DNIndividuLegalitas, 
      },
      {
        path: '/dn-individu/operasional',
        name: 'dn-individu.operasional',
        component: DNIndividuOperasional,
      },
      {
        path: '/dn-individu/pasar',
        name: 'dn-individu.pasar',
        component: DNIndividuPasar,
      },
      {
        path: '/dn-individu/status-verifikasi-dokumen',
        name: 'dn-individu.status-verifikasi-dokumen',
        component: DNIndividuStatusVerifikasiDokumen,
      },
    ],
  },
  {
    path: '/dn-distributor',
    name: 'dn-distributor',
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/dn-distributor/profile',
        name: 'dn-distributor.profile',
        component: DNDistributorProfile,
      },
      {
        path: '/dn-distributor/legalitas',
        name: 'dn-distributor.legalitas',
        component: DNDistributorLegalitas, 
      },
      {
        path: '/dn-distributor/pasar',
        name: 'dn-distributor.pasar',
        component: DNDistributorPasar,
      },
      {
        path: '/dn-distributor/operasional',
        name: 'dn-distributor.operasional',
        component: DNDistributorOperasional,
      },
      {
        path: '/dn-distributor/keuangan',
        name: 'dn-distributor.keuangan',
        component: DNDistributorKeuangan, 
      },
      {
        path: '/dn-distributor/informasi-cabang',
        name: 'dn-distributor.informasi-cabang',
        component: DNDistributorInformasiCabang, 
      },
    ],
  },
  {
    path: '/dn-korporasi', 
    name: 'dn-korporasi', 
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/dn-korporasi/profile',
        name: 'dn-korporasi.profile',
        component: DNKorporasiProfile,
      },
      {
        path: '/dn-korporasi/legalitas',
        name: 'dn-korporasi.legalitas',
        component: DNKorporasiLegalitas, 
      },
      {
        path: '/dn-korporasi/pasar',
        name: 'dn-korporasi.pasar',
        component: DNKorporasiPasar,
      },
      {
        path: '/dn-korporasi/operasional',
        name: 'dn-korporasi.operasional',
        component: DNKorporasiOperasional,
      },
      {
        path: '/dn-korporasi/keuangan',
        name: 'dn-korporasi.keuangan',
        component: DNKorporasiKeuangan, 
      },
      {
        path: '/dn-korporasi/informasi-cabang',
        name: 'dn-korporasi.informasi-cabang',
        component: DNKorporasiInformasiCabang, 
      },
    ],
  },
  { 
    path: '/ln-korporasi', 
    name: 'ln-korporasi', 
    component: SideMenu,
    meta: { 
      requiresAuth: true,
    },
    children: [ 
      {
        path: '/ln-korporasi/profile',
        name: 'ln-korporasi.profile',
        component: LNKorporasiProfile,
      },
      {
        path: '/ln-korporasi/legalitas',
        name: 'ln-korporasi.legalitas',
        component: LNKorporasiLegalitas, 
      },
      {
        path: '/ln-korporasi/pasar',
        name: 'ln-korporasi.pasar',
        component: LNKorporasiPasar,
      },
      {
        path: '/ln-korporasi/operasional',
        name: 'ln-korporasi.operasional',
        component: LNKorporasiOperasional,
      },
      {
        path: '/ln-korporasi/keuangan',
        name: 'ln-korporasi.keuangan',
        component: LNKorporasiKeuangan, 
      },
    ],
  },
  {
    path: '/ln-agen', 
    name: 'ln-agen', 
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/ln-agen/profile', 
        name: 'ln-agen.profile',
        component: LNAgenProfile,
      },
      {
        path: '/ln-agen/legalitas',
        name: 'ln-agen.legalitas',
        component: LNAgenLegalitas, 
      },
      {
        path: '/ln-agen/operasional',
        name: 'ln-agen.operasional',
        component: LNAgenOperasional,
      },
      {
        path: '/ln-agen/keuangan',
        name: 'ln-agen.keuangan',
        component: LNAgenKeuangan, 
      },
    ],
  },
  {
    path: '/dn-retail-korporasi', 
    name: 'dn-retail-korporasi', 
    component: SideMenu,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/dn-retail-korporasi/profile',
        name: 'dn-retail-korporasi.profile',
        component: DNRetailKorporasiProfile,
      },
      {
        path: '/dn-retail-korporasi/legalitas',
        name: 'dn-retail-korporasi.legalitas',
        component: DNRetailKorporasiLegalitas, 
      },
      {
        path: '/dn-retail-korporasi/pasar',
        name: 'dn-retail-korporasi.pasar',
        component: DNRetailKorporasiPasar,
      },
      {
        path: '/dn-retail-korporasi/operasional',
        name: 'dn-retail-korporasi.operasional',
        component: DNRetailKorporasiOperasional,
      },
      {
        path: '/dn-retail-korporasi/keuangan',
        name: 'dn-retail-korporasi.keuangan',
        component: DNRetailKorporasiKeuangan, 
      },
      {
        path: '/dn-retail-korporasi/informasi-cabang',
        name: 'dn-retail-korporasi.informasi-cabang',
        component: DNRetailKorporasiInformasiCabang, 
      },
    ],
  },
  {
    path: '/error-page',
    name: 'error-page',
    component: ErrorPage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      }
    } else {
      return savedPosition || { left: 0, top: 0 }
    }
  },
})

router.beforeEach(async (to, from, next) => {
  store.dispatch('main/setPageLoadedValue', false)

  let hasXSRFToken = getCookie('XSRF-TOKEN')

  if (hasXSRFToken === 'undefined') {
    await getXSRFToken()
  }

  const authenticated = store.state.auth.authenticated
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const loginQuery = { path: '/login', query: { redirect: to.fullPath } }
  const currentUser = store.state.auth.user

  // Clear last retrieved form submission errors data
  store.dispatch('errorBag/clear')

  if (requiresAuth && !authenticated) {
    next(loginQuery)
  } else {
    if (['/login', '/register', '/'].includes(to.path)) {
      if (authenticated === true) {
        next({ path: '/dashboard' })
      }
    }

    if (authenticated) {
      if (currentUser.role.name == 'distributor') {
        // Prevent accessing /profile, causing blank view on right side of main view
        if (
          to.name == 'distributor-profile' &&
          from.name != 'distributor-profile.corporate-profile'
        ) {
          next({ name: 'distributor-profile.corporate-profile' })
        }

        if (to.name == 'dashboard') {
          if (
            currentUser.hasOwnProperty('distributor') &&
            currentUser.distributor != null
          ) {
            next({ name: 'distributor-profile.corporate-profile' })
          } else {
            next({ name: 'distributor-candidate-form' })
          }
        }

        if (to.name == 'distributor-candidate-form') {
          if (
            currentUser.hasOwnProperty('distributor') &&
            currentUser.distributor != null
          ) {
            next({ name: 'distributor-profile.corporate-profile' })
          }
        }
      } else {
        try {
          let routeSegments = to.name.split('.')
          if (routeSegments[0] == 'distributor-profile') {
            next({ name: 'error-page' })
          }
        } catch (_) {
          next({ name: 'error-page' })
        }
      }

      // next({ path: "/dashboard" });
    }

    next()
  }
})

router.afterEach(() => {
  store.dispatch('main/setPageLoadedValue', true)
})

export default router
