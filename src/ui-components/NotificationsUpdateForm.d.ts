/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Notifications } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotificationsUpdateFormInputValues = {
    titre?: string;
    corps?: string;
};
export declare type NotificationsUpdateFormValidationValues = {
    titre?: ValidationFunction<string>;
    corps?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsUpdateFormOverridesProps = {
    NotificationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titre?: PrimitiveOverrideProps<TextFieldProps>;
    corps?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notifications?: Notifications;
    onSubmit?: (fields: NotificationsUpdateFormInputValues) => NotificationsUpdateFormInputValues;
    onSuccess?: (fields: NotificationsUpdateFormInputValues) => void;
    onError?: (fields: NotificationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsUpdateFormInputValues) => NotificationsUpdateFormInputValues;
    onValidate?: NotificationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsUpdateForm(props: NotificationsUpdateFormProps): React.ReactElement;
