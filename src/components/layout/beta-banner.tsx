import { AlertTriangleIcon } from "@/components/icons/alert-triangle"

export default function BetaBanner() {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p className="flex items-center justify-center gap-1">
          <AlertTriangleIcon className="h-4 w-4" />
          SneakerVault is currently in beta testing. Transactions are processed in test mode.
        </p>
      </div>
    </div>
  )
}