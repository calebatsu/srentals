export default function Home(){
  return (
      <div>
          <h2>Contact Form</h2>
          <div className="container>">
              <h3>What's your query?</h3>
              <div className="input_container">
                  <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter your Name"
                  />
                  </div>
                  <div className="input_container">
                  <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter your Email"
                  />
                  </div>
                  <div className="input_container">
                  <textarea
                  name="message"
                  className="input"
                  placeholder="Enter your Message"
                  ></textarea>
                  </div>
                  <div className="btn_container">
                      <button>Send</button>
              </div>
          </div>
      </div>

  )
}