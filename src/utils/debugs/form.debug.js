export const formFiller = (formData, templateData) => {
    if (formData != null) {
        Object.keys(formData).forEach(key => {
            if (templateData.filled.hasOwnProperty(key)) {
                formData[key] = templateData.filled[key];
            }
        });
    }
};

export const formReset = (formData, templateData) => {
    if (formData != null) {
        Object.keys(formData).forEach(key => {
            if (templateData.cleared.hasOwnProperty(key)) {
                formData[key] = templateData.cleared[key];
            }
        });
    }
};
