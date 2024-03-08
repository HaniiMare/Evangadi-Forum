import React from 'react'
import Header from "../../components/Header/Header"
import bg from "../../assets/bg.jpg"
// import Home from "../../components/Home/Home"
// import Footer from "../../components/Footer/Footer"

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <main className='landing  bg-body-tertiary' style={{
        background: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <section className='container d-md-flex'>
          {/* form login/sign-up */}
          <div className='col'>
            <h1>The Form</h1>
          </div>

          {/* welcome message */}
          <div className='col'>
            <p className='text-warning fw-smibold'>About</p>
            <h1 className='fw-bold'>Evangadi Networks Q&A</h1>
            <div className='d-flex flex-column gap-4'>
              <p>
                No matter what stage of life you are in, whether you’re just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footsteps.
              </p>
              <p>
                Weather you are willing to share your knowledge or you are just
                looking to meet mentors of your own, please start by joining the
                network here.
              </p>
            </div>
            <div>
              <button className='btn btn-warning text-white fw-bold py-2 px-5 mt-3' style={{ background: "#FE8402" }}>HOW IT WORKS</button>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default LandingLayout