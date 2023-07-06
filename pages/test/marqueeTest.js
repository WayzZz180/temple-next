import ShopMarqueeCard from '@/components/common/cards/ShopMarqueeCard'

export default function Marquee() {
  return (
    <>
      <div className="flex">
        <ShopMarqueeCard name="樂事" price={80} />
        <ShopMarqueeCard name="樂事" price={80} />
        <ShopMarqueeCard name="樂事" price={80} />
        <ShopMarqueeCard name="樂事" price={80} />
        <ShopMarqueeCard name="樂事" price={80} />
        <ShopMarqueeCard name="樂事" price={80} />
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
