export enum ECategory {
  Facebook = "facebook",
  Twitter = "twitter",
  Instagram = "instagram",
  LinkedIn = "linkedin",
  Pinterest = "pinterest",
  Snapchat = "snapchat",
  TikTok = "tiktok",
  YouTube = "youtube",
  GitHub = "github",
}

interface IProduct_Category {
  label: string;
  value: ECategory;
  imageUrl: string;
}

export const PRODUCT_CATEGORIES: IProduct_Category[] = [
  {
    label: "Facebook",
    value: ECategory.Facebook,
    imageUrl: "/assets/facebook.png",
  },
  {
    label: "Twitter",
    value: ECategory.Twitter,
    imageUrl: "/assets//twitter.png",
  },
  {
    label: "Instagram",
    value: ECategory.Instagram,
    imageUrl: "/assets/instagram.png",
  },
  {
    label: "LinkedIn",
    value: ECategory.LinkedIn,
    imageUrl: "/assets/linkedin.png",
  },
  {
    label: "Pinterest",
    value: ECategory.Pinterest,
    imageUrl: "/assets/pinterest.png",
  },
  {
    label: "Snapchat",
    value: ECategory.Snapchat,
    imageUrl: "/assets/snapchat.png",
  },
  {
    label: "TikTok",
    value: ECategory.TikTok,
    imageUrl: "/assets/tiktok.png",
  },
  {
    label: "YouTube",
    value: ECategory.YouTube,
    imageUrl: "/assets/youtube.png",
  },
  {
    label: "GitHub",
    value: ECategory.GitHub,
    imageUrl: "/assets/github.png",
  },
];
export function findImageUrlByCategory(categoryName: ECategory): string {
  return (
    PRODUCT_CATEGORIES.find((single) => single.value === categoryName)
      ?.imageUrl || ""
  );
}
