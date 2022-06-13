import {
  useRoute
} from "vue-router";
import httpClient from "../httpClient";

export const getActiveDocuments = distributorId =>
  httpClient.get(`/evaluation/distributor/${distributorId}/documents`);

export const getBundleActiveDocuments = bundleId =>
  httpClient.get(`/bundle/${bundleId}/documents`);

export const getBundles = () => httpClient.get(`/bundle`);

export const getBundleItemDetailData = (distributorId, typeId) =>
  httpClient.get(
    `/evaluation/distributor/${distributorId}/item-details-data/item-type/${typeId}`
  );

export const approveBundleItem = (bundleId, typeId, notes) =>
  httpClient.post(`/bundle/${bundleId}/item-type/${typeId}/approve`, {
    notes
  });

export const rejectBundleItem = (bundleId, typeId, notes) =>
  httpClient.post(`/bundle/${bundleId}/item-type/${typeId}/reject`, {
    notes
  });

export const approveDistributorBundleItem = (
    distributorId,
    registration_period,
    typeId,
    notes
  ) =>
  httpClient.post(
    `/evaluation/distributor/${distributorId}/item-type/${typeId}/approve`, {
      notes
    }, {
      params: {
        registration_period
      }
    }
  );

export const rejectDistributorBundleItem = (
    distributorId,
    registration_period,
    typeId,
    notes
  ) =>
  httpClient.post(
    `/evaluation/distributor/${distributorId}/item-type/${typeId}/reject`, {
      notes
    }, {
      params: {
        registration_period
      }
    }
  );

export const proposeDistributorBundleItemRevision = (
    distributorId,
    registration_period,
    typeId,
    notes
  ) =>
  httpClient.post(
    `/evaluation/distributor/${distributorId}/item-type/${typeId}/propose-revision`, {
      notes
    }, {
      params: {
        registration_period
      }
    }
  );

export const distributorBundleItemStatus = (
    distributorId,
    typeId,
    registration_period
  ) =>
  httpClient.get(`/evaluation/distributor/${distributorId}/item-type/${typeId}/status`, {
    params: {
      registration_period
    }
  });

export const getVerificationActivities = (
    distributorId,
    typeId,
    registration_period
  ) =>
  httpClient.get(
    `/evaluation/distributor/${distributorId}/item-type/${typeId}/verification-activities`, {
      params: {
        registration_period
      }
    }
  );

export const submitDistributorBundleItemRevision = (
    distributorId,
    registration_period,
    typeId
  ) =>
  httpClient.post(
    `/evaluation/distributor/${distributorId}/item-type/${typeId}/submit-revision`, {}, {
      params: {
        registration_period
      }
    }
  );

export const showBundleItemByType = (distributorId, typeId) =>
  httpClient.get(`/evaluation/distributor/${distributorId}/item-type/${typeId}`);

export const proposeDistributorBundleItemsRevision = (
    distributor_id,
    itemTypeIds,
    notes
  ) =>
  httpClient.post(
    `/evaluation/distributor/${distributor_id}/propose-revision-by-document-type`, {
      bundle_item_type_ids: itemTypeIds
    }
  );

export const rejectSelected = (body) => httpClient.post('/distributor-evaluation/rejected/wilayah', body);
export const approveSelected = (body) => httpClient.post('/distributor-evaluation/approved/wilayah', body);
export const countScore = (body) => httpClient.post('/distributor-evaluation/count-score', body);

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
  rejectSelected,
  approveSelected,
  countScore,
};
