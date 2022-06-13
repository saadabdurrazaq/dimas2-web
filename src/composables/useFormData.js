import useVuelidate from "@vuelidate/core";
import { reactive, toRefs, ref, provide } from "vue-demi";

export default function useFormData(formDefaults, rules = null) {
    const updateMode = ref(false);
    const formData = reactive({...formDefaults });
    let validate = null;

    if (rules) {
        validate = useVuelidate(rules, toRefs(formData));
    }

    // Bring back each formData attribute to its default state according to formData.default
    const resetFormData = () => {
        for (const key in formDefaults) {
            formData[key] = formDefaults[key];
        }

        if (validate) {
            validate.value.$reset();
        }
    };

    // Map each available keys from formDataDefault and fill it with new data value
    const hydrateFormData = data => {
        const formDataAsRefs = toRefs(formData);

        for (const key in formDefaults) {
            if (Object.hasOwnProperty.call(data, key)) {
                formDataAsRefs[key].value = data[key];
            }
        }
    };

    // Fill form data with datagrid value
    const updateFormData = async data => {
        if (data != null) {
            hydrateFormData(data);

            updateMode.value = true;
        } else {
            resetFormData();

            updateMode.value = false;
        }
    };

    provide('updateFormData', updateFormData)

    return {
        updateMode,
        formData,
        validate,
        resetFormData,
        hydrateFormData,
        updateFormData
    }
}