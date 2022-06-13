const mapDistributorRoute = () => {
    return {
        1: { name: 'distributor-profile.corporate-profile' },
        2: { name: 'distributor-profile.corporate-profile' },
        3: { name: 'distributor-profile.legal-information' },
        4: { name: 'distributor-profile.legal-information' },
        5: { name: 'distributor-profile.statement-letter' },
        6: { name: 'distributor-profile.business-license' },
        7: { name: 'distributor-profile.business-license' },
        8: { name: 'distributor-profile.business-license' },
        9: { name: 'distributor-profile.rekomendasi-dinas' },
        10: { name: 'distributor-profile.shareholders' },
        11: { name: 'distributor-profile.company-management' },
        12: { name: 'distributor-profile.marketing-resource' },
        13: { name: 'distributor-profile.person-in-charge' },
        14: { name: 'distributor-profile.warehouse' },
        15: { name: 'distributor-profile.transportation' },
        16: { name: 'distributor-profile.bank-account' },
        17: { name: 'distributor-profile.financial-statement' },
        18: { name: 'distributor-profile.financial-statement' },
        19: { name: 'distributor-profile.financial-statement' },
        20: { name: 'distributor-profile.tax-document' },
        21: { name: 'distributor-profile.tax-document' },
        22: { name: 'distributor-profile.tax-document' },
        23: { name: 'distributor-profile.experience' },
        24: { name: 'distributor-profile.distribution-network' },
        25: { name: 'distributor-profile.financial-statement' },
        26: { name: 'distributor-profile.financial-statement' },
        27: { name: 'distributor-profile.financial-statement' },
    }
}

const mapAdminRoute = (distributor_id, registration_period) => {
    return {
        1: { name: 'admin-document-verification.distributor-profile.corporate-profile', params: { distributor_id }, query: { registration_period } },
        2: { name: 'admin-document-verification.distributor-profile.corporate-profile', params: { distributor_id }, query: { registration_period } },
        3: { name: 'admin-document-verification.distributor-profile.legal-information', params: { distributor_id }, query: { registration_period } },
        4: { name: 'admin-document-verification.distributor-profile.legal-information', params: { distributor_id }, query: { registration_period } },
        5: { name: 'admin-document-verification.distributor-profile.statement-letter', params: { distributor_id }, query: { registration_period } },
        6: { name: 'admin-document-verification.distributor-profile.business-license', params: { distributor_id }, query: { registration_period } },
        7: { name: 'admin-document-verification.distributor-profile.business-license', params: { distributor_id }, query: { registration_period } },
        8: { name: 'admin-document-verification.distributor-profile.business-license', params: { distributor_id }, query: { registration_period } },
        9: { name: 'admin-document-verification.distributor-profile.rekomendasi-dinas', params: { distributor_id }, query: { registration_period } },
        10: { name: 'admin-document-verification.distributor-profile.shareholders', params: { distributor_id }, query: { registration_period } },
        11: { name: 'admin-document-verification.distributor-profile.company-management', params: { distributor_id }, query: { registration_period } },
        12: { name: 'admin-document-verification.distributor-profile.marketing-resource', params: { distributor_id }, query: { registration_period } },
        13: { name: 'admin-document-verification.distributor-profile.person-in-charge', params: { distributor_id }, query: { registration_period } },
        14: { name: 'admin-document-verification.distributor-profile.warehouse', params: { distributor_id }, query: { registration_period } },
        15: { name: 'admin-document-verification.distributor-profile.transportation', params: { distributor_id }, query: { registration_period } },
        16: { name: 'admin-document-verification.distributor-profile.bank-account', params: { distributor_id }, query: { registration_period } },
        17: { name: 'admin-document-verification.distributor-profile.financial-statement', params: { distributor_id }, query: { registration_period } },
        18: { name: 'admin-document-verification.distributor-profile.financial-statement', params: { distributor_id }, query: { registration_period } },
        19: { name: 'admin-document-verification.distributor-profile.financial-statement', params: { distributor_id }, query: { registration_period } },
        20: { name: 'admin-document-verification.distributor-profile.tax-document', params: { distributor_id }, query: { registration_period } },
        21: { name: 'admin-document-verification.distributor-profile.tax-document', params: { distributor_id }, query: { registration_period } },
        22: { name: 'admin-document-verification.distributor-profile.tax-document', params: { distributor_id }, query: { registration_period } },
        23: { name: 'admin-document-verification.distributor-profile.experience', params: { distributor_id }, query: { registration_period } },
        24: { name: 'admin-document-verification.distributor-profile.distribution-network', params: { distributor_id }, query: { registration_period } },
        25: { name: 'admin-document-verification.distributor-profile.financial-statement', params: { distributor_id }, query: { registration_period } },
        26: { name: 'admin-document-verification.distributor-profile.financial-statement', params: { distributor_id }, query: { registration_period } },
        27: { name: 'admin-document-verification.distributor-profile.financial-statement', params: { distributor_id }, query: { registration_period } },

    }
}

export {
    mapDistributorRoute,
    mapAdminRoute
}