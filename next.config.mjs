/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep server-only packages out of the bundle (used by the Express API in /server)
  serverExternalPackages: ["mongoose", "bcryptjs", "jsonwebtoken", "stripe", "google-auth-library"],
};
export default nextConfig;
