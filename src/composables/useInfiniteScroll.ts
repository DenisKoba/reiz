import { ref, onUnmounted, Ref, watch } from 'vue';

export const useInfiniteScroll = (
  loadMore: () => void,
): {
  intersectionObserverElement: Ref<HTMLElement | undefined>;
} => {
  const intersectionObserverElement = ref<HTMLElement>();
  let observer: IntersectionObserver | null = null;

  const createObserver = (): void => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    );
  };

  const destroyObserver = (): void => {
    observer?.disconnect();
    observer = null;
  };

  watch(intersectionObserverElement, (value) => {
    if (value) {
      createObserver();
      observer?.observe(intersectionObserverElement.value!);
    }
  });

  onUnmounted(() => {
    destroyObserver();
  });

  return {
    intersectionObserverElement,
  };
};
