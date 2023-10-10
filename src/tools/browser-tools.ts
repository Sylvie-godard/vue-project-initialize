
export const isMobileViewport = () => {
    return window.matchMedia('(max-width: 769px)').matches;
}