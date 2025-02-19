import { writing } from '@/data'

export default function Writing() {
  return (
    <div className="flex flex-col gap-5">
      {/* {writing.map((item, index) => (
        <a
          key={index}
          className="flex flex-col gap-2 group"
          target="_blank"
          rel="noopener noreferrer"
          href={'/'}
        >
          <div>
            <div className="sm:text-base group-hover:underline">{item.title}</div>
            <div className="sm:text-base text-fgSecondary">{item.date}</div>
          </div>
        </a>
      ))} */}
    </div>
  )
}

// export default function Cats() {
//   return (
//     <div>
//       <div className="mb-4 sm:mb-6">
//         <div className="text-xl sm:text-2xl">Writing</div>
//       </div>

//       <div className="flex gap-1.5 sm:gap-2">
//         <div className="w-1/2 flex flex-col gap-1.5 sm:gap-2">
//           <img src="cats/panda.png" className="rounded-sm" />
//           <img src="cats/junior.png" className="rounded-sm" />
//         </div>
//         <div className="w-1/2 flex flex-col gap-1.5 sm:gap-2">
//           <img src="cats/cat1.png" className="rounded-sm" />
//           <img src="cats/cat2.png" className="rounded-sm" />
//         </div>
//       </div>
//     </div>
//   )
// }
