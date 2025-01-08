import DsSkeleton from "../../../../components/DesignSystem/components/basic/skeleton/DsSkeleton.vue";

export default {
  title: "Basic/Skeleton",
  component: DsSkeleton,
  tags: ["autodocs"],
  argTypes: {},
};

export const Variants = () => ({
  components: { DsSkeleton },
  template: `
        <div class="container">
            <DsSkeleton fontSize="1rem" variant="text"/>
            <DsSkeleton height="40" variant="circular" width="40"/>
            <DsSkeleton height="60" variant="rectangular" width="210"/>
            <DsSkeleton height="60" variant="rounded" width="210"/>
        </div>
    `,
});

export const UserProfile = () => ({
  components: { DsSkeleton },
  template: `
        <div class="container">
            <DsSkeleton height="100" variant="circular" width="100"/>
            <DsSkeleton fontSize="1.5rem" variant="text" width="50%"/>
            <DsSkeleton fontSize="1rem" variant="text" width="80%"/>
            <DsSkeleton fontSize="1rem" variant="text" width="80%"/>
        </div>
    `,
});

export const ArticlePage = () => ({
  components: { DsSkeleton },
  template: `
        <div class="container">
            <DsSkeleton fontSize="2rem" variant="text" width="70%"/>
            <DsSkeleton height="200" variant="rectangular" width="100%"/>
            <DsSkeleton fontSize="1rem" variant="text" width="90%"/>
            <DsSkeleton fontSize="1rem" variant="text" width="90%"/>
            <DsSkeleton fontSize="1rem" variant="text" width="90%"/>
        </div>
    `,
});

export const ProductCard = () => ({
  components: { DsSkeleton },
  template: `
        <div class="container">
            <DsSkeleton height="200" variant="rectangular" width="100%"/>
            <DsSkeleton fontSize="1.5rem" variant="text" width="80%"/>
            <DsSkeleton fontSize="1rem" variant="text" width="60%"/>
        </div>
    `,
});
