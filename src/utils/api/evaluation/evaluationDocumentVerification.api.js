import {
  useRoute
} from "vue-router";
import httpClient from "../httpClient";

export const getActiveDocuments = distributorId => httpClient.get(`/distributor/${distributorId}/documents`);
export const getBundleActiveDocuments = bundleId => httpClient.get(`/bundle/${bundleId}/documents`);

export const getBundles = () => httpClient.get(`/bundle`);
export const getBundleItemDetailData = (distributorId, typeId) => httpClient.get(`/distributor/${distributorId}/item-details-data/item-type/${typeId}`);

export const approveBundleItem = (bundleId, typeId, notes) => httpClient.post(`/bundle/${bundleId}/item-type/${typeId}/approve`, {
  notes
});
export const rejectBundleItem = (bundleId, typeId, notes) => httpClient.post(`/bundle/${bundleId}/item-type/${typeId}/reject`, {
  notes
});

export const rejectDistributorBundleItem = (
    distributorId, registration_period, typeId, notes
  ) =>
  httpClient.post(`/distributor/${distributorId}/item-type/${typeId}/reject`, {
    notes
  }, {
    params: {
      registration_period
    }
  });

export const proposeDistributorBundleItemsRevision = (
    distributor_id, itemTypeIds, notes
  ) =>
  httpClient.post(`/distributor/${distributor_id}/propose-revision-by-document-type`, {
    bundle_item_type_ids: itemTypeIds
  });

// Below is needed
export const showBundleItemByType = (distributorId, typeId) => httpClient.get(`/distributor-evaluation/${distributorId}/item-type/${typeId}`);
export const approveDistributorBundleItem = (distributorId, typeId, notes, bundleId) => httpClient.post(`/distributor-evaluation/${distributorId}/item-type/${typeId}/approve`, {
  notes,
  bundleId
});
export const proposeDistributorBundleItemRevision = (distributorId, typeId, notes, bundleId) => httpClient.post(`/distributor-evaluation/${distributorId}/item-type/${typeId}/propose-revision`, {
  notes,
  bundleId
});

export const getEvaluationBundle = ( distributorId ) => httpClient.post( `/distributor-evaluation/${distributorId}/bundle`, {});
export const getVerificationActivities = ( distributorId, typeId ) => httpClient.get( `/distributor-evaluation/${distributorId}/item-type/${typeId}/verification-activities`);
export const submitBundleForVerification = () => httpClient.post(`/create-evaluation-proposal`)
export const distributorEvaluationApprove = (bundleId) => httpClient.post(`/distributor-evaluation/${bundleId}/approve`);
export const distributorBundleItemStatus = ( distributorId, typeId ) => httpClient.get(`/distributor-evaluation/${distributorId}/item-type/${typeId}/status`);

export const submitDistributorBundleItemRevision = ( distributorId, typeId ) => httpClient.post( `/distributor-evaluation/${distributorId}/item-type/${typeId}/submit-revision`, {});

export default {
  getActiveDocuments,
  getBundleItemDetailData,
  getBundles,
  approveBundleItem,
  rejectBundleItem,
  approveDistributorBundleItem,
  rejectDistributorBundleItem,
  showBundleItemByType,
  getBundleActiveDocuments,
  distributorBundleItemStatus,
  getVerificationActivities,
  proposeDistributorBundleItemRevision,
  submitDistributorBundleItemRevision,
  proposeDistributorBundleItemsRevision,
  distributorEvaluationApprove,
  submitBundleForVerification,
  getEvaluationBundle,
};
