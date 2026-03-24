export const buildQuery = (params?: Record<string, any>) => {
    return new URLSearchParams(
        Object.entries(params || {}).reduce((acc, [key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
                acc[key] = String(value);
            }
            return acc;
        }, {} as Record<string, string>)
    ).toString();
};