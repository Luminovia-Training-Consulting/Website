const FNV_OFFSET_BASIS = 14695981039346656037n;
const FNV_PRIME = 1099511628211n;

export function buildNotFoundReference(address) {
    let hash = FNV_OFFSET_BASIS;

    for (const character of address || "/") {
        hash ^= BigInt(character.codePointAt(0));
        hash = BigInt.asUintN(64, hash * FNV_PRIME);
    }

    return `LV-${hash.toString(16).toUpperCase().padStart(16, "0")}`;
}
