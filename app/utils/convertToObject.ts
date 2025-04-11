// Converts a Mongoose lean document into a serializable plain JS object.

export function convertToSerializeableObject<T extends Record<string, any>>(leanDocument: T): T {
  const result: Record<string, any> = { ...leanDocument };
  for (const key of Object.keys(result)) {
    if (result[key]?.toJSON && result[key]?.toString) {
      result[key] = result[key].toString();
    }
  }
  return result as T;
}
