export function stringToDate(date: string) {
    return new Date(date);
}

export function getDateFormatted(date: Date | string) {
    const dt = typeof date === "string" ? stringToDate(date) : date;

    const now = new Date();
    const diffHours = Math.floor(Math.abs(now.getTime() - dt.getTime()) / 36e5);
    if (diffHours === 0) {
        const diffMinutes = Math.floor(
            Math.abs(now.getTime() - dt.getTime()) / (60 * 1000)
        );
        if (diffMinutes === 0) {
            // seconds
            const diffSeconds = Math.floor(
                Math.abs(now.getTime() - dt.getTime()) / 1000
            );
            return `${diffSeconds}s`;
        } else {
            return `${diffMinutes} min`;
        }
    }
    if (diffHours < 24) {
        return `${diffHours}h`;
    }
    const day = dt.getDate().toString().padStart(2, "0");
    const month = (dt.getMonth() + 1).toString().padStart(2, "0");
    const year = dt.getFullYear().toString().slice(2);
    return `${day}/${month}/${year}`;
}
