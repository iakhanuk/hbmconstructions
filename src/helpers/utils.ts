export const getTimeInMs = (amount: number, unit: "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years") => {
    switch (unit) {
        case "seconds":
            return amount * 1000;
        case "minutes":
            return amount * 1000 * 60;
        case "hours":
            return amount * 1000 * 60 * 60;
        case "days":
            return amount * 1000 * 60 * 60 * 24;
        case "weeks":
            return amount * 1000 * 60 * 60 * 24 * 7;
        case "months":
            return amount * 1000 * 60 * 60 * 24 * 30;
        case "years":
            return amount * 1000 * 60 * 60 * 24 * 365;
    }
}