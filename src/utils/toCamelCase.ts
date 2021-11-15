import { isObject } from "lodash";

export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));
}

export function toCamelCaseObj(obj: { [key: string]: any }): unknown {
  return Object.keys(obj)
    .reduce((prev, curr) => ({
      ...prev,
      [toCamelCase(curr)]: isObject(obj[curr]) ? toCamelCaseObj(obj[curr]) : obj[curr],
    }), {});
}

export default { toCamelCase };
