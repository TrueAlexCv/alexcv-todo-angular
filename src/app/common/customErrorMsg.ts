export function defaultErrorMsg(): string {
    return 'Error en el campo';
}

export function minLengthMsg(requiredLength: number): string {
    return `Debe tener al menos ${requiredLength} caracteres`;
}

export function maxLengthMsg(requiredLength: number, actualLength: number): string {
    return `Máximo de caracteres: ${requiredLength}. Actual: ${actualLength}`;
}
