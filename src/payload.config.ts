import { buildConfig } from "payload/config";

export default buildConfig({
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [],
  routes: {
    admin: "/sell"
  },
  admin: {
    
  }
});
