const imagesDots = [
  'https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg',
  'https://www.themoviedb.org/t/p/w220_and_h330_face/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg',
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  dotsClass: 'slick-dots slick-thumb',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],

  customPaging: (i) => {
    console.log(i)
    return (
      <a>
        <img src={imagesDots[i]} />
      </a>
    )
  },
}

export default settings
