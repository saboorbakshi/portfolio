import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/scenary.webp" alt="" width={600} height={600} />
      <h1 className="pt-10 pb-4">
        We could not find the page you were looking for.
      </h1>
      <a href="/">Go home →</a>
    </div>
  )
}
