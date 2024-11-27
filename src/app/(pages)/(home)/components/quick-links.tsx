interface IQuickLinksProps {
  href: string
  name: string
}

export function QuickLinks ({href, name} : IQuickLinksProps) {
  return (
    <a href={href} className="bg-[#333333] rounded-xl my-4 py-4 font-semibold hover:bg-[#8DF244] w-full items-center flex justify-center hover:text-black transition-colors">{name}</a>
  )
}