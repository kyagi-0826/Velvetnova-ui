import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare const __VLS_component: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<NTextProps_2>, {
type: string;
size: string;
strong: boolean;
italic: boolean;
underline: boolean;
delete: boolean;
code: boolean;
depth: undefined;
tag: string;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<NTextProps_2>, {
type: string;
size: string;
strong: boolean;
italic: boolean;
underline: boolean;
delete: boolean;
code: boolean;
depth: undefined;
tag: string;
}>>> & Readonly<{}>, {
size: "tiny" | "small" | "medium" | "large";
type: "default" | "primary" | "info" | "success" | "warning" | "error";
code: boolean;
strong: boolean;
tag: string;
italic: boolean;
underline: boolean;
delete: boolean;
depth: 1 | 2 | 3 | 4 | 5;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_2: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<NInputProps_2>, {
modelValue: string;
type: string;
size: string;
placeholder: string;
disabled: boolean;
readonly: boolean;
clearable: boolean;
round: boolean;
status: undefined;
prefix: string;
suffix: string;
maxlength: undefined;
showCount: boolean;
}>>, {
focus: () => void;
blur: () => void;
inputRef: Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string | number) => void;
input: (value: string) => void;
focus: (event: FocusEvent) => void;
blur: (event: FocusEvent) => void;
clear: () => void;
keydown: (event: KeyboardEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_2<NInputProps_2>, {
modelValue: string;
type: string;
size: string;
placeholder: string;
disabled: boolean;
readonly: boolean;
clearable: boolean;
round: boolean;
status: undefined;
prefix: string;
suffix: string;
maxlength: undefined;
showCount: boolean;
}>>> & Readonly<{
onFocus?: ((event: FocusEvent) => any) | undefined;
onBlur?: ((event: FocusEvent) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
onClear?: (() => any) | undefined;
onKeydown?: ((event: KeyboardEvent) => any) | undefined;
}>, {
disabled: boolean;
size: "tiny" | "small" | "medium" | "large";
type: "text" | "password" | "email" | "number" | "tel" | "url";
modelValue: string | number;
placeholder: string;
clearable: boolean;
readonly: boolean;
round: boolean;
status: "success" | "warning" | "error";
prefix: string;
suffix: string;
maxlength: number;
showCount: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_3: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<NCheckboxProps_2>, {
checked: undefined;
defaultChecked: boolean;
indeterminate: boolean;
disabled: boolean;
size: string;
label: string;
value: undefined;
}>>, {
focus: () => void;
blur: () => void;
inputRef: Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:checked": (checked: boolean) => void;
change: (checked: boolean, event: Event) => void;
focus: (event: FocusEvent) => void;
blur: (event: FocusEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_4<__VLS_TypePropsToRuntimeProps_4<NCheckboxProps_2>, {
checked: undefined;
defaultChecked: boolean;
indeterminate: boolean;
disabled: boolean;
size: string;
label: string;
value: undefined;
}>>> & Readonly<{
"onUpdate:checked"?: ((checked: boolean) => any) | undefined;
onChange?: ((checked: boolean, event: Event) => any) | undefined;
onFocus?: ((event: FocusEvent) => any) | undefined;
onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
checked: boolean;
defaultChecked: boolean;
indeterminate: boolean;
disabled: boolean;
size: "tiny" | "small" | "medium" | "large";
label: string;
value: string | number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_4: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<NRadioProps_2>, {
disabled: boolean;
size: string;
label: string;
name: undefined;
}>>, {
focus: () => void;
blur: () => void;
inputRef: Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
change: (value: string | number | boolean, event: Event) => void;
focus: (event: FocusEvent) => void;
blur: (event: FocusEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_5<__VLS_TypePropsToRuntimeProps_5<NRadioProps_2>, {
disabled: boolean;
size: string;
label: string;
name: undefined;
}>>> & Readonly<{
onChange?: ((value: string | number | boolean, event: Event) => any) | undefined;
onFocus?: ((event: FocusEvent) => any) | undefined;
onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
disabled: boolean;
size: "tiny" | "small" | "medium" | "large";
label: string;
name: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare const __VLS_component_5: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_6<NRadioGroupProps_2>, {
modelValue: undefined;
name: string;
size: string;
disabled: boolean;
direction: string;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string | number | boolean) => void;
change: (value: string | number | boolean) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_6<__VLS_TypePropsToRuntimeProps_6<NRadioGroupProps_2>, {
modelValue: undefined;
name: string;
size: string;
disabled: boolean;
direction: string;
}>>> & Readonly<{
onChange?: ((value: string | number | boolean) => any) | undefined;
"onUpdate:modelValue"?: ((value: string | number | boolean) => any) | undefined;
}>, {
disabled: boolean;
size: "tiny" | "small" | "medium" | "large";
modelValue: string | number | boolean;
direction: "horizontal" | "vertical";
name: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_4<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_5<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_6<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_7<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_8<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_2<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_3<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_4<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_5<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_6<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_7<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_8<T> = {
    [K in keyof T]: T[K];
} & {};

declare function __VLS_template(): {
    default?(_: {}): any;
};

declare function __VLS_template_2(): {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
};

declare function __VLS_template_3(): {
    default?(_: {}): any;
};

declare function __VLS_template_4(): {
    default?(_: {}): any;
};

declare function __VLS_template_5(): {
    default?(_: {}): any;
};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_4<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_4<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_5<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_5<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_6<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_6<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_7<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_7<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_8<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_8<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_2<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_3<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_3<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_4<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_4<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_5<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_5<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_6<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_6<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_7<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_7<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_8<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_8<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: {
    install: (app: App) => void;
};
export default _default;

export declare const NCheckbox: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

export declare interface NCheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    label?: string;
    value?: string | number;
}

declare interface NCheckboxProps_2 {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    label?: string;
    value?: string | number;
}

export declare const NDatePicker: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_7<NDatePickerProps_2>, {
modelValue: null;
placeholder: string;
disabled: boolean;
clearable: boolean;
showTime: boolean;
format: string;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: Date | null) => void;
change: (value: Date | null) => void;
focus: (event: FocusEvent) => void;
blur: (event: FocusEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_7<__VLS_TypePropsToRuntimeProps_7<NDatePickerProps_2>, {
modelValue: null;
placeholder: string;
disabled: boolean;
clearable: boolean;
showTime: boolean;
format: string;
}>>> & Readonly<{
onChange?: ((value: Date | null) => any) | undefined;
onFocus?: ((event: FocusEvent) => any) | undefined;
onBlur?: ((event: FocusEvent) => any) | undefined;
"onUpdate:modelValue"?: ((value: Date | null) => any) | undefined;
}>, {
disabled: boolean;
modelValue: Date | null;
placeholder: string;
clearable: boolean;
showTime: boolean;
format: string;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare interface NDatePickerProps {
    modelValue?: Date | null;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    showTime?: boolean;
    format?: string;
}

declare interface NDatePickerProps_2 {
    modelValue?: Date | null;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    showTime?: boolean;
    format?: string;
}

export declare const NInput: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

export declare interface NInputProps {
    modelValue?: string | number;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    size?: 'tiny' | 'small' | 'medium' | 'large';
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    round?: boolean;
    status?: 'success' | 'warning' | 'error';
    prefix?: string;
    suffix?: string;
    maxlength?: number;
    showCount?: boolean;
}

declare interface NInputProps_2 {
    modelValue?: string | number;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    size?: 'tiny' | 'small' | 'medium' | 'large';
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearable?: boolean;
    round?: boolean;
    status?: 'success' | 'warning' | 'error';
    prefix?: string;
    suffix?: string;
    maxlength?: number;
    showCount?: boolean;
}

export declare const NRadio: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, ReturnType<typeof __VLS_template_4>>;

export declare const NRadioGroup: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, ReturnType<typeof __VLS_template_5>>;

export declare interface NRadioGroupProps {
    modelValue?: string | number | boolean;
    name?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    disabled?: boolean;
    direction?: 'horizontal' | 'vertical';
}

declare interface NRadioGroupProps_2 {
    modelValue?: string | number | boolean;
    name?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    disabled?: boolean;
    direction?: 'horizontal' | 'vertical';
}

export declare interface NRadioProps {
    value: string | number | boolean;
    disabled?: boolean;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    label?: string;
    name?: string;
}

declare interface NRadioProps_2 {
    value: string | number | boolean;
    disabled?: boolean;
    size?: 'tiny' | 'small' | 'medium' | 'large';
    label?: string;
    name?: string;
}

export declare const NText: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

export declare const NTextarea: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<NTextareaProps_2>, {
modelValue: string;
placeholder: string;
disabled: boolean;
readonly: boolean;
autosize: boolean;
rows: number;
maxlength: undefined;
showCount: boolean;
resize: string;
status: undefined;
}>>, {
focus: () => void;
blur: () => void;
textareaRef: Ref<HTMLTextAreaElement | undefined, HTMLTextAreaElement | undefined>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string) => void;
input: (value: string) => void;
focus: (event: FocusEvent) => void;
blur: (event: FocusEvent) => void;
keydown: (event: KeyboardEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToRuntimeProps_3<NTextareaProps_2>, {
modelValue: string;
placeholder: string;
disabled: boolean;
readonly: boolean;
autosize: boolean;
rows: number;
maxlength: undefined;
showCount: boolean;
resize: string;
status: undefined;
}>>> & Readonly<{
onFocus?: ((event: FocusEvent) => any) | undefined;
onBlur?: ((event: FocusEvent) => any) | undefined;
onInput?: ((value: string) => any) | undefined;
"onUpdate:modelValue"?: ((value: string) => any) | undefined;
onKeydown?: ((event: KeyboardEvent) => any) | undefined;
}>, {
disabled: boolean;
modelValue: string;
placeholder: string;
resize: "none" | "both" | "horizontal" | "vertical";
readonly: boolean;
status: "success" | "warning" | "error";
maxlength: number;
showCount: boolean;
autosize: boolean | {
minRows?: number;
maxRows?: number;
};
rows: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare interface NTextareaProps {
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    autosize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    rows?: number;
    maxlength?: number;
    showCount?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    status?: 'success' | 'warning' | 'error';
}

declare interface NTextareaProps_2 {
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    autosize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    rows?: number;
    maxlength?: number;
    showCount?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    status?: 'success' | 'warning' | 'error';
}

export declare interface NTextProps {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    size?: 'tiny' | 'small' | 'medium' | 'large';
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    delete?: boolean;
    code?: boolean;
    depth?: 1 | 2 | 3 | 4 | 5;
    tag?: string;
}

declare interface NTextProps_2 {
    type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
    size?: 'tiny' | 'small' | 'medium' | 'large';
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    delete?: boolean;
    code?: boolean;
    depth?: 1 | 2 | 3 | 4 | 5;
    tag?: string;
}

export declare const NTimePicker: DefineComponent<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToRuntimeProps_8<NTimePickerProps_2>, {
modelValue: null;
placeholder: string;
disabled: boolean;
clearable: boolean;
showSeconds: boolean;
hourStep: number;
minuteStep: number;
secondStep: number;
format: string;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (value: string | null) => void;
change: (value: string | null) => void;
focus: (event: FocusEvent) => void;
blur: (event: FocusEvent) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_8<__VLS_TypePropsToRuntimeProps_8<NTimePickerProps_2>, {
modelValue: null;
placeholder: string;
disabled: boolean;
clearable: boolean;
showSeconds: boolean;
hourStep: number;
minuteStep: number;
secondStep: number;
format: string;
}>>> & Readonly<{
onChange?: ((value: string | null) => any) | undefined;
onFocus?: ((event: FocusEvent) => any) | undefined;
onBlur?: ((event: FocusEvent) => any) | undefined;
"onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
}>, {
disabled: boolean;
modelValue: string | null;
placeholder: string;
clearable: boolean;
format: "12" | "24";
showSeconds: boolean;
hourStep: number;
minuteStep: number;
secondStep: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare interface NTimePickerProps {
    modelValue?: string | null;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    showSeconds?: boolean;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    format?: '12' | '24';
}

declare interface NTimePickerProps_2 {
    modelValue?: string | null;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    showSeconds?: boolean;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    format?: '12' | '24';
}

export { }


declare global {
    interface Window {
        Vue?: any;
    }
}

