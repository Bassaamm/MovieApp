export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
    </div>
  );
}
