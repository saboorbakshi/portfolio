export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-screen-custom flex justify-between items-center py-3">
        <a href="/" className="text-sm sm:text-[15px] text-fgSecondary hover:underline">
          Saboor Bakshi
        </a>

        <div className="flex items-center gap-1">
          <div className="relative flex items-center justify-center p-1">
            <div className="absolute size-[7px] animate-ping rounded-full bg-green-500 opacity-75"></div>
            <div className="size-[7px] rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm sm:text-[15px] text-fgSecondary">Updated Feb 19, 2025</div>
        </div>
      </div>
    </footer>
  )
}
