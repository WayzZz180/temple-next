import MarqueeCard from '@/components/shop/Cards/marqueeCard'

export default function Shop() {
  return (
    <>
      <div className="flex">
        <MarqueeCard />
        <MarqueeCard />
        <MarqueeCard />
        <MarqueeCard />
        <MarqueeCard />
        <MarqueeCard />
      </div>
      <style>
        {`
        .flex{
          display:flex;
          flex-direction:row;
        }
        `}
      </style>
    </>
  )
}
