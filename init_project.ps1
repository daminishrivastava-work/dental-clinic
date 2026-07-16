# Clean temp
if (Test-Path temp) { Remove-Item -Recurse -Force temp }
# Clean root (except temp and script if we needed, but root should be empty right now)

# Generate Next app
npx -y create-next-app@latest temp --ts --tailwind --eslint --app --src-dir false --import-alias "@/*" --use-pnpm --yes

# Move files from temp to current directory
Move-Item -Path temp\* -Destination . -Force
Move-Item -Path temp\.* -Destination . -Force
Remove-Item -Recurse -Force temp

# Install runtime dependencies
pnpm add framer-motion lucide-react @supabase/supabase-js @google/genai cloudinary zod react-hook-form @hookform/resolvers zustand @tanstack/react-query @tanstack/react-table

# Install dev dependencies
pnpm add -D husky vitest @vitest/ui @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom @playwright/test

# Init shadcn-ui
npx shadcn@latest init -y -d

# Create folders
$dirs = @("components", "features", "hooks", "lib", "services", "types", "constants", "config", "styles", "providers", "contexts", "store", "utils", "public", "middleware", "database")
foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir
    }
}
