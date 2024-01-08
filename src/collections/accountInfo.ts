import {
  AfterChangeHook,
  BeforeChangeHook,
} from "payload/dist/collections/config/types";
import { Access, CollectionConfig } from "payload/types";
export const AccountInfo: CollectionConfig = {
  slug: "accountInfo",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id };
      },
    ],
  },
  admin: {
    useAsTitle: "accountInfo",
  },

  fields: [
    {
      name: "user_name",
      label: "Username",
      type: "text",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
    },
    {
      name: "product",
      label: "Select Product ",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
