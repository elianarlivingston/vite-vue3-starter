export type Variants = 'default' | 'info' | 'success' | 'warning' | 'error' ;

export const VariantsIcons: Record<string, string> = {
    default: 'bell',
    info: 'info-circle',
    success: 'check-circle',
    warning: 'error',
    error: 'error-circle',
}

// Remplace for name vars
export const VariantsColors: Record<string, string> = {
    default: '140',
    info: '120',
    success: '240',
    warning: '360',
    error: '0',
}