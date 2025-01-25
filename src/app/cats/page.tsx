export default function Cats() {
  return (
    <div>
      <div className="mb-3 sm:mb-4">
        <div className="text-[23px] sm:text-[26px]">Cats</div>
        <div className="sm:text-base">...</div>
      </div>
      <div className="flex gap-1.5 sm:gap-2">
        <div className="w-1/2 flex flex-col gap-1.5 sm:gap-2">
          <img src="cats/panda.png" />
          <img src="cats/junior.png" />
        </div>
        <div className="w-1/2 flex flex-col gap-1.5 sm:gap-2">
          <img src="cats/cat1.png" />
          <img src="cats/cat2.png" />
        </div>
      </div>
      <div></div>
    </div>
  )
}
