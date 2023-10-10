import { ref } from 'vue';
import { isMobileViewport } from '@/tools/browser-tools';

const isMobile = {
    install(app: any) {
        const isMobileRef = ref(isMobileViewport());

        app.mixin({
            mounted() {
                window.addEventListener('resize', () => {
                    isMobileRef.value = isMobileViewport();
                });
            },

            unmounted() {
                window.removeEventListener('resize', () => {
                    isMobileRef.value = isMobileViewport();
                });
            }
        });

        app.provide('isMobile', isMobileRef);
    }
};

export default isMobile;