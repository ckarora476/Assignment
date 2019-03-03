import DropDown from "./DropDown";
import TextField from "./TextField";

const FormFieldMap = {
    TextField: TextField,
    DropDown: DropDown
}


export function getFormField(type) {
    const field = FormFieldMap[type]
    if (!field) return null
    return FormFieldMap[type]
}