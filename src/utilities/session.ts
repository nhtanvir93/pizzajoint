const session = {
    setItem(key: string, value: unknown) {
        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
        sessionStorage.setItem(key, stringValue);
    },
    getItem(key: string) {
        const value = sessionStorage.getItem(key);
        try {
            return value ? JSON.parse(value) : null;
        } catch {
            return value;
        }
    },
    removeItem(key: string) {
        sessionStorage.removeItem(key);
    },
    clear() {
        sessionStorage.clear();
    }
};

export default session;