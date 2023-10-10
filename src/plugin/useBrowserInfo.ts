import { inject } from 'vue';

export function useBrowserInfo() {
    const isMobile = inject('isMobile');
    
    if (isMobile === undefined) {
        throw new Error('it must be on setup');
    }
    return isMobile;
}
