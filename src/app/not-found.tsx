import Image from 'next/image'
import { PAGE_WIDTH } from '../../data'
import PillLink from '@/components/PillLink'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/dp-library.webp" alt="" width={PAGE_WIDTH} height={PAGE_WIDTH} />
      <h1 className="pt-10 pb-4 text-center">This page doesn't exist. Sorry about that.</h1>
      <PillLink label="Go home" href="/" newTab={false} />
    </div>
  )
}
