import './Banner.scss';

const Banner = (props) => {
  const imgUrl = "/assets/images/"+props.img;

  return (
    <>
      <div className="com-bnr" style={{
        backgroundImage:`url(${imgUrl})`
        }}>
        <div className="com-bnr__inner">
          <strong className="com-bnr__title">{props.title}</strong>
          <p className="com-bnr__desc">{props.desc}</p>
        </div>
      </div>
   </>
  )
}

export default Banner;