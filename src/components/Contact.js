import Parallax from './Parallax'

const Contact = () => {
  return (
    <section className="main-pad" id="contact">
      <div className="lrg-text" id="heading-contact">
        Contact Me.
      </div>
      <div id="flex">
        <Parallax type="parallax-img" tag="pic-contact" />
        <div>
          <div className="med-text">
            Heading
          </div>
          <div className="sml-text">
            Form
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact