import * as aws from "@pulumi/aws";

const param = new aws.ssm.Parameter("probe", {
    type: "String",
    value: "initial-value",
});

export const paramName = param.name;
export const paramValue = param.value;
