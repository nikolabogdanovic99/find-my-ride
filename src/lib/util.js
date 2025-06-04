export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatPrice(price) {
    return new Intl.NumberFormat("de-CH", {
        style: "currency",
        currency: "CHF"
    }).format(price);
}

export function formatDistance(kms) {
    return new Intl.NumberFormat("de-CH", {
        style: "unit",
        unit: "kilometer",
        unitDisplay: "short"
    }).format(kms)
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString("de-CH", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}